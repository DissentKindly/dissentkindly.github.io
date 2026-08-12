# Patch Shelf

A small static site for publishing romhacks and translation patches. No build
step, no framework, no server. Three real files plus your content.

## What's in here

```
index.html        Front page. Edit the site name, headline and footer text.
mod.html          Detail page. Every patch shares this one file.
data/mods.js      >>> The only file you edit regularly. One block per patch.
assets/style.css  Colours and fonts live in the :root block at the top.
assets/app.js     Page logic. You shouldn't need to touch it.
img/<id>/         Screenshots for each patch.
files/            The patches themselves.
.nojekyll         Tells GitHub Pages to serve the files as-is.
```

## Try it before you publish anything

Double-click `index.html`. It opens in your browser and works fully offline.
That's the whole development environment — edit a file, save, hit refresh.

## Adding a patch

1. Open `data/mods.js` in any text editor (Notepad++, VS Code, whatever).
2. Copy an entire `{ ... }` block, paste it in, edit the values.
   Make sure blocks are separated by commas.
3. Make a folder `img/your-id/` and drop your screenshots in.
4. Drop the patch file into `files/`.
5. Refresh the page.

If the page goes blank after an edit, you broke the JavaScript syntax —
almost always a missing comma or an unclosed quote. Press F12, open the
Console tab, and it will tell you which line.

## Publishing on GitHub Pages (free)

1. Create a GitHub account if you don't have one.
2. Create a new **public** repository.
   - Name it `yourusername.github.io` to get `https://yourusername.github.io`
   - Or name it anything (e.g. `patches`) to get
     `https://yourusername.github.io/patches`
3. Upload these files. Easiest route: on the empty repo page click
   **uploading an existing file**, then drag everything in. Drag the *contents*
   of this folder, not the folder itself — `index.html` must sit at the top
   level of the repo.
4. Go to **Settings → Pages**. Under "Build and deployment", set
   Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`. Save.
5. Wait a minute or two, then load your URL. Done.

Every later change: edit the file on GitHub (pencil icon) or drag a new one in,
commit, and the live site updates within a minute. If you'd rather not use the
web interface, GitHub Desktop lets you drag files into a local folder and press
one button.

## Using your own domain instead

You don't have to choose. Point your domain at GitHub Pages and get both the
free hosting and your own address.

1. At your domain registrar, add these DNS records for the apex domain:

   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   And for the `www` version, a CNAME record pointing to
   `yourusername.github.io`.

2. In the repo, **Settings → Pages → Custom domain**, type your domain, save.
3. Once it verifies, tick **Enforce HTTPS**. Certificates are automatic.

DNS changes can take anywhere from minutes to a day to propagate.

*(Those IP addresses are GitHub's current published ones — worth confirming
against GitHub's own docs when you set it up, since they can change.)*

## One thing to be careful about

Host **patches only**, never ROMs, ISOs or game assets. Patches are what the
scene distributes and what keeps a site alive. A repo containing copyrighted
game data will get a DMCA takedown and can cost you the account.

## Changing the look

Everything visual is in the `:root` block at the top of `assets/style.css`:

```css
--paper:  #EDEEE9;   /* page background     */
--ink:    #1A1F1C;   /* text                */
--jade:   #2E6B52;   /* accent, spine labels */
--plum:   #5B2A45;   /* download buttons     */
```

Change those four and the whole site changes with them.
