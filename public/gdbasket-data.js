window.GDB_DATA = {
  "_meta": {
    "ea": "gdBasket (MQL5 buy-grid GOLD M15 EA, formerly QQ-Style)",
    "generated": "2026-06-25",
    "sources": [
      "ea/gdBasket/CHANGELOG.md (public)",
      "ea/gdBasket/dev/gdbasket-dev/CHANGELOG.md (dev)",
      "ea/gdBasket/dev/gdbasket-v068-tester/CHANGELOG.md (v068 tester history)",
      "ea/gdBasket/_archive/public-v068/CHANGELOG_internal_pre_public.md (pre-public internal)",
      ".claude/plans/2-EAfactory/gdbasket-roadmap.md (idea ledger + lifecycle clues)"
    ],
    "tracks": {
      "public": "live build (root gdBasket.mq5) — live inputs only, no Test Mode/CSV/research",
      "dev": "superset dev line (dev/gdbasket-dev) — Test Mode, Live Mgmt virtual, CSV 3-layer, research toggles, opt instrumentation",
      "tester": "older v0.68-TESTER history line (dev/gdbasket-v068-tester), superseded by dev",
      "pre-public": "internal pre-public single-line history (v0.41-v0.68) — hedge era, before public/dev split"
    },
    "current": "public v2.00 / dev 2.00-dev-0.01 (2026-07-08)"
  },

  "versions": [
    {
      "version": "2.00 (public)",
      "date": "2026-07-09",
      "track": "public",
      "summary": "ตัวแจก (publish rebuild) เหลือโหมด SPORT+ เดียว — STRADA+/CORSA ยังจูนไม่ถึงเป้า ถอดออกจากตัวแจกก่อน จะเปิดคืนในรุ่นถัดไปเมื่อจูนถึงเป้า. เครื่องยนต์เทรด v2.00 เดิมไม่เปลี่ยน",
      "changes": [
        {"type": "changed", "text": "ไฟล์แจก gdBasket_v2.00.ex5: ช่อง Mode เหลือ SPORT+ ตัวเดียว (เลือก STRADA+/CORSA ไม่ได้) — การทำงานส่วนอื่นเหมือนเดิมทุกอย่าง"},
        {"type": "removed", "text": "STRADA+ / CORSA ออกจากตัวแจกชั่วคราว — รอจูนถึงเป้าแล้วเปิดคืนในรุ่นถัดไป"}
      ]
    },
    {
      "version": "2.00 (public)",
      "date": "2026-07-08",
      "track": "public",
      "summary": "major release — ยกเครื่องยนต์ dev v1.63 ขึ้น public ทั้งชุด: โหมดใหม่ STRADA+/SPORT+/CORSA + pyramid trail + TRAIL_AUTO + Spawn Guard + ZONE_HL. เทียบเงากับ dev ตรงทุกหลัก + CORSA สอบไขว้ปี 23-24 ผ่าน (net บวกทั้งสองปี). ชุดแจก publish/releases/v2.00/",
      "changes": [
        {"type": "added", "text": "โหมดใหม่ 3 ตัวแทน STRADA/SPORT เดิม: STRADA+ (สายนิ่ง — G1 เหนือ EMA75-of-High + ชุดค่าคงที่ + 1 ไม้/แท่ง) / SPORT+ (default — ZONE_HL 2 บ้าน high/low + preset CANONPLUS + Spawn Guard ฝัง) / CORSA (= SPORT+ บ้าน high ไม้หนักกว่า — ป้ายเตือน dev: ความแรงเท่าทุน x5)"},
        {"type": "added", "text": "pyramid trail (เติมไม้ขาขึ้น + เส้นล็อกกำไรไต่ตาม) + TRAIL_AUTO ผูกบ้าน (เลือก trail ให้เองต่อบ้าน high/low)"},
        {"type": "added", "text": "Spawn Guard DRIP/WIDEN ฝังใน preset (คุมจำนวนไม้ต่อแท่ง + ถ่างกริดวันดิ่ง — anti deep-basket)"},
        {"type": "removed", "text": "ตัด extra free margin ออก — ฐาน stop-out = ทุนต่อรอบเพียวๆ ตายตัว (ไม่มี input ให้เลือกแล้ว)"},
        {"type": "changed", "text": "sim leverage แยกทาง: tester = คานเทส 500 / live = อ่านคานจริงจากพอร์ต (แก้รอยรั่วจากสาย dev)"},
        {"type": "changed", "text": "webhook web journal คงเดิมครบ (ยิงสด + backfill — public-only) / Rescue engine ฝังแบบปิดตาย ยังไม่เปิดใช้"}
      ]
    },
    {
      "version": "2.00-dev-0.01",
      "date": "2026-07-08",
      "track": "dev",
      "summary": "activate version scheme dev/public ครั้งแรก — dev รีเซ็ตจาก flat 1.63 เป็น 2.00-dev-0.01 หลัง public base v2.00 ออก (identity เท่านั้น engine = v1.63 ทุก byte)",
      "changes": [
        {"type": "changed", "text": "identity: #property version = base numeric 2.00 / GDB_VERSION + ชื่อไฟล์ ex5 + comment หัวไฟล์ = full 2.00-dev-0.01 (artifact gdBasket_v2.00-dev-0.01_DEV.ex5)"},
        {"type": "changed", "text": "รอบถัดไป bump ผ่าน script → -dev-0.02; public base ขยับครั้งหน้า → dev รีเซ็ตตาม base ใหม่"}
      ]
    },
    {
      "version": "1.38",
      "date": "2026-06-24",
      "track": "dev",
      "summary": "ถอด PPTS LEGACY tiered ออก เหลือ trail เดียว แล้ว rename SMOOTH→PPTS เป็นชื่อทางการ — behavior-neutral (default เดิม = SMOOTH อยู่แล้ว)",
      "changes": [
        {"type": "removed", "text": "ลบ LEGACY tiered trail engine: TS_PPTS_* 8 defines + STSPptsConfig (tiered) + TS_LoadPpts + TS_ComputePpts (tiered) + enum ENUM_TRAIL_MODE + dropdown InpTrailMode"},
        {"type": "changed", "text": "rename SMOOTH→PPTS (engine เดียวที่เหลือ): TS_SM2_*→TS_PPTS_* / STSSmoothConfig→STSPptsConfig / TS_LoadSmooth→TS_LoadPpts / TS_ComputeSmooth→TS_ComputePpts / input InpTrailSm*→InpPpts{Arm,Lock,Curve,Cap,Step}; TrailTag prefix sm2→ppts; ลบ field selected_tier"},
        {"type": "changed", "text": "ค่า default = opt champion (arm 0.50/lock 0.20/curve 3.0/cap 0.95/step 0.10)"},
        {"type": "added", "text": "archived LEGACY tiered + step-trail code เก็บใน mql5 lib doc 08 (กู้กลับได้)"}
      ]
    },
    {
      "version": "1.37",
      "date": "2026-06-24",
      "track": "dev",
      "summary": "Spawn Guard fix folder-rename ตก dripblocks.csv (v0.98 folder rename hardcode 4 ไฟล์ → เพิ่ม dripblocks เป็น 5/5)",
      "changes": [
        {"type": "fixed", "text": "v0.98 folder-rename hardcode 4 ไฟล์ → gdbasket_dripblocks.csv ค้าง temp; เพิ่มเข้า csv_files[] + report ใช้ ArraySize → 5/5"}
      ]
    },
    {
      "version": "1.37 (public)",
      "date": "2026-06-24",
      "track": "public",
      "summary": "port batch proven fix จากสาย dev (v1.25-1.34) ขึ้น public — SO accounting net จริง + broker-SL-sole + exit_reason trail + lean; version กระโดด v1.22→v1.37 sync เลขกับ dev. ไม่เอา dev-only research",
      "changes": [
        {"type": "fixed", "text": "Fix B (จาก dev v1.31) — SO accounting: pnl_usd ตอน SO = ขาดทุนสุทธิจริง (residual − ทุน) แทน −เต็มทุน + col ใหม่ so_raw_loss_usd + audit fields (used_margin/margin_level/stopout)"},
        {"type": "changed", "text": "Fix A (จาก dev v1.25) — broker SL = ตัวปิด SO ตัวเดียว: ตัด virtual SO เชิงรุก (CloseAllBasket) + SO DRAIN RETRY ออกจาก OnTick เหลือ RecordTick; ปิด basket ตอน SO ให้ broker common SL + fallback-SO (กระทบ live SO path)"},
        {"type": "fixed", "text": "Fix C (จาก dev v1.26) — stop-out hardcode #define GDB_XM_STOPOUT 20.0 แทนอ่าน ACCOUNT_MARGIN_SO_SO 3 จุด"},
        {"type": "added", "text": "Fix 1 (จาก dev v1.34) — exit_reason แยก 'trail' (OnTradeTransaction branch DEAL_REASON_SL + net>=0)"},
        {"type": "removed", "text": "Fix 3 (จาก dev v1.27) — lean behavior-neutral: ลบ Detectors.mqh + pullback/rebound tracking + 2 column cycle CSV (max_rebound_pts/pullback_count) + dead CheckSoTrigger"},
        {"type": "changed", "text": "lean input labels: InpExtraFreeMargin→'Extra Free' / InpEnableSoCooldown→'SO Cooldown' + ตัดคำอธิบายยาว"}
      ]
    },
    {
      "version": "1.36",
      "date": "2026-06-24",
      "track": "dev",
      "summary": "Spawn Guard CSV evidence — WIDEN เพิ่ม col ใน spawns.csv + ไฟล์ใหม่ dripblocks.csv (proof DRIP บล็อกของจริง)",
      "changes": [
        {"type": "added", "text": "WIDEN → spawns.csv +3 col (bar_spawn_count/widened/eff_grid_mult)"},
        {"type": "added", "text": "DRIP → ไฟล์ใหม่ gdbasket_dripblocks.csv (Include/DripLog.mqh) log ทุก block ตอนราคาถึงกริดจริงแต่ถูก cap (proof)"}
      ]
    },
    {
      "version": "1.35",
      "date": "2026-06-24",
      "track": "dev",
      "summary": "Spawn Guard core (research, dev only) — 2 กลไกคุมความถี่วางไม้/แท่ง ผูก AGB zone กัน deep-basket วันดิ่งแรง; ทุก toggle OFF = behavior เดิม",
      "changes": [
        {"type": "added", "text": "WIDEN (soft) — วางเกิน N ไม้/แท่ง → grid ถ่าง ATR×InpWidenMult latch จนปิด basket"},
        {"type": "added", "text": "DRIP (hard cap) — วางครบ N ไม้/แท่ง → block spawn รอแท่งหน้า"},
        {"type": "added", "text": "ตัวนับ barSpawnCount (รวม G1) + resolve g_agb_set zone (เฉพาะ AGB/SPORT) + section === Spawn Guard === 9 input default OFF"}
      ]
    },
    {
      "version": "1.34",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "exit_reason แยก 'trail' ออกจาก common-TP (CSV label, behavior-neutral) — เดิม cycle ปิดด้วย runner trail SL ถูก default เป็น common-TP",
      "changes": [
        {"type": "added", "text": "OnTradeTransaction เพิ่ม branch: DEAL_REASON_SL + deal_net>=0 + ไม่มี SO pending → SetCycleExitReason('trail'). ตรรกะ 3 ทาง: TP=common-TP / SL+กำไร=trail / SL+ขาดทุน=SO"}
      ]
    },
    {
      "version": "1.33",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "opt_summary CSV ย้ายจาก FILE_COMMON → local terminal Files — รัน opt หลาย MT5 instance ไม่เขียนทับกัน",
      "changes": [
        {"type": "changed", "text": "ถอด FILE_COMMON 2 จุด (header truncate + OnTesterPass append) → แต่ละ instance เขียน MQL5\\Files ของตัวเอง (รูปแบบเดียวกับ cycle CSV ตั้งแต่ v0.98)"}
      ]
    },
    {
      "version": "1.32",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "SMOOTH trail rework → lock-from-peak + curve — SL อยู่เหนือทุนเสมอตั้งแต่ arm (เลิก gap-ramp ที่วาง SL ใต้ทุน) รัดสมูทตาม curve ยิ่งใกล้ TP",
      "changes": [
        {"type": "changed", "text": "สูตรใหม่: SL(buy) = entry + (peak−entry)×lock_now; lock_now = lock + (cap−lock)×pow(t,curve); arm วัดจาก PEAK (เดิม v1.28 วัด current profit)"},
        {"type": "changed", "text": "5 input ใหม่ InpTrailSmArm/Lock/Curve/Cap + InpTrailStepFrac (default placeholder รอ tune opt)"}
      ]
    },
    {
      "version": "1.31",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "fix SO accounting (attempts + opt CSV, behavior-neutral) — SO รอบเดิมจด −10000 เต็มทุนเพราะ m_so_sim_equity ค้าง 0 หลัง v1.25 ถอด active virtual-SO",
      "changes": [
        {"type": "fixed", "text": "attempts.csv pnl_usd = net จริง (eff_balance − deposit) + เพิ่ม so_raw_loss_usd + capture audit (used_margin/margin_level/stopout) จาก fallback ตอน broker SL ปิด"},
        {"type": "fixed", "text": "opt_summary.csv เพิ่ม so_loss_sum + avg_so_loss; recov/so_loss ใช้ raw แทนค่าเต็มทุน"}
      ]
    },
    {
      "version": "1.30",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "ถอด ZONE-PAIRED trail engine-per-zone ออกหมด — dropdown trail 3→2 ตัว (LEGACY/SMOOTH) เพื่อใช้ engine เดียวล้วนตอน tune; เก็บโค้ดลง mql5 lib กู้ได้",
      "changes": [
        {"type": "removed", "text": "ลบ enum member TRAIL_PAIRED + SetMode + SetTrailMode + ApplyAgbSet trail re-point block + TrailTag pair- branch (สลับ trail engine ต่อ zone: high→SMOOTH / low+mid→LEGACY)"},
        {"type": "added", "text": "archive โค้ดที่ถอดใน mql5 lib doc 08 section 'Removed: ZONE-PAIRED' + restore steps"}
      ]
    },
    {
      "version": "1.28",
      "date": "2026-06-23",
      "track": "dev",
      "summary": "SMOOTH trail rework → %-of-TP domain + ตัด safety TP — ปล่อย runner วิ่งเข้าหา common TP เดิม แล้วบีบ SL แน่นขึ้นตอนใกล้ TP",
      "changes": [
        {"type": "changed", "text": "Domain เปลี่ยน xATR → เศษส่วนของ TP จริง (tp_dist = frozen G1 ATR × tp_mult); gap ramp กลับทิศ คลาย→บีบ (gap_start 0.50 > gap_end 0.10)"},
        {"type": "removed", "text": "ตัด safety TP (เดิมวาง TP เหนือ peak เลื่อนหนี = ถ่าง TP) → TS_ComputeSmooth คืน new_safety_tp=0"}
      ]
    },
    {
      "version": "1.27",
      "date": "2026-06-22",
      "track": "dev",
      "summary": "lean Phase 0 — ตัด pullback/rebound tracking ทั้งระบบ + dead code (behavior-neutral verified: 2726 cycle 0 diff vs v1.22). net −218 บรรทัด",
      "changes": [
        {"type": "removed", "text": "ลบ Detectors.mqh ทั้งไฟล์ (ATR M15 มี consumer เดียว = pullback) + BasketCore 7 fields (max_rebound/pullback_count/in_pullback/rolling_low...) + 3 getters + 2 column cycle CSV (max_rebound_pts/pullback_count)"},
        {"type": "removed", "text": "ลบ dead UNREACHABLE block (!InpVirtualMgmt) + CheckSoTrigger method (0 call-site, SO รันผ่าน MarkSoPending + OnTrailReset fallback ตั้งแต่ v1.16/v1.18)"}
      ]
    },
    {
      "version": "1.26",
      "date": "2026-06-22",
      "track": "dev",
      "summary": "REVERT stop-out 80%→20% — v1.24 อ่าน XM ผิด. XM GOLD จริง = 20% (verified xm.com: margin call 50%, stop-out ต้องต่ำกว่าเสมอ → 80% เป็นไปไม่ได้)",
      "changes": [
        {"type": "reverted", "text": "GDB_XM_STOPOUT 80.0 → 20.0 (Common.mqh) + comment 4 จุด. ค่าเดิมก่อน v1.24 (20%) ถูกอยู่แล้ว. binary v1.24+v1.25 มี stop-out 80% ผิด — อย่าใช้"}
      ]
    },
    {
      "version": "1.25",
      "date": "2026-06-22",
      "track": "dev",
      "summary": "broker SL = sole SO close — ตัด virtual SO เชิงรุก + SO drain retry ทิ้ง เหลือ broker common SL ปิด SO ตัวเดียว (verified identical 2726 cycle 0 diff vs v1.22)",
      "changes": [
        {"type": "removed", "text": "ลบ SO DRAIN RETRY block (ไล่ปิดซ้ำทุก 60 วิ ตอน so_pending) ออกจาก OnTick"},
        {"type": "removed", "text": "ลบ virtual SO active-close block (CheckSoTrigger → CloseAllBasket → TEST MODE SIM SO triggered) เหลือเฉพาะ RecordTick"},
        {"type": "changed", "text": "คงเดิม: ApplyBrokerCommonSL (ตัวปิดหลัก) + fallback-SO ใน OnTrailReset (ลงบัญชี + cooldown)"}
      ]
    },
    {
      "version": "1.24",
      "date": "2026-06-22",
      "track": "dev",
      "summary": "[ENTRY ผิดทั้งหมด — REVERTED v1.26] stop-out 80% — เข้าใจ XM stop-out ผิดว่า 80% (ความจริง 20%)",
      "changes": [
        {"type": "added", "text": "[ผิด] เพิ่ม #define GDB_XM_STOPOUT 80.0 + GetTestStopout (single source) + hardcode PERCENT + 80 (ไม่ trust ACCOUNT_MARGIN_SO_SO) — REVERTED v1.26"}
      ]
    },
    {
      "version": "1.23",
      "date": "2026-06-22",
      "track": "dev",
      "summary": "opt-summary CSV via FrameAdd — opt คาย gdbasket_opt_summary.csv (1 row/ชุด) ครบทุก metric ผ่าน MT5 frame → workflow opt-first (เลิกรันเดี่ยวทุกชุด)",
      "changes": [
        {"type": "added", "text": "AttemptLog cumulative trackers (max_dd/max_basket/so_loss/basket_hist[6]) + OnTester FrameAdd(double[25]) + OnTesterInit/Pass/Deinit เขียน CSV 26 col (param + metric + basket-depth histogram)"}
      ]
    },
    {
      "version": "1.22",
      "date": "2026-06-20",
      "track": "public+dev",
      "summary": "lot-step hard/soft mode (enum OFF/SOFT/HARD แทน bool) — SOFT=ปัดทวีคูณทุกชั้น (เดิม) / HARD=คงฐานจน rawLot≥2×base แล้ว lot จริง; public ฝัง SOFT; dev ตัด toggle common SL",
      "changes": [
        {"type": "added", "text": "enum ENUM_LOTSTEP {OFF/SOFT/HARD} แทน bool เดิม + dropdown InpLotStepMode (dev default SOFT / public ฝัง SOFT)"},
        {"type": "removed", "text": "(dev) ตัด toggle InpEnableCommonSL — broker common SL ฝัง ON เสมอ (ตามให้เหมือน public v1.17)"}
      ]
    },
    {
      "version": "1.21",
      "date": "2026-06-20",
      "track": "public+dev",
      "summary": "extra-free margin toggle — input InpExtraFreeMargin (default OFF) คุมฐานคำนวน stop-out: OFF=ทุนต่อรอบเพียวๆ / ON=บวกกำไรรอบปัจจุบันเป็นเบาะ basket ลากลึกขึ้น",
      "changes": [
        {"type": "added", "text": "input InpExtraFreeMargin default OFF (public มี input ด้วย); wire 3 จุดเช็ค SO ผ่าน GetSoBalanceBase(InpExtraFreeMargin) + fallback ternary"}
      ]
    },
    {
      "version": "1.20",
      "date": "2026-06-20",
      "track": "public+dev",
      "summary": "fix BUG SO กินเกินทุนต่อรอบ (กระทบ live) — เดิมใช้ GetEffBalance (ทุน+กำไรสะสม) เป็นเบาะ → basket ลากลึกเท่ายอดบวม แตกแล้วกินกำไรทะลุเพดาน (เคสจริง 1000→2750 SO กิน 1750)",
      "changes": [
        {"type": "fixed", "text": "ฐานคำนวน stop-out = ทุนต่อรอบ (m_eff_deposit ผ่าน GetSoBalanceBase(false)) เสมอ; CheckSoTrigger รับฐานเป็น param; แก้ทุกจุดเช็ค SO (OnTick + log + common SL + fallback) ทั้ง public+dev"}
      ]
    },
    {
      "version": "1.19",
      "date": "2026-06-18",
      "track": "dev",
      "summary": "(dev) UI param revamp — ยุบ 2 toggle (UseProfile+UseManual) + ENUM_PROFILE → Mode dropdown เดียว InpMode 4 ค่า (AGB default/Manual/STRADA/SPORT) + preset ตายตัว canonical const. logic เทรดเดิม 100%",
      "changes": [
        {"type": "changed", "text": "enum ENUM_MODE {AGB/MANUAL/STRADA/SPORT} แทน ENUM_PROFILE; AgbActive()=(AGB||SPORT); preset ตายตัว GDB_CANON_* (STRADA/SPORT ไม่ดริฟต์แม้แก้ AGB input)"}
      ]
    },
    {
      "version": "1.19 (public)",
      "date": "2026-06-18",
      "track": "public",
      "summary": "(public) ตัด input InpTarget ออก — เหลือ Capital ช่องเดียว, Target ฝัง = Capital × GDB_TARGET_MULT (2.0) กันความสับสน Capital/Target บน live. behavior เท่า v1.18",
      "changes": [
        {"type": "removed", "text": "ตัด input InpTarget (public + publish) — Target คำนวณ InpCapital*2; dev คง 2 ช่องแยกไว้จูน optimize"}
      ]
    },
    {
      "version": "1.18",
      "date": "2026-06-13",
      "track": "public+dev",
      "summary": "fix fallback SO false positive (กระทบ live) — เดิม mark SO เช็คแค่ไม้เดี่ยวปิด DEAL_REASON_SL net<0 → bad tick/gap = false SO ที่รอบกำไรจริง reset capital −10k",
      "changes": [
        {"type": "fixed", "text": "guard ใน OnTrailReset ก่อน MarkSoPending — mark SO เฉพาะเมื่อ drawdown cycle ถึงระดับ virtual SO จริง (prev_cycle_profit<0 && min_equity<=so_threshold); ไม่ถึง → clear flag + log FALLBACK SO SKIPPED. พิสูจน์ Exp 20: SQ 2025 SO 7→4"}
      ]
    },
    {
      "version": "1.17",
      "date": "2026-06-13",
      "track": "public+dev",
      "summary": "dropdown label STRADA/SPORT (ตัดวงเล็บ) + common SL = มาตรฐาน ON เสมอ ตัด toggle (public). + publish-build toggle GDB_PUBLISH",
      "changes": [
        {"type": "removed", "text": "(public) ลบ toggle InpEnableCommonSL — common SL ON ฝังตลอด (มาตรฐานเดียว); dev เก็บ toggle (superset)"},
        {"type": "changed", "text": "enum profile dropdown label เหลือ STRADA/SPORT (ตัดคำอธิบายในวงเล็บ)"},
        {"type": "added", "text": "publish-build toggle GDB_PUBLISH (compile-time) — uncomment compile = build ตัด CSV export ทั้งหมด แจกได้; OFF = public ปกติ CSV ครบ tester-only"}
      ]
    },
    {
      "version": "1.16",
      "date": "2026-06-13",
      "track": "public+dev",
      "summary": "port batch 4 งานขึ้น public + Profile lineup STRADA/SPORT (เดิม BEST/BALANCE/AGB) + broker common SL. Default = v1.10 เป๊ะเมื่อ SPORT + Common SL OFF",
      "changes": [
        {"type": "added", "text": "(A) Lot floor at Capital — AutoLot G1 floored ที่ InpCapital กัน G1 skip ถาวรหลังรอบจบไม่ใช่ SO"},
        {"type": "added", "text": "(B) Trail BE-only — trail ปิดได้เฉพาะเสมอทุน/กำไร ไม่ขาดทุน (ComputeSafeSlForBuy preview < entry → ข้าม modify)"},
        {"type": "changed", "text": "(C) Profile lineup STRADA/SPORT — enum ENUM_PROFILE {STRADA, SPORT} (จอง CORSA comment) default SPORT; SPORT = AGB 2-switcher เดิมเป๊ะ rename / STRADA = G1 เฉพาะเหนือ EMA75-of-High ชุด high คงที่; magic 1234→260514; ตัด Entry Time 4 inputs"},
        {"type": "added", "text": "(D) Broker common SL — ComputeCommonSL + ApplyCommonSL วาง SL จริงราคาเดียวร่วมที่จุด virtual SO + fallback SO detection + toggle InpEnableCommonSL (OFF = v1.10 เป๊ะ). deviation จาก practice gdbasket (no SL by design)"}
      ]
    },
    {
      "version": "1.15",
      "date": "2026-06-13",
      "track": "dev",
      "summary": "profile lineup STRADA/SPORT (rename จาก BEST/BALANCE/AGB) + STRADA G1 gate ใหม่ + magic 260514 + EA description. SPORT = AGB switcher แชมป์เดิมเป๊ะ (แค่ rename)",
      "changes": [
        {"type": "changed", "text": "ENUM_PROFILE {STRADA, SPORT} default PROFILE_SPORT (เดิม BEST); AgbActive()=SPORT, StradaActive()=STRADA"},
        {"type": "added", "text": "STRADA G1 gate — Profile STRADA เปิด G1 เฉพาะแท่งปิดเหนือ EMA75-of-High ชุด high คงที่ ไม่สลับโซน"},
        {"type": "changed", "text": "magic 1234→260514; #property copyright/description 4 บรรทัด ASCII"}
      ]
    },
    {
      "version": "1.14",
      "date": "2026-06-13",
      "track": "dev",
      "summary": "panel 'Real' zone โชว์เงินบัญชีจริงเหมือน public — เลิก sim หลอกใน tester (display layer ล้วน)",
      "changes": [
        {"type": "fixed", "text": "panel Real zone = เงินบัญชีจริงเสมอ (SetTestData(true,sim...)→SetTestData(false,...)); virtual money โผล่เฉพาะช่อง Live Management แยก"}
      ]
    },
    {
      "version": "1.13",
      "date": "2026-06-13",
      "track": "dev",
      "summary": "fix 2 ราก: (A) ไม้แรกได้ 0.009 หลังรอบจบไม่ใช่ SO → G1 skip ถาวร (floor Capital) + (B) trail ปิดขาดทุนจิ๊บ (BE-only guard). engine math เดิม 100%",
      "changes": [
        {"type": "fixed", "text": "ราก A — floor ค่าที่ป้อน divisor ที่ Capital ก่อน LotStepBaseFloor (eff_balance หล่นใต้ Capital → 0.009 < min 0.01 → G1 SKIP ถาวร)"},
        {"type": "fixed", "text": "ราก B — trail SL guard: ก่อน ModifySL คำนวณ safe-clamped SL เทียบ entry; safe-SL < entry → skip modify (trail ปิดได้แค่ break-even ขึ้นไป)"}
      ]
    },
    {
      "version": "1.12",
      "date": "2026-06-13",
      "track": "dev",
      "summary": "parameter dialog UX revamp — Manual merged + master toggle + Zone Selected enum + Trail 3-way default SMOOTH + ลบ research section. engine math เดิม 100% (default run เปลี่ยน = flat Best + SMOOTH)",
      "changes": [
        {"type": "changed", "text": "Section reorder; Live Management always-on (ตัด toggle InpVirtualMgmt → dead code); AutoLot-only (ลบ ETestLotMode/InpTestBaseStdLot)"},
        {"type": "added", "text": "TRAIL_PAIRED ใน ENUM_TRAIL_MODE (zone-paired: high→SMOOTH / low+mid→LEGACY) + InpTrailMode default LEGACY→SMOOTH; Zone Selected enum (switcher/high/mid/low)"},
        {"type": "removed", "text": "ลบ research section ทั้งหมวด + InpAgbOnlyG1Side/ENUM_AGB_FILTER/InpAgbFilterMode (block research filter เดิม)"}
      ]
    },
    {
      "version": "1.11",
      "date": "2026-06-11",
      "track": "dev",
      "summary": "SMOOTH v2 = live-ATR domain (เลิกผูก TP ที่ freeze = ตาบอด vol สด) + AGB zone-trail pairing (high→SMOOTH / low+mid→LEGACY). LEGACY ไม่แตะ byte เดียว",
      "changes": [
        {"type": "changed", "text": "SMOOTH v2 engine — ทุกระยะคำนวณจาก ATR สด (arm 0.45 / gap 0.30→0.60 ไล่ peak 0.45→1.60 ATR); defines ใหม่ TS_SM2_*"},
        {"type": "added", "text": "AGB zone-trail pairing (InpAgbTrailPairing, default OFF) — ON: ApplyAgbSet เซ็ต trail engine ตามโซนล็อก ผ่าน SetTrailMode/SetMode (setter ใหม่)"}
      ]
    },
    {
      "version": "1.10",
      "date": "2026-06-10",
      "track": "public+dev",
      "summary": "คืน tiered PPTS ตัวจริงเป็น LEGACY — mimic แบบ ratio เทียบเท่าได้เฉพาะ TP 1.8 ใช้ข้าม config ไม่ได้ (public v1.09 +89.5k/12SO แทน +157.1k/8SO). บทเรียน: ต้องการผลเดิม=ใช้โค้ดเดิม",
      "changes": [
        {"type": "reverted", "text": "LEGACY = tiered PPTS ตัวจริง กลับมาทั้งเครื่อง byte-faithful จาก git 3f7e7c0 (arm 0.45/step 0.125/safety 2.0/tiers 0.30/1.20-0.65/1.60-0.60). public ส่ง TRAIL_LEGACY ตายตัว ไม่มี input trail"},
        {"type": "removed", "text": "ลบ defines mimic GDB_TRAIL_* (ค่าหลอก); runparams เขียน TS_PPTS_* canonical แทน"},
        {"type": "changed", "text": "fingerprint tag กลับเป็น _ppts; SMOOTH ยัง compile อยู่แต่ไม่ถูกเรียก (dev = เครื่องทดลอง)"}
      ]
    },
    {
      "version": "1.09",
      "date": "2026-06-10",
      "track": "public",
      "summary": "public backtest ได้จริง — tester bypass lock guard + CSV 3 ชั้น tester-only + leverage pin 1:1000. Live behavior = v1.08 เป๊ะ (ทุกบรรทัดใหม่ใต้ guard MQL_TESTER)",
      "changes": [
        {"type": "added", "text": "Tester bypass lock guard (v0.92 block wrap if(!MQL_TESTER)) → backtest custom symbol/server อื่นได้; live ติด guard เหมือนเดิม"},
        {"type": "added", "text": "CSV 3 ชั้น tester-only (attempts/cycles/spawns) + gdbasket_runparams.csv + folder auto-name + local per agent (port จาก dev)"}
      ]
    },
    {
      "version": "1.09 (dev)",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "default = แชมป์ 2-switcher — ชุด mid default = ค่าชุด low ทุกตัว → กด reset ได้ champion +157.1k/8SO ทันที (default-only, logic ไม่แตะ)",
      "changes": [
        {"type": "changed", "text": "default ชุด mid = ค่าชุด low (InpAgbMidAtrPeriod 14→20 / InpAgbMidGridMult 1.4→1.2 / InpAgbMidTpMult 1.4→1.6) → 2-switcher แชมป์ v1.03 โดยพฤติกรรม"}
      ]
    },
    {
      "version": "1.08",
      "date": "2026-06-10",
      "track": "public+dev",
      "summary": "TP-freeze restart recovery — GV GDB_TPF_* persist/restore ค่า ATR freeze ของ G1 ข้าม restart + lazy re-freeze; ปิด bug adopted basket โดนด่าน frozen<=0 บล็อก spawn เงียบ (ฝังตั้งแต่ v0.88)",
      "changes": [
        {"type": "fixed", "text": "GV ใหม่ GDB_TPF_* persist ตอน G1 freeze (live only) / restore ตอน adopt + lazy re-freeze จาก ATR ปัจจุบันเมื่อ GV ไม่มี"}
      ]
    },
    {
      "version": "1.07",
      "date": "2026-06-10",
      "track": "public+dev",
      "summary": "one profile: AGB (Profile dropdown removed) + trail = SMOOTH engine + legacy value set baked-in; ปลดระวาง tiered PPTS (ภายหลัง revert v1.10). version กระโดด 1.03→1.07 sync dev",
      "changes": [
        {"type": "removed", "text": "Profile dropdown removed (ENUM_PROFILE/InpProfile/ResolveProfile) — AgbActive() always true (public). + ถอด tiered PPTS engine ทั้งเครื่อง (input PPTS Params 8 ตัว) → archive doc 08"},
        {"type": "changed", "text": "Trail = SMOOTH engine + legacy constants baked-in (arm 0.25 / gap 0.17→0.17 + step 0.125 / safety 2.0 ATR) — no new inputs. mimic เทียบเท่า tiered เฉพาะ TP 1.8"}
      ]
    },
    {
      "version": "1.06",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "AGB เต็ม 3 โซน — mid ได้ชุดของตัวเอง (15/14/1.4/1.4 จาก opt emamid): high 0.8 / mid 1.4 / low 1.2",
      "changes": [
        {"type": "changed", "text": "Profile AGB จาก 2 ชุด → 3 ชุดเต็มโซน; input ชุด mid 4 ตัว (InpAgbMid*) แก้ได้; lock-at-G1 + GV persist รองรับชุด 2 ครบ"}
      ]
    },
    {
      "version": "1.04",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "research filter: เพิ่มโหมด mid (AGB_EMA_MID) — isolate โซนกลางเป็น regime เดี่ยวเพื่อ opt หาชุดค่า mid",
      "changes": [
        {"type": "added", "text": "dropdown InpAgbFilterMode เพิ่ม AGB_EMA_MID — G1 เปิดเฉพาะ close[1] อยู่ใน band (research opt-in)"}
      ]
    },
    {
      "version": "1.03",
      "date": "2026-06-10",
      "track": "public+dev",
      "summary": "Profile AGB — EMA75 zone lock-at-G1: เหนือ ema-high → HIGH (15/20/0.8/1.6) / นอกนั้น → LOW (15/20/1.2/1.6). ชนะเทส 17m (23 success/8 SO/+157.1k). dev: mid=ชุด low + default Capital 10k/Target 20k",
      "changes": [
        {"type": "added", "text": "(public) Profile AGB ใน dropdown (BEST/BALANCE/AGB, default BEST) + EMA75 band module + GV lock persistence + SetTpMult setter"},
        {"type": "changed", "text": "(dev) mid = ชุด low (1.2) + default Live Management Capital 1k→10k / Target 2k→20k (public ไม่แตะ)"}
      ]
    },
    {
      "version": "1.02",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "AGB: โซนกลางเปิด G1 ได้แล้ว — ใช้ชุด high (3-way → 2-way: ใต้ ema-low = low / นอกนั้น = high) เพิ่ม throughput",
      "changes": [
        {"type": "changed", "text": "G1 entry gate 3-way → 2-way; lock-at-G1 / GV persist / drain retry / lazy fallback ไม่เปลี่ยน. regression BEST เป๊ะ"}
      ]
    },
    {
      "version": "1.01",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "AGB เปลี่ยน semantic: mid-cycle switch → lock-at-G1 — ตัดสลับชุดกลางรอบ (โมเดล v0.99 ไม่เคย validate + แพ้ Best/Balance); ชุดเลือกตอน G1 ล็อกยาวทั้ง basket",
      "changes": [
        {"type": "removed", "text": "ลบ block mid-cycle switch ใน OnTick (per-bar eval หาย) → switch-mode code archived ใน spec + git f17668b"},
        {"type": "added", "text": "AGB lock persistence ข้าม restart (live) — GV GDB_AGBSET_* set/restore/del"}
      ]
    },
    {
      "version": "1.00",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "SO drain RETRY — แก้ bug ฝังตั้งแต่ v0.66: ตอน virtual SO trigger ตรงตลาดปิด ไม้ FAIL retcode 10018 หมดแล้วไม่มีใคร retry → basket ค้างลาก -118k. (public รับ fix นี้ที่ v0.97)",
      "changes": [
        {"type": "fixed", "text": "SO drain guard มี retry — ระหว่าง SO pending + basket active: GetTickets ใหม่ + CloseAllBasket ซ้ำ throttle 60s จนตะกร้าว่าง; log SO DRAIN RETRY closed=x/y"}
      ]
    },
    {
      "version": "0.99",
      "date": "2026-06-10",
      "track": "dev",
      "summary": "Profile AGB switcher (ตัวที่ 3 ถัดจาก BEST/BALANCE) — สลับชุดค่าตามโซน EMA75 อัตโนมัติ + สลับกลางรอบทุกแท่งปิด (ภายหลังเปลี่ยนเป็น lock-at-G1 v1.01). + rename สาย dev TESTER→DEV",
      "changes": [
        {"type": "added", "text": "Profile AGB switcher — G1 เปิดเฉพาะ close[1] เหนือ ema-high (ชุด high) หรือใต้ ema-low (ชุด low) โซนกลาง skip; ระหว่างรอบสลับทุกแท่งปิด; param 2 ชุด input แก้ได้ (8 ตัว)"},
        {"type": "changed", "text": "rename สาย dev: build tag TESTER→DEV + folder gdbasket-tester→gdbasket-dev"}
      ]
    },
    {
      "version": "0.98",
      "date": "2026-06-09",
      "track": "dev",
      "summary": "CSV local per-agent + folder auto-name — แต่ละ MT5 instance เก็บ CSV ของตัวเองไม่ทับกัน + ชื่อ folder บอก config+ช่วงเทสครบ + tool get_csv.py",
      "changes": [
        {"type": "changed", "text": "ถอด FILE_COMMON จาก CycleLog/AttemptLog/SpawnLog → เขียน {agent}\\MQL5\\Files ของตัวเอง (live/public ยัง Common); folder auto-name gdBasket_v{ver}_{filter}_L..A..G..T.._{start}_{end} (temp → rename ตอน OnDeinit)"},
        {"type": "added", "text": "tool backtest/get_csv.py รวบ CSV จากทุก instance เข้า runs/"}
      ]
    },
    {
      "version": "0.97",
      "date": "2026-06-10",
      "track": "public",
      "summary": "SO drain guard + RETRY (port จาก dev v1.00) — public เดิมไม่มี drain guard เลย (SO pending แล้วยัง spawn ต่อ + close ครั้งเดียวไม่ retry → basket -118k)",
      "changes": [
        {"type": "fixed", "text": "SO drain guard added (new in public) — SO pending บล็อก spawn/trail/TP-fallback จนตะกร้าว่าง"},
        {"type": "fixed", "text": "SO close now retries — GetTickets ใหม่ + CloseAllBasket ซ้ำ throttle 60s จนว่าง"}
      ]
    },
    {
      "version": "0.97 (dev)",
      "date": "2026-06-09",
      "track": "dev",
      "summary": "RunTag auto-generate — CSV subfolder จาก fingerprint ของรัน (โซน filter + param + วันเริ่ม) parallel ไม่ต้องตั้ง tag มือ (workflow ถูก supersede โดย v0.98)",
      "changes": [
        {"type": "added", "text": "BuildRunTag auto-generate เมื่อ InpRunTag ว่าง; InpRunTag = manual prefix override"}
      ]
    },
    {
      "version": "0.96",
      "date": "2026-06-09",
      "track": "public+dev",
      "summary": "AutoLot bugfix — Micro base lot ค้างที่ 1.0 ทุก Capital (Std floor 0.01 ×100 = 1.0 ก่อนแปลง contract). fix → Micro ใช้ขั้นต่ำ 0.1 จริง ฐาน lot ไล่ตาม Capital",
      "changes": [
        {"type": "fixed", "text": "ถอด pre-floor/clamp ที่รันก่อนแปลง contract → ใช้ raw bal/divisor แล้ว NormalizeVolume ปลายทาง floor/reject ตาม step/min จริง. Micro cap 100→0.1 / 1000→1.0; Standard unchanged"}
      ]
    },
    {
      "version": "0.95",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "PPTS cleanup ก่อน optimize — ถอด lock floor 3 ชั้น (SL = fallback-from-peak ล้วน, behavior-neutral) + safety TP 3.0→2.0 ATR + panel Last Withdraw placeholder",
      "changes": [
        {"type": "removed", "text": "PPTS lock floor removed — SL = peak − tier_fallback×ATR (เดิม max(lock_floor, fallback)); optimizer ไม่เห็น dead lock params"},
        {"type": "changed", "text": "Safety TP 3.0→2.0 ATR (เพดาน TP ไม่ใช่ SL); panel 'Last Withdraw' placeholder '-' จนกว่าจะถอนครั้งแรก"}
      ]
    },
    {
      "version": "0.94",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "Live Management overhaul — eff_balance ไล่ real history (NetProfit=(Balance+Withdraw)-Deposit) + panel right-anchored + capital guard + popup Alert ทุก guard",
      "changes": [
        {"type": "changed", "text": "RefreshFromRealHistory (live-only) — eff_balance/NetProfit/round/Remaining จาก real account history (เลิก virtual sim drift); Tester คง virtual engine"},
        {"type": "changed", "text": "panel right-anchored + ลบ head/Progress row"},
        {"type": "added", "text": "capital guard (Balance < Capital → INIT_FAILED + Alert) + guard popups Alert ทุก guard"},
        {"type": "fixed", "text": "'Label' ghost row (empty OBJ_LABEL → placeholder 'Label')"}
      ]
    },
    {
      "version": "0.93",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "panel right-anchored (ชิดขอบจอขวา, value ซ้าย/label ขวา, sector === ชิดขวา, แก้ Label ghost)",
      "changes": [
        {"type": "changed", "text": "panel anchor LEFT→RIGHT (CORNER/ANCHOR_RIGHT_UPPER); display layer ล้วน"}
      ]
    },
    {
      "version": "0.92",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "Lock guard — เปิดได้เฉพาะ XMGlobal + GOLD/GOLDm/GOLD#/GOLDm# + M15 (ผิด=INIT_FAILED) + default profile Balance→Best",
      "changes": [
        {"type": "added", "text": "Lock guard (OnInit) — broker XMGlobal + symbol 4 ตัว + TF M15; public active / tester wrap if(!MQL_TESTER) bypass ตอน backtest"},
        {"type": "changed", "text": "default profile = Best (InpProfile, เดิม BALANCE) ทั้ง 2 สาย"}
      ]
    },
    {
      "version": "0.91",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "Input note cleanup — ลบ description-only input rows 2 บรรทัด (comment-only, no behavior change)",
      "changes": [
        {"type": "removed", "text": "ลบ _lm_note1/_lm_note2 — Live Management เริ่มที่ Capital เลย"}
      ]
    },
    {
      "version": "0.90",
      "date": "2026-06-08",
      "track": "public+dev",
      "summary": "Panel right-edge + chart offset 20% + SO count คู่ success (display layer ล้วน)",
      "changes": [
        {"type": "changed", "text": "panel ชิดขวาบน (ResolveX + Reposition กัน chart resize) + NetProfit แสดง (N success / M SO)"},
        {"type": "added", "text": "chart shift on init 20% + restore ตอน removed; GetSoCount() = deposit_count-1"}
      ]
    },
    {
      "version": "0.89",
      "date": "2026-06-07",
      "track": "public+dev",
      "summary": "Panel virtual-aware 3 โซน English (Real / Live Management / basket) + input label cleanup + success counter persist (key SCC)",
      "changes": [
        {"type": "changed", "text": "panel virtual-aware — Live Management zone จาก virtual engine (Capital/Target/Progress/Remaining=Target-eff_balance); Real zone อ่าน account จริง"},
        {"type": "added", "text": "success counter (GetSuccessCount, persist GlobalVariable SCC) feed NetProfit (N success)"}
      ]
    },
    {
      "version": "0.88",
      "date": "2026-06-06",
      "track": "public+dev",
      "summary": "Live Management — virtual money engine ported to PUBLIC (public เป็น money-mgmt bot: virtual Capital→Target compound + virtual stop-out + restart persist + AdoptOpenPositions, no-CSV)",
      "changes": [
        {"type": "added", "text": "(public) Live Management section: InpCapital + InpTarget + USD guard; Virtual AutoLot (size จาก virtual Capital); Virtual stop-out (replaces v0.77 real-margin SO detect); restart recovery (GDB_LM_*) + AdoptOpenPositions; AttemptLog.mqh no-CSV mode"},
        {"type": "changed", "text": "(dev/tester v0.88) label polish: 'Virtual'→Capital/Target, +2 description rows, Account Leverage 0=auto-read ACCOUNT_LEVERAGE"}
      ]
    },
    {
      "version": "0.87",
      "date": "2026-06-06",
      "track": "public+dev",
      "summary": "Profile dropdown — one Profile input (BEST/BALANCE, default BALANCE) replaces Money/Grid/Exit numbers. runparams CSV (tester only)",
      "changes": [
        {"type": "changed", "text": "(public) Profile dropdown replaces Money/Grid/Exit inputs — ResolveProfile set ค่าตาม preset; structural param ฝัง #define"},
        {"type": "added", "text": "(dev) toggle InpUseProfile (ON=preset / OFF=ค่าที่พิมพ์ optimize) + WriteRunParams() พ่น gdbasket_runparams.csv (41 input fingerprint, tester only); tester default InpLotStepMode false→true / InpEnableCycleLog false→true"}
      ]
    },
    {
      "version": "0.86",
      "date": "2026-06-06",
      "track": "dev",
      "summary": "Live Management (tester) — Test Mode → ฟีเจอร์หลัก: virtual engine เดิน live + persist restart + basket adopt (AdoptOpenPositions = ของใหม่ ไม่เคยมี)",
      "changes": [
        {"type": "changed", "text": "rename InpTestMode→InpVirtualMgmt (default true) + ย้าย section Live Management บนสุด + default ทุน 10k→1k / เป้า 20k→2k"},
        {"type": "added", "text": "persist virtual state (SaveState/LoadState GlobalVariable GDB_LM*, live-only) + basket restart recovery AdoptOpenPositions (scan magic+symbol, parse GDB|Gn, rebuild)"}
      ]
    },
    {
      "version": "0.85",
      "date": "2026-06-05",
      "track": "dev",
      "summary": "AGB filter dropdown (all/ema-high/ema-low) + เพิ่มเส้น EMA-of-Low + default → champion (15/14/1.0/1.8). tester research only",
      "changes": [
        {"type": "changed", "text": "InpAgbFilterMode enum (AGB_ALL default / AGB_EMA_HIGH = v0.84 / AGB_EMA_LOW new) แทน bool InpFilterAboveEmaHigh; EmaFilter เพิ่ม EMA-of-Low handle"},
        {"type": "changed", "text": "default param → champion: LotScaling 25→15 / AtrPeriod 18→14 / AtrMult 0.8→1.0 / TpMult 2.6→1.8"}
      ]
    },
    {
      "version": "0.84",
      "date": "2026-06-05",
      "track": "public+dev",
      "summary": "public catch-up — lot-step (v0.79) + Account Panel (v0.80-82) + TesterHideIndicators(true) port ขึ้น public + ฝัง config A เป็น default (25/18/0.8/2.6). dev: show indicators in tester + dead-code cleanup",
      "changes": [
        {"type": "added", "text": "(public) Account Tracker Panel + lot-step mode (InpLotStepMode default OFF) + hide indicators in Tester"},
        {"type": "changed", "text": "Tuned defaults config A: Lot 20→25% / ATR period 14→18 / grid 1.2×→0.8× / TP 1.4×→2.6× ATR"},
        {"type": "removed", "text": "(dev) dead-code cleanup behavior-neutral — sell/hedge methods ใน Trader.mqh (buy-only ตั้งแต่ hedge ถอด v0.55) + per-position MFE/MAE + direction arrays + dead RegisterSpawnPosition"}
      ]
    },
    {
      "version": "0.83",
      "date": "2026-06-05",
      "track": "dev",
      "summary": "AGB filter step 1 — EMA-high entry filter (bool toggle InpFilterAboveEmaHigh, default OFF) isolate 'above band' regime + show indicators in tester. behavior เท่า v0.82 เมื่อ OFF",
      "changes": [
        {"type": "added", "text": "EmaFilter.mqh (EMA75-of-High handle) + 3 inputs (InpFilterAboveEmaHigh default false / InpEmaFilterPeriod 75 / InpEmaFilterTf M15) + G1 gate. KNOWN DEVIATION จาก practice gdbasket (no directional gate) — ยอมรับเพราะ default OFF + research-only"}
      ]
    },
    {
      "version": "0.82",
      "date": "2026-06-03",
      "track": "dev",
      "summary": "Account Tracker Panel + PPTS label rename (display-only, behavior เท่า v0.79). tester only",
      "changes": [
        {"type": "added", "text": "Account Tracker Panel (AccountPanel.mqh, read-only upper-left: Deposit/Withdraw/NetProfit/Balance/Equity/Unrealize/Remaining/Basket) + AttemptLog deposit/withdraw tracking"},
        {"type": "changed", "text": "PPTS input labels renamed (comment-only)"}
      ]
    },
    {
      "version": "0.79",
      "date": "2026-06-03",
      "track": "dev",
      "summary": "lot-step mode (InpLotStepMode, default OFF) — floor base G1 เหลือ 1 เลขนำ + floor grid leg เป็นทวีคูณ base (basket เบาแบบ 1k แต่ base ใหญ่)",
      "changes": [
        {"type": "added", "text": "InpLotStepMode default OFF — กด 2 จุด: base G1 floor 1 เลขนำ + grid G2+ คงที่ base จน rawLot≥2×base ค่อยกระโดด. OFF = +pct% เนียนทุกชั้น"}
      ]
    },
    {
      "version": "0.78",
      "date": "2026-06-02",
      "track": "dev",
      "summary": "CSV correctness + PPTS arm/tier1 merge (behavior-neutral) — lot จดจริงต่อ attempt / duration แท่ง M15 จริง / ตัด col floating_min ซ้ำ / ยุบ PPTS tier1 เข้า arm",
      "changes": [
        {"type": "fixed", "text": "attempts CSV std_equiv_lot = REAL starting base lot; cycle CSV duration_bars = แท่งจริง (/PeriodSeconds); ตัด col floating_min ซ้ำ (= mae_cycle_usd)"},
        {"type": "removed", "text": "PPTS tier1 trigger merged into arm (ลบ InpPptsT1TriggerAtr) — behavior-identical (arm 0.45 บดบัง tier1 0.40); input 12→11"}
      ]
    },
    {
      "version": "0.77",
      "date": "2026-06-01",
      "track": "public+dev",
      "summary": "SO cooldown — หลังบัญชีแตก พัก 1 วันเซิร์ฟเวอร์เต็มก่อนเปิด basket ใหม่; live อ่าน real margin level (public+dev = live ปัจจุบัน)",
      "changes": [
        {"type": "added", "text": "SO cooldown (server-day index floor(time/86400)) anchor GlobalVariable GDB_SOCD_* + toggle InpEnableSoCooldown (default ON); SO detect 2 ทาง (Test Mode sim / live real ACCOUNT_MARGIN_LEVEL)"}
      ]
    },
    {
      "version": "0.76",
      "date": "2026-06-01",
      "track": "dev",
      "summary": "rescue mode tester-tunable (TP-taper + add-lot levers, default OFF) — tester-only (ภายหลังยุบเข้า AGB เป็นพฤติกรรมฝั่งเซฟ)",
      "changes": [
        {"type": "added", "text": "rescue mode tester (TP-taper + add-lot, default OFF) — Exp 12: taper 6/10/0.6 +$1k / add-lot DROP"}
      ]
    },
    {
      "version": "0.75",
      "date": "2026-06-01",
      "track": "public+dev",
      "summary": "single PPTS trail (Peak Profit Trail System) — ยุบเหลือ trail เดียว, ตัด Trail Mode input + legacy single-step trail (old PPTS). behavior เท่าเดิม (tiered = default อยู่แล้ว)",
      "changes": [
        {"type": "removed", "text": "ตัด InpTrailMode input + legacy single-step trail (old 'PPTS') + enum ENUM_TRAIL_MODE; EA รัน PPTS (tiered peak trail) เสมอ. public ไม่มี input trail"},
        {"type": "changed", "text": "rename TrailSystems/TrailManager เหลือ family เดียว (STSPptsConfig/TS_LoadPpts/TS_ComputePpts); legacy step-trail archived doc 08"}
      ]
    },
    {
      "version": "0.74",
      "date": "2026-06-01",
      "track": "dev",
      "summary": "CSV 3-layer overhaul (attempt/cycle/spawn) + revive profit/MFE/MAE (dead ตั้งแต่ v0.55) + AutoLot ทุนสมมุติ + sim leverage. tester foundation วัดผล",
      "changes": [
        {"type": "added", "text": "AutoLot sim balance (InpTestLotMode AUTOLOT/FIXED) + sim leverage (InpTestSimLeverage default 1000, GetTestUsedMargin) + SpawnLog.mqh ใหม่ (1 แถว/ไม้ G)"},
        {"type": "changed", "text": "CycleLog รื้อ 26 cols + revive profit/mfe/mae/exit_reason; BasketCore track m_cycle_floating_max/profit/exit_reason"}
      ]
    },
    {
      "version": "0.73",
      "date": "2026-05-31",
      "track": "public+dev",
      "summary": "public live-ready package — Std/Micro account mode + rebrand QQ-Style→gdBasket + chart cosmetics + fix encoding (Art ลง live จริงทั้ง Standard + Micro)",
      "changes": [
        {"type": "added", "text": "Std/Micro account mode (InpAccountMode Auto/Standard/Micro) + SymbolSpec.mqh port; AutoLot Standard-equivalent → contract-aware (Micro ×100 equal exposure)"},
        {"type": "changed", "text": "rename 'QQ Style' → 'gdBasket' (headers/copyright) + chart cosmetics on init"},
        {"type": "fixed", "text": "Journal log mojibake (em-dash → ASCII -) + input labels box-drawing → ==="}
      ]
    },
    {
      "version": "0.72",
      "date": "2026-05-31",
      "track": "public+dev",
      "summary": "port TP-freeze + PFBK safety 0.30→3.0 ATR (ปล่อย runner) ออก public. live-ready",
      "changes": [
        {"type": "changed", "text": "port TP-freeze (m_tp_atr_pts_g1) จาก dev v0.71 เข้า public; PFBK safety TP 0.30→3.0 ATR (safety = เพดานกำไร ไม่ใช่ SL); PPTS safety คง 0.30"}
      ]
    },
    {
      "version": "0.71",
      "date": "2026-05-31",
      "track": "dev",
      "summary": "TP-freeze ATR-at-G1 — common TP เคยคำนวณจาก ATR สดทุก spawn ทำให้เป้ากำไร basket ลอยตามความผันผวน; freeze ATR ตอน G1 → เป้ากำไรนิ่งทั้ง cycle. foundation ของ rescue",
      "changes": [
        {"type": "fixed", "text": "CBasket เพิ่ม m_tp_atr_pts_g1 freeze ตอน G1, route เข้าทุกจุดคำนวณ TP (OpenFirst/CheckSpawn/GetCommonTp/CheckTpHitFallback); grid spacing ยังใช้ ATR สด; guard ATR≤0"}
      ]
    },
    {
      "version": "0.70",
      "date": "2026-05-29",
      "track": "public+dev",
      "summary": "Std/Micro account mode (dev) + public Trail Mode toggle (PPTS/PFBK, default PFBK) + TrailSystems lib",
      "changes": [
        {"type": "added", "text": "(public) Trail Mode toggle PPTS/PFBK (default PFBK) + TrailSystems.mqh copied module; fine-grained params hidden"},
        {"type": "added", "text": "(dev) Std/Micro account mode + Standard-equivalent lot conversion + symbol-spec validation + tick-money audit; PFBK tiered peak-fallback trail"}
      ]
    },
    {
      "version": "0.69",
      "date": "2026-05-28",
      "track": "dev",
      "summary": "Trail Mode: PPTS / PFBK — เพิ่ม PFBK tiered peak-fallback trail (experimental) + reusable TrailSystems.mqh. Rescue Mode removed จากสายนี้",
      "changes": [
        {"type": "added", "text": "InpTrailMode (PPTS default / PFBK) + PFBK Params (arm/step/safety + 3 tiers) + TrailSystems.mqh (pure math)"},
        {"type": "removed", "text": "Rescue Mode (inherited จาก v0.68 tester folder copy)"}
      ]
    },
    {
      "version": "0.68",
      "date": "2026-05-28",
      "track": "public",
      "summary": "Public build + tuned defaults (lot scaling 30→20% / pullback 0.15→0.20 / step 0.075→0.125) + แยก tester line. ตัด Test Mode/Cycle Log/Rescue/CSV ออก public path",
      "changes": [
        {"type": "changed", "text": "3 tuned defaults: InpLotScalingPct 30→20 / InpRetraceAtrMultiplier 0.15→0.20 / InpStepAtrMultiplier 0.075→0.125 (success 71.4→84.6% / SO 3→1 ครั้ง/ปี / Net +38.5%)"},
        {"type": "removed", "text": "(public cleanup) Test Mode + Cycle Log + Rescue Export + attempt/rescue CSV writers; ย้าย internal lab/test ไป _archive/public-v068/"},
        {"type": "added", "text": "(dev v0.68-TESTER) XM stop-out cashflow accounting — GetTestUsedMargin/GetTestStopout/CheckSoTrigger; SO cashflow = residual equity − deposit (เหลือ 50 → −950 ไม่ใช่ −1000)"}
      ]
    },
    {
      "version": "0.67",
      "date": "2026-05-27",
      "track": "pre-public",
      "summary": "Rescue diagnostic exporter + replay sandbox (diagnostic only, InpEnableRescueLog default false). rescue checkpoint G9 candidate",
      "changes": [
        {"type": "added", "text": "rescue export inputs (InpEnableRescueLog + 5 ตัว) + rescue_log_v067.csv + rescue math/replay/report scripts + hedge-support sandbox"}
      ]
    },
    {
      "version": "0.66",
      "date": "2026-05-27",
      "track": "pre-public",
      "summary": "Tester Mode bug fix 4 จุด (SO check order / cycle count / total_pnl guard / deal net commission) + journal trace",
      "changes": [
        {"type": "fixed", "text": "Bug 1 SO check ก่อน CheckSpawn; Bug 2 split RecordCycleClose → RecordDealProfit+IncrementCycleCount; Bug 3 m_total_pnl guard incomplete; Bug 4 deal_net = profit+swap+commission"}
      ]
    },
    {
      "version": "0.65",
      "date": "2026-05-26",
      "track": "pre-public",
      "summary": "Default tuning — grid distance 1.0→1.2 ATR + basket TP 0.75→1.4 ATR (no logic change)",
      "changes": [
        {"type": "changed", "text": "default grid distance 1.0→1.2 ATR; basket TP 0.75→1.4 ATR"}
      ]
    },
    {
      "version": "0.57",
      "date": "2026-05-26",
      "track": "pre-public",
      "summary": "Test Mode optimization support via OnTester custom metric — แก้ OnInit non-zero code 1 ตอน optimization (FILE_COMMON lock collision); optimizer ranks by net cash flow",
      "changes": [
        {"type": "added", "text": "CAttemptLog::GetTotalPnl() + OnTester custom metric (return net cash flow ตอน Test Mode)"},
        {"type": "fixed", "text": "optimization mode INVALID_HANDLE — Init detects MQL_OPTIMIZATION → in-memory only, skips FileOpen"}
      ]
    },
    {
      "version": "0.56",
      "date": "2026-05-26",
      "track": "pre-public",
      "summary": "Test Mode — withdrawal + margin call sim for success rate sweep (AttemptLog.mqh + 3 inputs: InpTestMode/InpTestEffectiveDeposit/InpTestWithdrawThreshold)",
      "changes": [
        {"type": "added", "text": "Include/AttemptLog.mqh (CAttemptLog) + Test Mode inputs (default OFF) + per-attempt CSV (gdbasket_attempts.csv) + SO/success/incomplete accounting"}
      ]
    },
    {
      "version": "0.55",
      "date": "2026-05-25",
      "track": "pre-public",
      "summary": "Cleanup — hedge mode + CSV exporters archived (ถอด hedge runtime + 11 indicator handles + 3 CSV exporters เหลือ pure buy grid baseline + CycleLog). ~1,527 บรรทัดออก",
      "changes": [
        {"type": "removed", "text": "Hedge mode runtime (5 inputs + HedgeLogic.mqh + HedgeDiagLog.mqh + wiring) → _archive/hedge-mode/"},
        {"type": "removed", "text": "3 CSV exporters (Snapshot/Features/DealLog) + 11 indicator handles ใน Detectors.mqh (ATR/ADX/EMA50/MACD M1/M5/M15)"},
        {"type": "changed", "text": "rename InpEnableDiagnostics → InpEnableCycleLog; เหลือ CycleLog standalone + ATR M15 handle เดียว"}
      ]
    },
    {
      "version": "0.54",
      "date": "2026-05-25",
      "track": "pre-public",
      "summary": "[PAUSED: spec mismatch] Hedge trigger replaced — IsStrongSell → grid distance threshold (InpMaxGridDistancePts). Tester FAIL (tick-driven vs event-driven spec)",
      "changes": [
        {"type": "changed", "text": "hedge trigger IsStrongSell (multi-indicator) → next_grid_step_pts > InpMaxGridDistancePts (default 2000); basket guard n<2 → n<1; age guard removed"},
        {"type": "removed", "text": "IsStrongSell() function body ใน Detectors.mqh"}
      ]
    },
    {
      "version": "0.53",
      "date": "2026-05-24",
      "track": "pre-public",
      "summary": "Ticket race fix (ResultOrder แทน scan POSITION_TIME) + manual close fallback (Layer 3 CheckTpHitFallback)",
      "changes": [
        {"type": "fixed", "text": "Ticket race ใน PlaceMarketBuyWithTP — ใช้ m_trade.ResultOrder() แทน scan PositionsTotal+POSITION_TIME (วินาที resolution ชน race) → orphan T/P=0 bug"},
        {"type": "added", "text": "Layer 3 manual close fallback (CheckTpHitFallback ทุก tick) + CloseAllBasket helper; safe buffer 5→50 pts"}
      ]
    },
    {
      "version": "0.52",
      "date": "2026-05-24",
      "track": "pre-public",
      "summary": "TP modify retry fix — broker reject (retcode 10016 invalid stops) ทำ ticket ค้างไม่มี TP; เพิ่ม safe stop-level helpers + retry queue",
      "changes": [
        {"type": "added", "text": "CTrader safe stop helpers (GetMinStopDistancePts/ComputeSafeTp-Sl) + retry queue (STpRetryItem + ProcessRetryQueue) + SafeWithRetry wrappers; OnTick drain retries ทุก tick"}
      ]
    },
    {
      "version": "0.50",
      "date": "2026-05-24",
      "track": "pre-public",
      "summary": "G1 hourly gate + cooldown removed — G1 เปิดเฉพาะแท่ง M15 open minute=0 + session pass (เลิก bar-count cooldown)",
      "changes": [
        {"type": "changed", "text": "G1 entry gate: bar-count cooldown → hourly boundary gate (open minute=0); OnTick order session → hour gate"},
        {"type": "removed", "text": "InpCooldownBars input + InCooldown methods"}
      ]
    },
    {
      "version": "0.45",
      "date": "2026-05-22",
      "track": "pre-public",
      "summary": "production defaults + input UX cleanup — Asia on / multi-spawn / cooldown 3 + master toggle InpEnableDiagnostics (รวม 4 CSV writers)",
      "changes": [
        {"type": "changed", "text": "defaults: InpEnableAsia false→true / InpOneSpawnPerBar true→false / InpCooldownBars 4→3"},
        {"type": "added", "text": "InpEnableDiagnostics master toggle (รวม snapshot+deals+cycles+hedge_diag CSV)"}
      ]
    },
    {
      "version": "0.46",
      "date": "2026-05-22",
      "track": "pre-public",
      "summary": "hedge exit fallback fix — ApplyHedgeTP จัดการ P_target<=0 ด้วย fallback (เดิม silent return ทำ sell ค้างไม่มี TP → cycle 244 blow up SO)",
      "changes": [
        {"type": "fixed", "text": "hedge exit silent fail — P_target<=0 ใส่ fallback TP ที่ avg entry ฝั่งใหญ่ → basket ปิด break-even แทน unbounded SO"}
      ]
    },
    {
      "version": "0.44",
      "date": "2026-05-22",
      "track": "pre-public",
      "summary": "refactor: split Basket.mqh into 4 modules (BasketCore/GridSpawn/HedgeLogic/TrailManager + orchestrator facade). zero behavior change",
      "changes": [
        {"type": "changed", "text": "Basket.mqh refactor monolith → 4 modules + virtual hook delegation (STrailResult)"}
      ]
    },
    {
      "version": "0.42-0.43",
      "date": "2026-05-22",
      "track": "pre-public",
      "summary": "hedge diagnostic race fix — IsStrongSell อ่าน indicator ซ้ำ 3 รอบใน 1 tick → buffer ไม่เสถียร flip verdict; fix ให้รับค่าจาก caller (1 read sequence)",
      "changes": [
        {"type": "fixed", "text": "race between successive CopyBuffer reads — IsStrongSell signature 0→5 params (รับค่าจาก caller); CheckHedgeTrigger 1 read sequence/tick"}
      ]
    },
    {
      "version": "0.41",
      "date": "2026-05-22",
      "track": "pre-public",
      "summary": "hedge diagnostic CSV export (CHedgeDiagLog → gdbasket_hedge_diag.csv) เมื่อ InpDebugHedge=true",
      "changes": [
        {"type": "added", "text": "CHedgeDiagLog class + gdbasket_hedge_diag.csv (1 row/H1 candle/cycle basket>=2)"}
      ]
    },
    {
      "version": "0.21",
      "date": "(core era)",
      "track": "pre-public",
      "summary": "ถอด upper lot cap — ไม้ทบไม่จำกัดเพดาน",
      "changes": [
        {"type": "removed", "text": "upper lot cap (no max-lot since v0.21)"}
      ]
    },
    {
      "version": "0.14+ (Core)",
      "date": "(core era)",
      "track": "pre-public",
      "summary": "Core buy-grid: Buy Grid DCA ไม่มี signal + ATR grid spacing 1.2x + ATR common TP (scale-free, broker ปิด) + LinearLot +20%/ชั้น + Peak trail + no SL. design = qq-style v3.53 infographic",
      "changes": [
        {"type": "added", "text": "Buy Grid DCA no-signal core + ATR grid spacing + ATR common TP scale-free + LinearLot +20% + Peak trail + no SL"}
      ]
    }
  ],

  "feature_lifecycle": [
    {
      "name": "SO drain retry (RETRY ปิด basket ซ้ำตอน SO)",
      "added_version": "dev v1.00 / public v0.97 (2026-06-10)",
      "added_reason": "virtual SO trigger ตรงตลาดปิด ไม้ FAIL retcode 10018 หมดแล้วไม่มีใคร retry + drain guard บล็อกทุก logic → basket ค้างไร้คนดูแล ลาก -118k (bug ฝังตั้งแต่ v0.66). public เดิมไม่มี drain guard เลย (SO pending แล้วยัง spawn ต่อ)",
      "removed_version": "dev v1.25 (2026-06-22) / public v1.37 (2026-06-24)",
      "removed_reason": "เปลี่ยนไปใช้ broker common SL เป็นตัวปิด SO ตัวเดียว (broker SL ทำ backstop แทนครบแล้วตั้งแต่ v1.16) → ตัด EA-side active close + drain retry; verified identical 2726 cycle 0 diff",
      "status_now": "removed (replaced-by broker-common-SL)",
      "track": "public+dev"
    },
    {
      "name": "virtual SO เชิงรุก (active virtual stop-out close ใน OnTick)",
      "added_version": "dev v0.86 / public v0.88 (2026-06-06)",
      "added_reason": "Live Management — simulate stop-out บน virtual Capital (replaces v0.77 real-margin SO detect ที่ real account reserve ใหญ่เกินไป ไม่เคยถึง broker stop-out); CheckSoTrigger → CloseAllBasket",
      "removed_version": "dev v1.25 (2026-06-22) / public v1.37 (2026-06-24)",
      "removed_reason": "broker common SL ปิดจุดเดียวกับ virtual SO เป๊ะอยู่แล้ว; หลักฐาน v1.24 SO ทุกตัว so_used_margin=0 = virtual SO เชิงรุกไม่เคยยิงทัน broker SL ปิดก่อนเสมอ → ตัด active close. virtual SO ยังคงเป็นตัวคำนวณจุด (CheckSoTrigger helper เก็บไว้ schema-stable) แต่ไม่ใช่ตัวสั่งปิด",
      "status_now": "removed-as-active-closer (broker SL = sole closer; CheckSoTrigger helper kept)",
      "track": "public+dev"
    },
    {
      "name": "Hedge sell-side / anti-martingale hedge (sell 3x lock buy)",
      "added_version": "ราว v0.40-0.42 (pre-public, 2026-05-22)",
      "added_reason": "VSS research — ตอน strong sell ลง: lock buy G1..G(N-1) + spawn H1 sell × 3.0 + reset TP จุดเดียวใต้ราคา; anti-martingale H2 H3 lot -30% ตอนราคาลงต่อ",
      "removed_version": "dev/pre-public v0.55 (2026-05-25) [active runtime] — hedge runtime ถอดออก. public ไม่เคยมี hedge ใน compile path (v0.68 = pure buy grid)",
      "removed_reason": "filter-based hedge approach (Phase F-O 11 runs sweep ตัน — false trigger เยอะ ไม่ถึงเป้า false=0) + grid-distance trigger v0.54 Tester FAIL (tick-driven vs event-driven spec mismatch). false hedge เสียหายกว่า (11 false cycles)",
      "status_now": "removed (archived _archive/hedge-mode/ + branch archive/v0.54-pre-cleanup; idea ledger = 'ทิ้งแล้ว')",
      "track": "pre-public (ไม่เคยขึ้น public)"
    },
    {
      "name": "PPTS LEGACY tiered trail (tiered peak-fallback, เดิม PFBK)",
      "added_version": "PFBK dev v0.69-0.70 (2026-05-28/29); กลายเป็น single PPTS tiered v0.75 (2026-06-01)",
      "added_reason": "tiered peak-fallback trail — SL = max(entry+lock×ATR, peak−fallback×ATR) ต่อ tier; v0.75 ยุบเป็น trail เดียวชื่อ PPTS (tiered = default อยู่แล้ว)",
      "removed_version": "ถอดครั้งแรก v1.07 (2026-06-10) → คืนเป็น LEGACY v1.10 (2026-06-10) → ถอดถาวร dev v1.38 (2026-06-24)",
      "removed_reason": "v1.07 แทนด้วย SMOOTH mimic แต่พัง (เทียบเท่าเฉพาะ TP 1.8) → v1.10 คืน tiered byte-faithful เป็น LEGACY. สุดท้าย v1.38 ถอด LEGACY ถาวรเพราะ default = SMOOTH/PPTS lock-from-peak อยู่แล้ว + ก่อน re-tune AGB ต้องใช้ trail เดียว",
      "status_now": "removed (archived doc 08 'Tiered PPTS engine archived', กู้กลับได้)",
      "track": "public+dev (public ยัง LEGACY tiered ฝังที่ v1.37; ถอดแล้วเฉพาะ dev v1.38)"
    },
    {
      "name": "SMOOTH trail engine (rename → PPTS ที่ v1.38)",
      "added_version": "v1.05/v1.07 (2026-06-10) เป็น engine ทดลอง; v1.11 SMOOTH v2 live-ATR; v1.28 %-of-TP; v1.32 lock-from-peak",
      "added_reason": "trail engine ทดลองคู่ LEGACY — วิวัฒน์หลายรอบ: ratio-mimic (v1.07) → live-ATR domain (v1.11) → %-of-TP (v1.28) → lock-from-peak + curve (v1.32, SL เหนือทุนเสมอ รัดสมูทใกล้ TP)",
      "removed_version": "ไม่ถูกถอด — rename → PPTS ที่ dev v1.38 (2026-06-24) เป็นชื่อทางการ engine เดียวที่เหลือ",
      "removed_reason": "n/a (กลายเป็น trail หลักตัวเดียว — ลบ field selected_tier + rename TS_SM2_*→TS_PPTS_*)",
      "status_now": "active (renamed SMOOTH→PPTS, dev v1.38; ค่า default opt champion arm 0.50/lock 0.20/curve 3.0/cap 0.95/step 0.10)",
      "track": "dev"
    },
    {
      "name": "ZONE-PAIRED trail (engine-per-zone: high→SMOOTH / low+mid→LEGACY)",
      "added_version": "v1.11 (2026-06-11, InpAgbTrailPairing default OFF) → v1.12 เป็น TRAIL_PAIRED ใน dropdown",
      "added_reason": "ApplyAgbSet เซ็ต trail engine ตามโซนที่ล็อก (high→SMOOTH v2 / low+mid→LEGACY tiered) ผ่าน SetTrailMode/SetMode",
      "removed_version": "dev v1.30 (2026-06-23)",
      "removed_reason": "ก่อน tune SMOOTH ต้องใช้ trail engine เดียวล้วนถึงเทียบ apple-to-apple ได้; ZONE-PAIRED ยังไม่มีประโยชน์จน SMOOTH+AGB tune เสร็จ → ถอดออกหมด ไม่เหลือ dead code",
      "status_now": "removed (archived doc 08 'Removed: ZONE-PAIRED' + restore steps)",
      "track": "dev"
    },
    {
      "name": "XM stop-out level 80%",
      "added_version": "dev v1.24 (2026-06-22)",
      "added_reason": "เข้าใจผิดว่า XM GOLD stop-out = 80% (เห็น basket แตกเหลือ residual ~10 → คิดว่าตัดลึกเกิน 20% ผิด); hardcode #define GDB_XM_STOPOUT 80.0",
      "removed_version": "dev v1.26 (2026-06-22)",
      "removed_reason": "อ่าน XM ผิด — XM GOLD จริง = 20% (verified xm.com: margin call 50%, stop-out ต้องต่ำกว่า margin call เสมอ → 80% เป็นไปไม่ได้). ค่าเดิมก่อน v1.24 (20%) ถูกอยู่แล้ว. residual ~10 เพราะ basket เบา used_margin เล็ก ไม่ใช่ stop-out ผิด",
      "status_now": "reverted (กลับเป็น 20%; binary v1.24+v1.25 ห้ามใช้)",
      "track": "dev (public ไม่เคยรับ 80% — ยัง 20% เดิมตลอด)"
    },
    {
      "name": "extra-free margin buffer toggle",
      "added_version": "v1.21 (2026-06-20, InpExtraFreeMargin default OFF; public มี input ด้วย)",
      "added_reason": "คุมฐานคำนวน stop-out: OFF=ทุนต่อรอบเพียวๆ / ON=บวกกำไรรอบปัจจุบันเป็นเบาะ basket ลากลึกขึ้นก่อนแตก",
      "removed_version": null,
      "removed_reason": "ไม่ถูกถอด — แต่ PARADIGM re-baseline (Art 2026-06-22) เคาะให้ tune ฐานทุนเพียวๆ default OFF (toggle เก็บ on/off ได้ ไม่ลบ feature) → ค่า opt เก่าทุกชุดใช้ไม่ได้ ต้อง re-tune no-buffer",
      "status_now": "active (default OFF; toggle เก็บ — ออกจากการ tune ตาม paradigm shift)",
      "track": "public+dev"
    },
    {
      "name": "pullback/rebound tracking + Detectors.mqh",
      "added_version": "v0.49 (2026-05-23) — pullback_count/max_rebound CSV fields + research instrumentation",
      "added_reason": "no-pullback drift signal research (VSS) — track rebound size + pullback frequency เพื่อแยก oscillation vs drift",
      "removed_version": "dev v1.27 (2026-06-22) / public v1.37 (2026-06-24)",
      "removed_reason": "lean Phase 0 ก่อน re-tune — pullback ไม่ feed spawn/trail/SO/TP (research VSS เลิกใช้) + ทำ CSV เพี้ยน; ลบ Detectors.mqh ทั้งไฟล์ (ATR M15 มี consumer เดียว = pullback) + 2 column CSV. behavior-neutral (2726 cycle 0 diff)",
      "status_now": "removed (behavior-neutral lean)",
      "track": "public+dev"
    },
    {
      "name": "AGB switch-mode (สลับชุดค่ากลางรอบทุกแท่งปิด)",
      "added_version": "dev v0.99 (2026-06-10)",
      "added_reason": "Profile AGB switcher แรก — ระหว่างรอบสลับชุด param ได้ทุกแท่งปิด (close[1] ใต้ ema-low = low / นอกนั้น = high)",
      "removed_version": "dev v1.01 (2026-06-10)",
      "removed_reason": "โมเดลสลับกลางรอบไม่เคยถูก research validate (Exp 16/17 เทสเฉพาะแบบ high-only/low-only = ชุดเดียวตลอด basket) + ผล backtest v0.99 แพ้ Best/Balance → เปลี่ยนเป็น lock-at-G1 (ชุดเลือกตอน G1 ล็อกยาวทั้ง basket)",
      "status_now": "replaced-by lock-at-G1 (switch-mode code archived spec + git f17668b)",
      "track": "dev"
    },
    {
      "name": "rescue mode (TP-taper + add-lot)",
      "added_version": "dev v0.76 (2026-06-01, tester-tunable default OFF); diagnostic exporter v0.67",
      "added_reason": "ช่วย basket ลึกปิดไว — taper TP + add-lot levers",
      "removed_version": "ยุบเข้า AGB (2026-06-04) — ไม่ถอด code แต่เลิกเป็น feature แยก",
      "removed_reason": "Art: rescue ของเดิมไม่ดีพอ (taper 6/10/0.6 = keeper +$1k/-1 SO แต่ hold ไม่ขยับ; add-lot = DROP เติมเชื้อ SO +4 SO เสีย $4.7k). rescue = 'ปรับความเข้ม basket ตามตลาด' = นิยาม AGB → ยุบเข้า AGB เป็นพฤติกรรมฝั่งเซฟ",
      "status_now": "superseded-by AGB (add-lot rescue = 'ทิ้งแล้ว' ใน idea ledger; tester OFF)",
      "track": "dev"
    },
    {
      "name": "common SL toggle (InpEnableCommonSL)",
      "added_version": "v1.16 (2026-06-13, default ON; OFF = v1.10 เป๊ะ)",
      "added_reason": "broker common SL = backstop กันตายเมื่อ EA ตาย/ตลาดปิด/gap; toggle ให้ปิดได้ (A/B + regression)",
      "removed_version": "public v1.17 (2026-06-13) / dev v1.22 (2026-06-20)",
      "removed_reason": "common SL เป็นระบบมาตรฐานที่ต้องมีเสมอ (Art) → ตัด toggle, common SL ON ฝังตลอด ปิดไม่ได้อีก (มาตรฐานเดียว). dev ตามให้เหมือน public ที่ v1.22",
      "status_now": "removed-toggle (common SL ON ฝังเสมอทั้ง 2 สาย)",
      "track": "public+dev"
    },
    {
      "name": "Profile dropdown BEST/BALANCE (+AGB)",
      "added_version": "v0.87 (2026-06-06, BEST/BALANCE) → v1.03 เพิ่ม AGB",
      "added_reason": "ยุบ input Money/Grid/Exit เหลือ dropdown เลือก preset; BEST = net สูง/ทนขาลง / BALANCE = champion SO น้อย/เทพขาขึ้น",
      "removed_version": "rename → STRADA/SPORT ที่ v1.15 (dev) / v1.16 (public) (2026-06-13)",
      "removed_reason": "จัดโครง lineup ใหม่: SPORT = AGB 2-switcher แชมป์เดิมเป๊ะ (rename) / STRADA = profile ใหม่ low-risk; BEST/BALANCE/AGB เดิม supersede. BEST/BALANCE reproduce ได้ผ่าน Manual mode",
      "status_now": "renamed → STRADA/SPORT (public default SPORT; dev Mode dropdown AGB/Manual/STRADA/SPORT default AGB ที่ v1.19)",
      "track": "public+dev"
    },
    {
      "name": "tiered PPTS lock floor (3 ชั้น)",
      "added_version": "ในตัว tiered PPTS (PFBK v0.70+)",
      "added_reason": "SL = max(lock_floor_from_entry, fallback_from_peak) ต่อ tier",
      "removed_version": "v0.95 (2026-06-08)",
      "removed_reason": "dead weight — แต่ละ tier เปิดเหนือ lock+fallback เสมอ + peak โตทางเดียว → locked floor ไม่เคยชนะ fallback-from-peak. ถอดออก SL = peak − tier_fallback×ATR (behavior-neutral ที่ค่า tuned); optimizer ไม่เห็น dead params",
      "status_now": "removed (behavior-neutral; ภายหลัง tiered ทั้งเครื่องถอดที่ v1.38)",
      "track": "public+dev"
    },
    {
      "name": "PPTS tier1 trigger (รวมเข้า arm)",
      "added_version": "ในตัว tiered PPTS",
      "added_reason": "tier1 trigger แยก (InpPptsT1TriggerAtr 0.40)",
      "removed_version": "dev v0.78 (2026-06-02)",
      "removed_reason": "behavior-neutral merge — arm 0.45 บดบัง tier1 0.40 อยู่แล้ว (peak >= current เสมอ → tier0 hold branch unreachable); ยุบเข้า arm ลด input 12→11 ตัด coupled arm/tier1 trap",
      "status_now": "removed (merged into arm; behavior-identical)",
      "track": "dev (+ canonical template)"
    },
    {
      "name": "lot-step mode OFF/SOFT/HARD",
      "added_version": "v0.79 bool (2026-06-03) → v1.22 enum OFF/SOFT/HARD (2026-06-20)",
      "added_reason": "floor base G1 1 เลขนำ + floor grid leg ทวีคูณ base (basket เบาแบบ 1k แต่ base ใหญ่). v1.22 เพิ่ม HARD (คงฐานจน rawLot≥2×base แล้ว lot จริง)",
      "removed_version": null,
      "removed_reason": "ไม่ถูกถอด — public ฝัง SOFT (ไม่มี input); dev dropdown default SOFT (HARD ใช้จูน/backtest); STRADA/SPORT บังคับ canonical SOFT",
      "status_now": "active (public ฝัง SOFT / dev dropdown; HARD ยังไม่ smoke = backlog รอค่า profile ใหม่)",
      "track": "public+dev"
    },
    {
      "name": "InpCooldownBars (bar-count cooldown)",
      "added_version": "core era (pre v0.45)",
      "added_reason": "รอ N M15 bars หลัง basket close ก่อน G1 ใหม่",
      "removed_version": "v0.50 (2026-05-24)",
      "removed_reason": "เปลี่ยนเป็น hourly boundary gate (G1 เปิดเฉพาะแท่ง :00) — predictable rhythm + align market session structure",
      "status_now": "removed (replaced-by hourly gate)",
      "track": "pre-public"
    },
    {
      "name": "Test Mode 3 CSV exporters (Snapshot/Features/DealLog) + 11 indicator handles",
      "added_version": "pre-public hedge era (ราว v0.40-0.47)",
      "added_reason": "VSS research data — per-bar snapshot CSV (~50 cols ATR/ADX/EMA50/MACD M1/M5/M15) + per-deal CSV; 11 indicator handles ใน Detectors.mqh",
      "removed_version": "v0.55 (2026-05-25)",
      "removed_reason": "VSS research pivot — filter-based hedge ตัน; cleanup pure buy grid baseline (readable + analyze ง่าย). pitfall #6 indicator handle leak ป้องกัน",
      "status_now": "removed (archived _archive/csv-export/; เหลือ CycleLog standalone + ATR M15 handle เดียว)",
      "track": "pre-public"
    },
    {
      "name": "Test Mode / Cycle Log / Rescue / attempt CSV (ใน public build)",
      "added_version": "pre-public v0.56-0.67",
      "added_reason": "Test Mode withdrawal sim + attempt CSV + rescue exporter (single line ก่อน public/dev split)",
      "removed_version": "public v0.68 (2026-05-28) — แยก tester line",
      "removed_reason": "public build cleanup — ตัด Test Mode + Cycle Log + Rescue Export + attempt/rescue CSV writers ออก compile path; ย้าย internal lab/test ไป _archive/public-v068/. dev/tester line เก็บไว้ (tester = superset)",
      "status_now": "removed-from-public (เก็บใน dev/tester line; ภายหลัง CSV port กลับ public tester-only ที่ v1.09 ใต้ guard MQL_TESTER)",
      "track": "public (split point)"
    },
    {
      "name": "AGB EMA-high entry filter (research)",
      "added_version": "dev v0.83 (2026-06-05, InpFilterAboveEmaHigh bool) → v0.85 dropdown (all/high/low) → v1.12 Zone Selected enum",
      "added_reason": "isolate 'above band' regime เพื่อ optimize แยกโซน (research, default OFF). KNOWN DEVIATION จาก practice gdbasket (no directional gate)",
      "removed_version": "v1.12 (2026-06-13) — ลบ research filter block เดิม (InpAgbOnlyG1Side/ENUM_AGB_FILTER/InpAgbFilterMode) แทนด้วย Zone Selected enum (InpAgbZone switcher/high/mid/low)",
      "removed_reason": "param dialog revamp — research ของไม่ปนของจริง; isolate ทำผ่าน InpAgbZone (SWITCHER default = lock-at-G1 / HIGH/MID/LOW = isolate research)",
      "status_now": "replaced-by Zone Selected enum (dev research, ภายหลังลบ research section บางส่วน); dev-only ไม่ port public",
      "track": "dev"
    },
    {
      "name": "Spawn Guard WIDEN + DRIP (per-zone)",
      "added_version": "dev v1.35-1.37 (2026-06-24)",
      "added_reason": "คุมความถี่วางไม้/แท่ง anti deep-basket วันดิ่งแรง (= ต้นเหตุ SO หลัก — Exp 22 per-bar guard พิสูจน์คุมความลึก basket ได้). WIDEN soft ถ่างกริด / DRIP hard cap block รอแท่งหน้า. ผูก AGB zone",
      "removed_version": null,
      "removed_reason": "ไม่ถูกถอด — feature research ใหม่ ทุก toggle OFF = behavior เดิม",
      "status_now": "active (dev only — ไม่ port public; default OFF)",
      "track": "dev"
    }
  ],

  "public_vs_dev": "ปัจจุบัน public v1.37 / dev v1.38 (2026-06-24). public = live build เท่านั้น (live inputs: Capital + Entry Time/System/Account + Profile dropdown STRADA/SPORT default SPORT, CORSA จองชื่อยังไม่ทำ). dev = superset ที่มีของ research + เครื่องมือวัดผลที่ public ไม่มี: (1) Test Mode / Live Management virtual engine แบบเต็ม + Mode dropdown 4 ค่า (AGB default/Manual/STRADA/SPORT) (2) CSV 3-layer logging (attempts/cycles/spawns + runparams) — public มี CSV เฉพาะ tester-only ใต้ guard MQL_TESTER ตั้งแต่ v1.09 (3) Spawn Guard WIDEN+DRIP (v1.35-37) + CSV evidence (dripblocks.csv) — public ไม่มี (4) opt-summary CSV via FrameAdd (v1.23) — public ไม่มี (opt = tester) (5) SMOOTH trail rework + lock-from-peak (v1.28-32) → v1.38 dev ถอด LEGACY เหลือ PPTS เดียว (public ยัง LEGACY tiered ฝังที่ v1.37). กฎ Art [CRITICAL]: tester/dev = superset, coding dev ก่อน → port public ทีหลังเมื่อ smoke ชัวร์ (ห้าม public แซง dev). public v1.37 = port batch proven fix dev v1.25-1.34 (SO accounting/broker-SL-sole/exit_reason trail/lean) — ไม่เอา dev-only research. PARADIGM re-baseline (2026-06-22): tune ฐานทุนเพียวๆ (extra-free OFF) + data SQ-aligned XM → re-tune AGB 3-zone + PPTS ใหม่หมด กำลังจะเริ่ม → v1.37 public = แค่ bug fix ชั่วคราว ไม่ใช่ค่า final (Phase 2-3 จบต้อง port ค่าใหม่อีกรอบ)",

  "notes": "1) เลข version ในแต่ละ track ไม่ตรงกันเป็นช่วง — public กระโดดเลขเพื่อ sync กับ dev หลายครั้ง: v0.97→v1.03 (ข้าม 0.98-1.02), v1.03→v1.07 (ข้าม 1.04-1.06), v1.22→v1.37 (sync dev). dev มี v1.07-v1.38 ต่อเนื่องกว่า. ค่า version อยู่ในโค้ด/ex5/CHANGELOG ไม่ใช่ชื่อ folder. 2) 'SMOOTH→PPTS rename' (v1.38) อาจสับสน: ชื่อ PPTS ถูก reuse — เดิม PPTS = tiered (ถอดออก) ตอนนี้ PPTS = lock-from-peak (engine เดิมชื่อ SMOOTH). ใน timeline ก่อน v1.38 'PPTS' = tiered LEGACY / หลัง v1.38 'PPTS' = lock-from-peak. 3) BEST/BALANCE vs STRADA/SPORT: roadmap + memory ระบุชัด BEST→ภายหลัง map ใกล้ SPORT high set, BALANCE = champion 15/14/1.0/1.8; แต่ lineup ใหม่ SPORT = AGB 2-switcher (ไม่ใช่ BEST flat ตรงๆ) — การ map ไม่ใช่ 1:1. 4) public ไม่เคยรับ stop-out 80% (v1.24-1.26 dev เท่านั้น) — public ยัง 20% ตลอด. 5) v0.74 ระบุ CSV profit/MFE/MAE 'dead ตั้งแต่ v0.55' = เขียน 0/empty ตลอดจน revive v0.74 (foundation วัดผล). 6) folder rename สาย dev: gdbasket-v069-tester → gdbasket-tester (v0.84, 2026-06-05) → gdbasket-dev (v0.99, 2026-06-10) + build tag TESTER→DEV. 7) pre-public CHANGELOG (v0.41-0.68) = hedge era ก่อน public/dev split — hedge sell-side + multi-indicator strong-sell + 3 CSV exporters ทั้งหมดถอดที่ v0.55 ก่อน public v0.68. 8) จุดกำกวมเล็กน้อย: roadmap timeline ข้าม v1.05 (มีใน prose 'SMOOTH_TP' แต่ไม่มี entry CHANGELOG dev เดี่ยว — v1.05 = trail SMOOTH_TP research ตาม session log, น่าจะ inline ใน v1.04-1.07 batch). public CHANGELOG ก็ไม่มี v1.00/1.01/1.02/1.04/1.05/1.06/1.11-1.15/1.19-1.21 เป็น entry เดี่ยว (port batch รวบใน v0.97/v1.03/v1.07/v1.16/v1.20/v1.37)."
}
;