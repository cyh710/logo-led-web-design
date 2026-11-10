# Implement the chosen logo-led design

Read this after establishing the logo's visual grammar and the page's intended motion. Select the simplest implementation that expresses that design in the existing project.

## Match the medium to the artwork

- **SVG + CSS/JavaScript:** precise marks, strokes, filled contours, masks and diagram-like product illustrations. Retains editable geometry and sharp edges across sizes.
- **Existing animation library:** coordinated timelines, scene sequencing or spring-like interaction. Reuse a project's GSAP, Motion or equivalent when present; the library drives authored artwork rather than deciding its design.
- **Canvas/WebGL/3D:** dense particle reconstruction, spatial marks, lighting or material deformation central to the chosen direction. Justify this visually, not merely because the site includes animation.
- **Rendered video/image sequences:** art direction requiring pre-rendered materials or generated motion. Appropriate for playback; arbitrary reversible scrubbing and exact logo geometry need deliberate preparation. Do not describe a crossfaded image sequence as editable geometric morphing.

Do not force every mark into a three-path SVG system. Conversely, a vector wordmark that only needs masks does not require a 3D scene.

## Define a shared scene model

Start from the destination artwork, including its important construction and content, rather than designing one interpolation primitive and reducing every subject to fit it. Reuse those authored shapes as settled states; give their parts stable local coordinate systems for the motion.

Represent the visual story in terms of authored states, meaningful persistent elements and the transitions between them. A state can define geometry, position, scale, material and visible product content. Use one coherent progress model for elements participating in a transition; let their entrances/exits occupy appropriate subranges.

Choose the driver from the brief:

- Scroll-linked: derive progress from measured section positions.
- Entrance/playback: use a time-based timeline with a composed ending or intentional loop.
- Pointer/touch interaction: use bounded movement that complements the main story and leaves actions usable.
- Section navigation: synchronize the selected section and illustration without maintaining conflicting independent animations.

Do not interpolate all properties blindly over the entire interval. A panel may need to lose its contents before opening, while a shared object continues into the next composition.

## Morph geometry deliberately

Choose a geometry representation that can express the intended artwork. A radius-per-angle contour works well for suitable star-shaped silhouettes, such as some rounded masses; it does not represent a whole multi-part product or its holes, separate components and occlusion relationships. Keep compound shapes, separate paths and authored curves where the artwork needs them. Sampling should approximate an already designed shape, not stand in for designing it.

For path interpolation, match contour topology, traversal direction, start points and semantic roles of corresponding points. Split contours or design a masked handoff when their structures differ. A numerical interpolator cannot decide where a logo's distinctive fork should go in a feature illustration.

Use authored travelling poses where direct interpolation produces a collapsed slab, twisted loop or meaningless shape. Distinguish:

- **Temporal continuity:** movement should not unintentionally stop at every intermediate pose. Shared timeline tangents or a continuous library timeline can preserve velocity.
- **Geometric continuity:** adjoining curve segments need intentional tangent relationships. Independent handle rotations can create kinks even when motion timing is smooth.

When handle vectors rotate through opposing directions, angle/length interpolation can avoid a collapsed handle. Where a continuous flowing spline is intended, pair the handles along a shared tangent instead. Select according to the geometry; neither technique is a universal replacement for the other.

For filled contours, use corresponding winding and arc-length sampling rather than jagged pixel traces. Preserve negative spaces. Increasing contour samples improves outline precision; increasing rendered frames improves temporal sampling. They solve different problems.

Also distinguish both from **illustration fidelity**: meaningful contour, proportions and component relationships. When a recognizable feature is absent from the authored state, a higher sample count or refresh rate will not create it.

At a resting state that presents the official logo, render its exact original vector or high-resolution source. Align the transforming contours before a short handoff if needed; avoid leaving two translucent copies, visible seams or invented joins.

## Integrate content and layout

Logo-derived elements should create the illustration's structure, not merely float behind it. Use a shared boundary, clipped surface, meaningful attachment point or surviving object where it makes the transformation legible.

Implement different motion jobs separately within the shared scene progress. Morph the persistent structural paths; transform attached details in local coordinates; reveal or draw destination-specific content after its supporting geometry is established. For example, a changing frame need not distort the interface inside it. The parts should share spatial relationships and choreography rather than independently crossfade as complete unrelated images.

Keep illustrated text and recognizable UI content rigid or uniformly scaled while their enclosing forms change. Keep connectors attached for the complete visible lifetime of their objects. Remove panel content before deforming its container beyond readability.

Reserve a **travel corridor** using the full painted bounds, including floating details and shadows. Evaluate this against both incoming and outgoing text. If it collides, adjust the authored route, content timing or section composition; covering the collision with foreground text does not improve the animation.

On mobile, recompose when necessary: a new route, smaller detail set or alternate framing may work better than uniformly shrinking the desktop scene. Preserve the main metaphor and visual identity.

## Scroll-linked coordinate recipe, when applicable

For one illustration travelling between document sections, a shared drawing stage and per-section layout anchors can keep the illustration and copy synchronized. This is an option, not a required page architecture.

Measure anchors relative to a consistent stage/document origin. Interpolate their document positions, then account for actual document scrolling when positioning in a sticky or viewport-relative stage. At settled states, art intended to belong to a section must move with that section's text. Account for stage exit near the footer.

Keep the reading state and artwork state aligned: when a section heading becomes the primary visible copy, its illustration should already be settled or completing that section's intended entrance. If copy visibility and stage progress use separate mechanisms, tune them against the same measured section anchors. On mobile, verify this at each heading in the real scroll flow; the sticky stage must not show one product while the next section's copy is being read.

For unequal section heights, derive progress from their measured positions rather than dividing by a fixed viewport height. Recompute measurements when responsive layout or resource loading changes those positions.

Concentrate transformations between reading states, reaching a complete composition before its content needs attention. Determine the windows from this page's copy and spacing. A demonstration's numeric thresholds are tuning examples, not product requirements.

Use browser-native scrolling and a passive listener for this approach. Draw via requestAnimationFrame; if smoothing is needed, make it time-based and stop drawing once settled. Do not delay document movement or layer multiple smoothers on top of one another. Direct scrolling without a separate smoother is also valid.

For a typical time-based response, alpha = 1 - exp(-elapsedMs / responseMs) makes the response independent of event frequency. Choose responseMs by the desired feel; no single value guarantees smoothness or a particular FPS.

## Reading, controls and delivery

Allow the product's copy and actions to remain real semantic HTML even when the illustrative interface is SVG or canvas. Keep decorative surfaces from intercepting input. Support keyboard focus and touch interaction; reduced motion should retain the product explanation and actions without requiring the travelling morph.

Use real destination links when supplied. Do not invent working downloads or unsupported product features to complete the design. Match implementation checks to the stack and changed behavior, then inspect the rendered page for motion/layout quality.

For a concrete SVG implementation, the optional [Tapestry case](tapestry-case-study.md) maps these ideas to runnable files. Consult it for relevant mechanics, not as a mandatory design to clone.
