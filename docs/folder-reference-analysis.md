# Folder animation reference analysis

Reference media is retained in `docs/reference/`:
- `folder-hover-reference.mov` — 1024×160, approximately 10.12 seconds, ~30.04 fps.
- `folder-hover-reference-still.jpg` — static visual reference.

## Frame-by-frame sequence observed

- **0.0–2.4 s — idle:** four compact folders sit on a nearly black canvas. The toolbox at the left is a dark folder; seven colorful technology tiles are staggered behind its front panel. Three off-white project folders occupy the remaining width. Each folder has a raised, asymmetrical top shoulder, soft edge shading and a front face with Arabic copy.
- **~2.6 s — rightmost project hover:** separate paper sheets emerge upward from behind the folder. The sheets are staggered in height and depth, with fine text/lines visible on the paper; the front folder remains the visual anchor.
- **~3.3–4.1 s — middle project hover:** the middle stack lifts in the same layered manner. The stack reads as multiple physical sheets rather than a single card stretching vertically.
- **~4.7–5.8 s — left project hover:** the left project reveals its own layered preview sheets. The other folders remain at rest; the interaction is local to the hovered folder.
- **~7.5–9.8 s — toolbox icon hover:** a single technology tile at a time rises forward and scales substantially while other tiles remain staggered behind it. The selected tile changes as the pointer moves from one technology to another. The motion is smooth and eased, without a large bounce.

## Implementation decisions

- The project cards use a folder silhouette with a custom clipped shoulder, off-white surfaces, subtle borders, soft shadows and separate sheet layers.
- Sheet layers use staggered transitions and slightly different lift distances to suggest a physical stack. Hover and keyboard focus trigger the same state.
- The toolbox uses a dark front panel with overlapping brand-color technology tiles. Each tile can be hovered, focused, or clicked directly; technology labels remain interactive as a second access path.
- Project data, links, labels, and existing images remain connected to the project's `projects` data rather than being replaced with placeholder cards.
- Reduced-motion preferences remain respected.

## Accuracy note

The clip shows the visual result, not the original DOM, CSS keyframes, or easing curves. Timing and transforms in the implementation are therefore a careful visual recreation, not a claim to have recovered the original source values exactly.
