export interface EventTargetLike {
  addEventListener(type: string, listener: EventListener): void;
  removeEventListener(type: string, listener: EventListener): void;
}

export function createLatestRequestRunner<T>({
  load,
  apply,
  onError,
}: {
  load: (signal: AbortSignal) => Promise<T>;
  apply: (value: T) => void;
  onError: (error: unknown) => void;
}) {
  let generation = 0;
  let active: AbortController | null = null;

  return {
    async run(): Promise<void> {
      const requestGeneration = ++generation;
      active?.abort();
      const controller = new AbortController();
      active = controller;

      try {
        const value = await load(controller.signal);
        if (requestGeneration === generation && !controller.signal.aborted) {
          apply(value);
        }
      } catch (error) {
        if (requestGeneration === generation && !controller.signal.aborted) {
          onError(error);
        }
      } finally {
        if (requestGeneration === generation) active = null;
      }
    },
    dispose(): void {
      generation += 1;
      active?.abort();
      active = null;
    },
  };
}

export function installRefreshLifecycle({
  refresh,
  windowTarget,
  documentTarget,
  isDocumentVisible,
  intervalMs = 60_000,
  setIntervalFn = (handler, timeoutMs) => globalThis.setInterval(handler, timeoutMs),
  clearIntervalFn = (handle) => globalThis.clearInterval(handle as ReturnType<typeof setInterval>),
}: {
  refresh: () => void;
  windowTarget: EventTargetLike;
  documentTarget: EventTargetLike;
  isDocumentVisible: () => boolean;
  intervalMs?: number;
  setIntervalFn?: (handler: () => void, timeoutMs: number) => unknown;
  clearIntervalFn?: (handle: unknown) => void;
}): () => void {
  const onFocus: EventListener = () => refresh();
  const onVisibilityChange: EventListener = () => {
    if (isDocumentVisible()) refresh();
  };
  const timer = setIntervalFn(() => {
    if (isDocumentVisible()) refresh();
  }, intervalMs);

  windowTarget.addEventListener('focus', onFocus);
  documentTarget.addEventListener('visibilitychange', onVisibilityChange);

  return () => {
    clearIntervalFn(timer);
    windowTarget.removeEventListener('focus', onFocus);
    documentTarget.removeEventListener('visibilitychange', onVisibilityChange);
  };
}
