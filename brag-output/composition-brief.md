# Hyperframes Composition Brief: CNN SUNPWR — Intelligent Solar Tracking System

## Objective
Create a short, polished, technical-engineering brag video for CNN SUNPWR, a Bachelor's Thesis IoT project: a two-axis sun-tracking solar panel that measures its own electrical output and streams it live into a web dashboard.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: ~21 seconds (must land 15-25s)

## Source Material
- Project root: `C:\Users\adion\Desktop\Ionuț\solarpower`
- Primary files read: `src/components/HeroSection.jsx` + `css/HeroSection.css`, `src/pages/Device.jsx` + `css/Device.css`, `src/components/DataInfoItem.jsx`, `src/components/Navbar.jsx` + `css/Navbar.css`, `src/components/CardsComponente.jsx`, `README.md`, `src/App.css`
- Product name: CNN SUNPWR
- Tagline / strongest claim: "SAVING ENERGY" / "What are you waiting for?" (hero copy, verbatim, already in English)
- Key UI or visual moment to recreate:
  1. The hero section's own headline animation (scale 2→1 on "SAVING ENERGY", fade-down on the subheadline) and the navbar's spinning orange sun mark (`.fa-sun { color: orange; animation: spin 5s infinite; }`)
  2. The Device dashboard's 4 stat cards (Voltage / Current / Power / Energy) — dark glass cards (`rgba(36, 38, 48, 0.815)`, large rounded corners) on a `#457b9d` blue background, each with a gold (`gold`) numeric value
  3. A clean spec-sheet grid of real hardware components: Arduino, INA219 (current/voltage sensor), Servo Pan-Tilt, Photoresistor, Solar Panel
- Copy that must appear verbatim:
  - "SAVING ENERGY"
  - "What are you waiting for?"
  - "CNN SUNPWR"
  - "Voltage" / "Current" / "Power" / "Energy" (with units V / A / W / Wh)
  - "Arduino", "INA219", "Servo Pan-Tilt", "Photoresistor", "Solar Panel"
- On-screen text language: English throughout (translated from the Romanian site where needed — most of the material referenced here is already English in the source). Do not use Romanian nav labels.
- Original nav CTA was "URMARESTE DEVICE" (Romanian) — render its English equivalent as "VIEW DEVICE" for the clicked button in Scene 1.

## Creative Direction
- Tone preset: polished
- Creative direction: engineering demo reel — a hardware-to-cloud IoT system treated like a premium product film / spec sheet brought to life. Slightly oversell the craft and precision; never use sales/marketing language.
- Interpretation: 4 scenes, longer holds, slow confident crossfades, generous letter-spacing, no aggressive motion or all-caps shouting except the existing "SAVING ENERGY" headline (which is uppercase in the source itself). Confidence through restraint, not speed.
- Angle: This is not a SaaS demo — it's an engineering artifact. Sell the system closing its own loop: a physical panel tracks the sun, a sensor measures what it captures, a real web app displays it live.
- Hook: Sun mark spins in, wordmark locks in, "SAVING ENERGY" scales in exactly like the site's own CSS keyframe, subheadline fades up, cursor clicks "VIEW DEVICE".
- Outro / punchline: "Sensor to cloud, in real time." → wordmark returns with credit line "Full-stack IoT · Bachelor's Thesis, UTCN" → sun mark does one final slow quarter-turn and holds.
- Avoid:
  - Generic SaaS language ("streamline", "empower", etc.)
  - Abstract filler visuals unrelated to the actual hardware/software
  - Redesigning the palette or introducing colors not present in the project
  - Sales CTAs — this is a portfolio/technical piece, not a pitch

## Visual Identity
- Background: navbar gradient `linear-gradient(90deg, rgb(28,27,27) 0%, rgb(26,23,23) 100%)`; dashboard scene background `#457b9d`
- Card surface: `rgba(36, 38, 48, 0.815)` dark glass card
- Text: `#fff`
- Accent 1 (brand): `orange` (sun mark)
- Accent 2 (data): `gold` (stat values)
- Display font: PT Sans, weight 700 (Google Fonts `PT+Sans:wght@700`, loaded by the real site)
- Body font: PT Sans, regular weight (fallback: Trebuchet MS)
- Visual references from the project: spinning orange sun icon (navbar), dark-glass stat cards with gold values (Device dashboard), hero scale-in/fade-down keyframes (HeroSection.css)

