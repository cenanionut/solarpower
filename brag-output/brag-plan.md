# Brag Plan: CNN SUNPWR — Intelligent Solar Tracking System

## What is this app?
A two-axis, sun-tracking solar panel (Arduino + servo pan-tilt + photoresistor) that measures its own voltage, current, power, and energy output via an INA219 sensor and streams live readings into a Firebase-authenticated React web dashboard — a full hardware-to-cloud pipeline built solo as a Bachelor's Thesis (UTCN, Cluj-Napoca).

## The angle
This is not a SaaS demo — it's an engineering artifact. The video should read like a premium hardware product film crossed with a spec sheet: confident, restrained, technical. The hook is that the build closes the entire loop — a physical panel tracks the sun, a sensor measures what it captures, and a real web app displays it live. Sell the *system*, not a pitch. Lean into precision and craft, not hype language.

## Hook (first 2-3 seconds)
Black-to-dark-gradient frame (the site's own navbar gradient). The orange sun mark spins in and settles, "CNN SUNPWR" wordmark locks in beside it, then "SAVING ENERGY" scales in exactly like the site's own hero animation (scale 2→1), with "What are you waiting for?" fading up beneath it. A cursor enters and clicks the site's real "VIEW DEVICE" button — this click is the hinge into Scene 2.

## Key moments (the middle)
- The clicked button transitions straight into the live device dashboard: four stat cards — Voltage, Current, Power, Energy — arrive on the dark glass-card treatment over the site's `#457b9d` blue, each gold value ticking upward like a live sensor readout.
- A hard pivot to "engineered from the ground up": a clean spec-sheet grid of the real build components — Arduino, INA219 current/voltage sensor, servo pan-tilt, photoresistor, solar panel — popping in one by one, each with its real label, like a hardware datasheet coming alive.
- (Optional connective beat inside the dashboard scene) the Energy tile's value keeps climbing after the others settle, implying continuous live logging.

## Outro / punchline
No sales CTA. A single restrained technical line — "Sensor to cloud, in real time." — then the wordmark settles with a small credit line: "Full-stack IoT · Bachelor's Thesis, UTCN." The sun mark does one final slow quarter-turn and holds.

## User flow worth showing
Entry → key action → result, taken straight from the real app:
1. **Entry:** viewer sees the real hero CTA button ("VIEW DEVICE") on the hero section.
2. **Key action:** simulated cursor click on that button.
3. **Result:** the Device dashboard loads and the four sensor-reading cards (Voltage/Current/Power/Energy) populate with live-looking gold values.

This is the centerpiece of the video — Scene 2 — not a landing-page recap.

## Tone
- Preset: `polished`
- Creative direction: engineering demo reel — a hardware-to-cloud IoT system treated like a premium product film / spec sheet brought to life. A little overselling of craft and precision, none of it sales language.
- Interpretation: 4 scenes, longer holds (per the polished preset), slow confident crossfades, generous letter-spacing on type, no aggressive motion. Confidence comes from restraint, not speed.

## Format: landscape — 1920x1080
## Duration: ~21s target

## Visual identity (from the project)
- Background: navbar gradient `linear-gradient(90deg, rgb(28,27,27) 0%, rgb(26,23,23) 100%)`; dashboard background `#457b9d`
- Card surface: `rgba(36, 38, 48, 0.815)` (dark glass card, `border-radius: 50px` pill-style corners in the real UI — soften to a more video-friendly large radius)
- Accent 1 (brand/sun): `orange`
- Accent 2 (data values): `gold`
- Text: `#fff`
- Display font: PT Sans, weight 700 (the site's actual Google Font import)
- Body font: PT Sans / Trebuchet MS fallback
- Strongest visual element: the dashboard's dark glass stat cards with gold numeric values over the blue backdrop, and the navbar's spinning orange sun mark

## Share copy (draft)
Built a solar tracker that reads its own voltage, current, and power output — sensor to cloud, live on a dashboard I built from scratch.

## Audio direction
- Role: sparse professional accents over a steady, clean instrumental bed — support, not lead
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` ("Steady and clean," recommended for `polished`/`cinematic`), tempo ≈110 BPM
- Music treatment: start at 0.0s under the hook, volume ~0.3, no hard drops — one gentle swell under the dashboard-reveal scene, fade to ~0.15 under the final outro line, tail off in the last second
- Music cue guidance: bundled preset read (`happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`). Strong cues in the 0–22s window worth targeting: **8.74s** (0.99), **9.29s** (0.97), **10.93s** (0.97), **13.11s** (0.98), **17.47s** (0.99), **18.56s** (0.99). Suggested use: land the Scene 1→2 transition (button click → dashboard) near 8.74s; let the four stat-card arrivals ride 9.29 / 10.93 / 13.11 (spaced enough to stay readable — do not use every beat); land the Scene 3→4 (outro wordmark) near 17.47–18.56s. Treat all as ±0.15s targets, not hard locks — never break card readability to chase a beat.
- Audio-reactive treatment: subtle; let the sun-mark glow and the stat-card edge glow breathe gently with music RMS. No waveform/equalizer visuals, no strobing.
- SFX posture: minimal but present (2-3 cues total, `polished` energy) — nothing louder than a soft interface tick
- Audio-coupled moments: the button click (Scene 1→2) gets a soft UI click SFX; each stat card's gold value settling gets a very quiet tick/drop, accented on the first and last card only, not all four; the hardware spec cards can share one soft card-arrival sound reused sparingly, not per-card
- Restraint rule: no chip/casino stack sounds, no glitch/error SFX, no dense rhythmic layering — this is a hardware product film, not a hype reel

## Storyboard

### Scene 1 — Ignition — 4s
Dark navbar-gradient background. Orange sun mark spins in and settles (~0.6s). "CNN SUNPWR" wordmark locks in beside it. Headline "SAVING ENERGY" scale-in (2→1, matching the real CSS keyframe) at ~1.0s, holds to ~2.0s. Subheadline "What are you waiting for?" fades up beneath at ~1.6s. At ~3.0s a cursor enters from off-frame and clicks the real "VIEW DEVICE" button.
Sequential/interaction: yes — sun mark spins in, then wordmark, then headline, then subheadline, ending on a simulated cursor click on the CTA button.
Audio intent: quiet confidence — the sun-mark's settle and the headline's scale-in should feel like a machine powering on, not a jump-scare.
Audio-coupled idea: soft click SFX exactly on the cursor's button click at ~3.0s, timed to the transition start.
Music: enters at 0.0s, low and steady under this scene.
Transition mood: clean, soft crossfade/push → Scene 2

### Scene 2 — The dashboard, live — 8s
The click resolves into the real Device dashboard: dark glass cards on the `#457b9d` blue. Four cards arrive in sequence — Voltage, Current, Power, Energy — each with its icon, label, and a gold numeric value that ticks upward briefly before settling (mimicking a live sensor readout). Energy's value keeps a faint slow climb after the others have settled, implying continuous logging.
Sequential/interaction: yes — 4 stat cards arrive one at a time (not simultaneously), each value count-up settling before the next card's arrival begins.
Audio intent: precise, satisfying — each settle should feel like a confirmed reading, not a game score.
Audio-coupled idea: quiet tick/drop SFX accented on the first card's arrival and the last card's settle only; skip SFX on the middle two to avoid clutter.
Music: swells very slightly under this scene; target the four card arrivals loosely toward the 9.29 / 10.93 / 13.11 strong-cue window, spaced for readability.
Transition mood: clean crossfade/hard-cut-to-hardware (a slightly firmer cut than Scene 1→2, to mark the shift from "using it" to "how it's built") → Scene 3

### Scene 3 — Engineered from the ground up — 5s
Cut to a clean spec-sheet grid on a dark background. Real component cards pop in one by one: Arduino, INA219 (current/voltage sensor), Servo Pan-Tilt, Photoresistor, Solar Panel — each just a label + a simple representative glyph/photo treatment, consistent card style echoing the dashboard cards' glass surface. This is the "what's actually inside it" beat.
Sequential/interaction: yes — 5 component cards arrive in quick, evenly spaced succession, each held long enough to read its label (short label floor ~0.8s), then the full set holds together for the last ~1s of the scene.
Audio intent: light mechanical precision — like a parts list clicking into place.
Audio-coupled idea: one shared soft card-arrival sound reused sparingly (e.g. every other card, not all five) so it stays clean, not clattery.
Music: steady, no swell — let this scene feel efficient and clipped.
Transition mood: soft crossfade → Scene 4

### Scene 4 — Outro — 4s
Cut back to the dark gradient background. Line settles center-frame: "Sensor to cloud, in real time." Beneath it, after a beat, the "CNN SUNPWR" wordmark returns with a small credit line: "Full-stack IoT · Bachelor's Thesis, UTCN." The orange sun mark does one final slow quarter-turn and holds still on the last frame.
Sequential/interaction: none (single held reveal, no list)
Audio intent: a quiet landing — the video should feel like it's setting something down gently, not slamming a logo.
Audio-coupled idea: one very soft accent (e.g. a gentle bell/drop, not a bang) under the wordmark's return, nothing on the final line.
Music: fades from ~0.3 to ~0.15 across this scene, tail off in the final second.
Transition mood: soft hold → end

**Music mood for this video:** polished / clean, steady instrumental — confidence through restraint
**Audio summary:** One steady, clean instrumental bed under the whole video (vol-12), rising almost imperceptibly through the dashboard-reveal scene and settling back down for the outro; 3-4 very quiet SFX accents mark the button click, the first/last dashboard card, and the wordmark's return — nothing louder than a soft tick anywhere in the video.
