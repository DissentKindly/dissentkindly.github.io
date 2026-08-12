Put your patch files in this folder (.zip, .ppf, .ips, .bps, .xdelta).

Then point to them from data/mods.js like this:

  download: { url: "files/my-patch-v1.0.zip", size: "1.4 MB" }

GitHub limits any single file to 100 MB. Patches are almost always
far smaller than that, but if you ever exceed it, attach the file to
a GitHub Release instead and use the release link as the url.
