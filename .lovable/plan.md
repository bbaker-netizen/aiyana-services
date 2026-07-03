## Footer Logo Icon Replacement

### Goal
Replace the footer logo with the isolated "A" ribbon graphic the user uploaded, removing the current cropping/filter workaround that produces a blank white square.

### Plan
1. **Save the uploaded icon asset** — Store `user-uploads://image-23.png` as a project asset at `src/assets/logo-icon.png` (or via `lovable-assets` CDN pointer).

2. **Update `src/components/Footer.tsx`**:
   - Replace the current `logo` import with the new icon-only asset.
   - Remove `brightness-0 invert` CSS filters and the `overflow-hidden object-cover object-left` cropping workarounds.
   - Display the icon cleanly next to the "Aiyana Services" text heading at an appropriate size (~40px).

3. **Verify** — Confirm the footer renders correctly with the visible icon on the dark background.

### Outcome
A clean footer logo showing only the "A" ribbon graphic beside "Aiyana Services", with no white-square artifact.