## Storyboard
Use the full storyboard in `brag-output/brag-plan.md` as the creative contract. Summary:

1. **Ignition** — 4s — Sun mark spins in, "CNN SUNPWR" wordmark, "SAVING ENERGY" scale-in, "What are you waiting for?" fade-up, cursor clicks "VIEW DEVICE" button.
2. **The dashboard, live** — 8s — Click resolves into the Device dashboard; 4 stat cards (Voltage/Current/Power/Energy) arrive in sequence on the `#457b9d` background, gold values ticking up and settling; Energy keeps a faint slow climb after the others settle.
3. **Engineered from the ground up** — 5s — Cut to a dark spec-sheet grid; 5 real component cards (Arduino, INA219, Servo Pan-Tilt, Photoresistor, Solar Panel) pop in in quick, evenly spaced succession, then hold together briefly as a full set.
4. **Outro** — 4s — "Sensor to cloud, in real time." settles center-frame; wordmark + credit line "Full-stack IoT · Bachelor's Thesis, UTCN" return; sun mark does a final slow quarter-turn and holds.

## Audio
- Audio role: sparse professional accents over a steady, clean instrumental bed — support, not lead
- Audio arc: bed enters low under Scene 1, very slight swell under Scene 2 (the dashboard reveal), steady/no swell under Scene 3, fades from ~0.3 to ~0.15 across Scene 4 with a tail-off in the final second
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (bundled brag asset — "Steady and clean", recommended for polished/cinematic, ≈110 BPM)
- Music treatment: volume ~0.3 baseline, never above 0.4; no hard drops; gentle only
- Music cue guidance: bundled preset at `skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.{md,json}` (or the installed-skill equivalent under `~/.claude/skills/brag/assets/music/cues/`). Strong cues worth targeting in the 0-22s window: 8.74s (0.99), 9.29s (0.97), 10.93s (0.97), 13.11s (0.98), 17.47s (0.99), 18.56s (0.99). Suggested: land the Scene 1→2 transition (button click → dashboard) near 8.74s if the timeline allows; loosely target the stat-card arrivals in Scene 2 toward 9.29/10.93/13.11 (spaced for readability, not every beat); land the Scene 3→4 outro-wordmark return near 17.47-18.56s. Treat all as ±0.15s soft targets — never sacrifice card/text readability to chase a beat.
- Audio-reactive treatment: subtle — let the sun mark's glow and the stat cards' edge glow breathe gently with music RMS/bass. No waveform/equalizer visuals, no strobing, no heavy pulsing.
- Audio-coupled moments:
  - Scene 1→2 (button click) — simulated interaction; soft UI click SFX exactly on the click
  - Scene 2 (stat cards) — quiet tick/drop SFX accented on the first card's arrival and the last card's settle only; skip the middle two
  - Scene 3 (component cards) — one shared soft card-arrival sound reused sparingly (e.g. every other card), not on all five
  - Scene 4 (wordmark return) — one very soft accent (gentle bell/drop, not a bang); nothing on the final line
- SFX selection guidance: match the gesture — UI click for the cursor click, card/drop sounds for card arrivals, nothing louder than a soft interface tick anywhere. Reference `sfx-analysis.md` and prefer low high-frequency-risk files since this is a polished, repeated-moment-heavy video.
- SFX analysis guidance: `skills/brag/assets/sfx/sfx-analysis.md` (or installed-skill equivalent)
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation — 2-3 total cues, `polished` energy.
- Audio files: copy the chosen music and any Hyperframes-selected SFX into `brag-output/composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). `/brag` is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project (the dashboard stat cards and the hero headline animation both qualify — use both).
- Keep all text readable in the final render (WCAG contrast will be gated by `check`).
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints — ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in this 21s video.
- Use SFX to support motion and interaction as described above; keep total SFX count low (polished restraint).
- Honor the planned music fade-out under the outro.
- Extract audio data and wire at least one visual element (sun-mark glow / card edge glow) to RMS/frequency bands for subtle audio-reactive treatment, per the `hyperframes-creative` audio-reactive workflow. If extraction is unavailable, document it and skip — do not block the render.
- Use local assets for audio and any required runtime/media dependencies.
- Run `hyperframes check` before render — it is brag's single gate.
