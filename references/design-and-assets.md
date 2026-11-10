# From a logo to a product website

## Read the actual mark

Inspect the supplied asset visually. With SVG, also inspect its paths, groups, masks and viewBox. With raster artwork, distinguish the visible design from the surrounding background before attempting to derive geometry.

Find its visual vocabulary:

- **Structure:** continuous stroke, interlocking letters, solid symbol, repeated modules, organic illustration or a combination.
- **Identity:** proportions, a distinctive turn, gap, overlap, counterform, silhouette or color relationship.
- **Motion affordance:** draw, fold, open, split, join, orbit, weave, extrude, reveal or change material.
- **Natural limits:** a complex illustrated emblem may work better as a masked reveal or a source of selected motifs than as a forced point-for-point morph of every detail.

Choose persistent elements because they are visually meaningful, not to meet a fixed component count. Negative space can be as useful as a visible stroke. A logo can stay recognizable in some states and become a functional illustration in others.

## Map form to product meaning

Start with the real functions, then decide how the logo's forms could explain them. The feature illustration must still communicate when viewed without its headline; the headline should not have to explain an arbitrary decoration.

Illustrative possibilities, **not preset designs**:

- A scheduling tool with an open-ring mark: the opening becomes a time-selection arc, segments become appointments, and a shared point moves through a day's schedule. A mostly circular composition might suit it better than alternating cards.
- A creative editor with a geometric monogram: a counterform becomes the canvas, a bar becomes a selection edge, and its planes unfold into editing layers. The monogram may occupy only the hero and the major transition, not every section.
- A collaboration product with a modular mark: modules become people or work items; the original connection rhythm becomes assignments or a shared workflow. A horizontal diagram can tell this story without a memory tree.

These examples show how **different logos lead to different artwork and page structures**. Do not reuse their subject matter when it does not fit the user's product.

## Compose the motion before polishing it

For the main states, sketch the illustration, copy, action and space needed at the target viewport. For each meaningful transition, author its beginning, one or more attractive travelling poses and its destination.

Decide what survives and why: a selected shape could become a result, a line could become the next workspace boundary, or an assembled form could open to reveal a product view. A fade may support that handoff, but fading unrelated pictures does not implement the requested logo transformation.

Use a single composition or fewer sections when that explains the product better. A logo reveal does not imply a full-screen chapter, and a product website does not inherently need a download ending. Choose pacing, density and typography together with the animation.

References can inform a particular mechanism—stroke reveal, material, transition choreography, spatial hierarchy—without copying their entire layout. When the user supplies a reference, inspect the relevant behavior rather than matching only its colors.

## Illustration craft: from a symbol to a complete scene

View ../assets/illustration-craft.png relative to this file. The SVG beside it is editable. Each row holds the subject and broad composition steady while showing a symbol, a structurally complete illustration and an intentional finish. The second stage is already a useful illustration; the third does not mean every project needs shading or more decoration.

Develop the actual artwork through these decisions:

1. **View and silhouette.** Choose a viewpoint that makes the subject legible at its on-page size. Draw its characteristic proportions and contour. A generic rounded rectangle can be the beginning of a device, but cannot describe every object by itself.
2. **Identity-bearing structure.** Add the components that make this subject specific and relate them correctly: a software view needs meaningful regions, hierarchy and controls; a physical object needs its characteristic construction, supports or openings. Choose details by their explanatory value, not a minimum shape count.
3. **Connection and depth.** Show which parts join, which sit in front, what belongs inside a frame, and where the object meets a surface. Keep line weight, corner treatment and spacing consistent with the brand.
4. **Finish with purpose.** Use a restrained palette, precise edges, line hierarchy, selective highlights or contact shadows when they clarify form. A carefully proportioned flat or monochrome illustration can be as complete as a shaded one. An exterior glow cannot supply missing structure.

Draw these as real shapes or product content before building the full animation controller. Inspect them at their intended display size, not only as tiny icons. Preserve their editable parts for the later motion handoff. An asset sheet or a temporary fixed scene is enough; do not turn this into a separate planning deliverable.

For unfamiliar product forms, inspect a representative first-party product image or supplied reference before drawing from memory. Use it to establish silhouette, proportions and how the important parts connect, then simplify those relationships into the site's visual language. Judge the authored destination beside that reference: a toy-like outline with extra accents is not a more faithful drawing. Do not bend a product's basic construction merely to reuse a convenient logo contour; let the logo-derived element become a suitable part of the complete illustration.

### Separate artwork richness from morph complexity

Identify which parts perform which jobs:

- **Transforming structure:** the logo's actual stroke, mass or counterform develops into the new silhouette, boundary or connection.
- **Attached construction:** details retain their shape or scale while following a meaningful local anchor, surface or joint.
- **Destination content/finish:** text, interface content, surface accents and scene-specific components enter when the structure can contain them.

Use as many or as few parts as the composition needs. This separation lets a detailed scene participate in a simple animation. It is not a reason to replace its main subject with a generic geometric proxy.

For the shared elements, decide what remains visibly continuous and how. For new components, decide how they join the scene. The official mark may be an exact source asset at rest, but its transition needs a deliberate geometry handoff rather than an unrelated image swap.

## Produce reliable assets

Prefer the source vector for exact brand geometry. Group semantically useful parts and author their intermediate shapes in the same coordinate system. Keep the original asset separately so official-logo states can be exact.

Select the asset route for the subject: directly author SVG for geometric illustration; adapt available product UI/screenshots for authentic interface content; use suitable licensed illustration or generated reference/material where more complex artwork is needed. Match its viewpoint, proportions and style to the page. An imported flat image can supply visual content, but meaningful morphing requires the relevant editable layers or a clearly designed mask/frame handoff.

If only a raster logo exists, trace the parts required for the chosen effect with vector/graphics tools or manual path authoring. Compare silhouette, connections and negative spaces against the original. Do not turn individual pixel rows into visible stair-stepped outlines.

Create product illustrations as editable SVG/HTML/CSS or in the project's existing graphics system when the direction is geometric. They should share the logo's curvature, corner treatment, weight, rhythm or material—not just its hex colors. Existing product screenshots can be framed by logo-derived geometry when authentic UI is important.

Use image generation for raster textures, illustration or material exploration when that medium benefits the design. Use animation/3D tools for authored motion assets when the chosen direction needs them. Preserve exact brand states with the source logo; do not rely on a generated approximation of lettering or joins. Follow the available tool's image-editing workflow for edits rather than silently repainting the logo with unrelated tooling.

For generated/pre-rendered assets, request consistent composition, crop, lighting and material across the required states. Inspect the returned output and state what is actually delivered: a still, a loop, a video or editable vector geometry. A generated still does not establish that a corresponding animation exists.

Do not generate assets simply to increase quantity. Every asset should serve a specific illustrated state, transition or piece of useful visual hierarchy. Use approved assets and permissions for the intended site; replace sample-brand assets in unrelated work.

## Write product copy

Lead with the product category and use. Feature sections explain what the visitor can do, not how sophisticated the implementation is. For example, “the arch unfolds into a car roof” describes the animation, not the product; use the section to identify the offering or the visitor's use for it. Keep enough text to make the page understandable without animation; avoid repeated secondary labels, promotional filler and technical self-description.

The intended outcome is a website that belongs to this product even when the header logo is hidden—not a generic landing page with a branded animation pasted onto it.
