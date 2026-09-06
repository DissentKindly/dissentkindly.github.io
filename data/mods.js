/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD A NEW PATCH.

   Copy one whole { ... } block, paste it above the closing ];
   and change the values. Keep the commas between blocks.

   Every field is optional except: id, title, platform.
   Delete any line you don't need.
   ============================================================ */

const MODS = [
	{
    // "id" becomes the page address: mod.html?id=air-management-96
    // Use lowercase letters, numbers and dashes only. Must be unique.
    id: "port-royale-2-widescreen",

    title: "Port Royale 2 WideScreen Patch (+ Time Stop)",
    subtitle: "Modern Resolution Patch For Port Royale 2 (PC)",

    // Shown on the spine label. Short is better: PS1, NDS, GBA, SNES, MD...
    platform: "PC",

    // Image shown on the front page card. 4:3 or 16:9 both work.
    cover: "img/port-royale-2-widescreen/cover.png",

    // One or two sentences for the front page card.
    blurb: "Play Port Royale 2 at a modern screen resolution - no more eyepatches needed - and stop time when you need to think instead of just making it very, very slow.",

    // --- The record card at the top of the mod page ---
    version: "1.0",
    released: "2026-09-06",
    status: "Complete",
    target: "Port Royale 2 (Steam or GOG)",
    // Checksum of the ORIGINAL disc the patch expects. Helps people
    // confirm they have the right dump before they complain to you.

    // --- Download button. Put the file in the files/ folder. ---
    download: {
      url: "files/Port Royale 2 WideScreen Patch (+ Time Stop).zip",
      label: "Download Patch",
      size: "64.7 MB"
    },

    // --- Screenshots. Put the images in img/<id>/ ---
    screenshots: [
      { src: "img/port-royale-2-widescreen/01.png", caption: "Main Menu 1600p" },
	  { src: "img/port-royale-2-widescreen/02.png", caption: "Town View 1600p" }
    ],

    // --- Long text. Basic HTML is allowed: <p> <b> <i> <a> <br> ---
    about: `
      <p> Port Royale 2 — Modern Resolution Patch

Widescreen and high-resolution support for Port Royale 2 v1.1.2.3 (Steam and GOG). Adds a pause the game never had, and fixes the cursor.

PR2.exe is never modified, and everything is reversible.

See the README for detailed information.

You can support this work through my Ko-fi page to help me make more stuff!

<a href="https://ko-fi.com/dissentkindly" target="_blank" rel="noopener">https://ko-fi.com/dissentkindly</a>
</p>
---
    `,

    // --- Bullet list. Delete the whole block if you don't want it. ---
    changes: [
"Play Port Royale 2 in Modern and Widescreen resolutions, 16:9 16:10 and Ultrawide",
"Press T to stop time for when you need to do things at your leisure and without stuff constantly happening.",
    ],

    // --- Numbered steps. This is where you explain patching. ---
    install: [
  "Run PortRoyale2ResolutionPatch (.exe on Windows). No installation, no Python needed — everything is inside the one file.

It finds your Port Royale 2 folder. If not, use Browse.
Click the button for your monitor's resolution.
Wait. It downloads UPX and dgVoodoo2 from their official releases the first time, then patches the game.

To remove it, run the same program and click Uninstall. Your files come back byte-for-byte identical.

An internet connection is needed on first run only. Downloaded archives are kept next to the program, so later runs are offline.

Launch the game with PR2WS_Launch.exe

It sits in the game folder after installing. Starting PR2.exe directly still works, but you lose the pause and the cursor fix — those come from a small DLL the launcher injects. The game itself is untouched either way."
    ],

    // --- Anything else: credits, known issues, thanks. ---
    notes: `
      <p>Known issues: The top bar's wood stops partway across, as it does in vanilla, leaving the right of the bar bare. The buttons and readouts are all correctly placed; only the background is short. Scrolling all the way down shows light stale pixels between the three bottom panels, cosmetic and definitely not jarring or anything. Fixes for both were attempted at length.</p>
    `
  },
  {
    // "id" becomes the page address: mod.html?id=air-management-96
    // Use lowercase letters, numbers and dashes only. Must be unique.
    id: "air-management-96",

    title: "Aerobiz '96",
    subtitle: "English translation patch for Air Management '96",

    // Shown on the spine label. Short is better: PS1, NDS, GBA, SNES, MD...
    platform: "PS1",

    // Image shown on the front page card. 4:3 or 16:9 both work.
    cover: "img/air-management-96/cover.png",

    // One or two sentences for the front page card.
    blurb: "Full English translation of Koei's airline management sim, including the undocumented GDT text container and all in-flight menus.",

    // --- The record card at the top of the mod page ---
    version: "1.0",
    released: "2026-08-06",
    status: "Complete",
    target: "SLPS-00269 (Japan)",
    patchFormat: "PPF 3.0 & xdelta",
    // Checksum of the ORIGINAL disc the patch expects. Helps people
    // confirm they have the right dump before they complain to you.
    sourceHash: "md5 7b9b6e38f942bf6fff06a2f6d56f5318f5fc5aea",

    // --- Download button. Put the file in the files/ folder. ---
    download: {
      url: "files/AEROBIZ_96_V1.zip",
      label: "Download Patch",
      size: "3.13 MB"
    },

    // --- Screenshots. Put the images in img/<id>/ ---
    screenshots: [
      { src: "img/air-management-96/01.png", caption: "Player count screen" },
      { src: "img/air-management-96/02.png", caption: "Slot negotiation screen" },
      { src: "img/air-management-96/03.png", caption: "Airplane purchase screen" }
    ],

    // --- Long text. Basic HTML is allowed: <p> <b> <i> <a> <br> ---
    about: `
      <p>Aerobiz '96 - English Graphics Patch

Lady Jessica's v0.8 fan translation made Air Management '96 playable in English, but she couldn't find the format the game's menu artwork was stored in - so a good number of buttons stayed in Japanese, and her readme included a written guide explaining what each one meant. This patch finishes the job. Every screen on that list is now in English, and you can throw your cheat sheets away.

Also, significant effort was applied to try and match the game to the western localization of the series.

This patch needs Lady Jessica's v0.8 and doesn't include it. Apply hers first, then this one - her translation is the foundation all of this is built on. Full instructions and file checksums are in the readme / howto.

You can support this work through my Ko-fi page to help me make more stuff!

<a href="https://ko-fi.com/dissentkindly" target="_blank" rel="noopener">https://ko-fi.com/dissentkindly</a>

---

Report bugs at <a href="https://romhack.ing/forum/topic/IycZ1p8Bin1Qvg_K4b2R" target="_blank" rel="noopener">https://romhack.ing/forum/topic/IycZ1p8Bin1Qvg_K4b2R</a>  .</p>
    `,

    // --- Bullet list. Delete the whole block if you don't want it. ---
    changes: [
"Title screen now reads AEROBIZ, the name the series shipped under in the West, in the original's chrome style. The intro movie matches too.",
"Circle and Cross swapped to the Western standard, so Cross confirms and Circle cancels.",
"Clearer city info - the cryptic Blnc / Rsrt / Bsns are now Mixed, Resort and Biz.",
"Fixed the slot negotiation fee text.",
"Fixed 46 messages that ran past the bottom of the text box and left stray text stuck on screen underneath the next one.",
"Translated every remaining Japanese button - skill level, player count, company editing, change route, slot negotiation, fleet, stocks, promotion, budget and meeting"
    ],

    // --- Numbered steps. This is where you explain patching. ---
    install: [
  "Get your own copy of the Japanese disc, SLPS-00269, as a BIN/CUE image. A redump-verified dump is strongly recommended - the hashes below only line up if you start from the same bytes as everyone else.",

  "Apply Lady Jessica's v0.8 translation first. This patch builds on it and cannot be applied to an unpatched disc. Her patch is not redistributed here.",

  "Apply AM96_v0_8.ppf to the data track with PPF-O-Matic 3.0 or applyppf. If your dump is split one file per track, the data track is the first .bin - the one that's 500+ MB rather than a few dozen. Leave the 39 audio tracks alone.",

  "Check the file now matches the source hash: sha1 7b9b6e38f942bf6fff06a2f6d56f5318f5fc5aea. Use certutil -hashfile \"Track 01.bin\" SHA1 on Windows, sha1sum on Linux, or shasum -a 1 on macOS.",

  'Apply this patch. In Delta Patcher, set the original file to the .bin you just patched, choose AEROBIZ_96_<version>.xdelta, and click Apply. From a terminal: xdelta3 -d -s "Track 01.bin" AEROBIZ_96.xdelta "Track 01 (English).bin". A .ppf of the same patch is included if you prefer.',

  "Check the result hash: sha1 d101809f1cc345393361e90fd3c40c7f5e051de0.",

  "Load the original .cue. Nothing else needs changing if you patched in place; if you wrote to a new filename, either rename it back or edit the FILE line in the .cue to point at it."
    ],

    // --- Anything else: credits, known issues, thanks. ---
    notes: `
      <p>Known issue: a handful of long airline names still overflow their box
      on the rankings screen. Cosmetic only. Also, some buttons have text that's rather big because of constraints.</p>
      <p>No copyrighted game data is distributed here - this is a patch that
      you apply to a copy you already own.</p>
    `
  },

  {
    id: "harvest-moon-ds-gba-link",
    title: "Harvest Moon DS - GBA Link Enabler",
    subtitle: "Save editor and connectivity patch",
    platform: "NDS",
    cover: "img/harvest-moon-ds-gba-link/cover.png",
    blurb: "Unlocks the GBA connectivity content in Harvest Moon DS and DS Cute by setting the relevant save flags and repairing the two-tier CRC.",

    version: "1.0",
    released: "2026-06-14",
    status: "Complete",
    target: "Harvest Moon DS / DS Cute (US)",
    patchFormat: "Save editor",

    download: {
      url: "files/HMDS-GBA-Enabler-main.zip",
      label: "Download tool",
      size: "22.1 KB"
    },

    screenshots: [
      { src: "img/harvest-moon-ds-gba-link/01.png", caption: "The GUI" }
    ],

    about: `
      <p>Rather than patching the ROM, this tool edits your save file directly:
      it flips the connectivity flags and then recalculates both layers of the
      save's CRC-16 checksum so the game still accepts the file.</p>
      <p>Ships as a small windowed tool and a command-line version. Requires Python.</p>
	  <p>More details @ <a href="https://github.com/DissentKindly/HMDS-GBA-Enabler" target="_blank" rel="noopener">https://github.com/DissentKindly/HMDS-GBA-Enabler</a></p>
    `,

    changes: [
      "Unlocks GBA-linked content without a second console",
      "Works with both Harvest Moon DS and DS Cute",
      "Repairs the save checksum automatically",
      "Makes a backup copy before writing anything"
    ],

    install: [
      "Close your emulator so it isn't holding the save file open.",
      "Run the tool and open your .sav file.",
      "Tick the content you want unlocked, then save.",
      "Reload the game. Verified working in melonDS."
    ],

    notes: `
      <p>Always keep the backup the tool creates until you've confirmed your
      save still loads.</p>
    `
  }

];
