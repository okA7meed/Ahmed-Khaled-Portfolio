# Image Path Standardization — Task Progress

## Steps
- [x] 0. Audit all image files and references across the project
- [x] 1. Create plan and get user approval
- [x] 2. Create `public/images/projects/` and `public/images/logos/` directories
- [x] 3. Move project images with clean names:
  - `public/BRGHR Restaurant Website.png` → `public/images/projects/project-brghr.png`
  - `public/AOU Planner.png` → `public/images/projects/project-aou-planner.png`
  - `public/Scented Realms.png` → `public/images/projects/project-scented-realms.png`
- [x] 4. Move unused logo:
  - `public/my logo AK.PNG` → `public/images/logos/logo-ak.png`
- [x] 5. Update `src/data/site.ts` references:
  - Project images → `/images/projects/...`
  - Certificate-9 → `/certificates/certificate-9.jpg`
- [x] 6. Run `npx tsc --noEmit` (pre-existing error in `src/config/index.ts`, unrelated to images — verified via git diff that config files are untouched)
- [x] 7. Run `npm run build` (succeeds ✓)
- [x] 8. Final project-wide image reference audit + report
