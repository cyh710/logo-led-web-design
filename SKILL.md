---
name: logo-led-web-design
description: Design and build product websites whose animation and visual language grow out of the product logo. Use when a user wants a logo decomposed, transformed or animated into feature illustrations, page decoration and transitions, with cohesive layout and restrained copy. Applies across brands, logo styles, page structures and frontend stacks, not just animating a header icon.
---

# Logo-Led Web Design

Turn a product's own logo into the visual material of its website. Design the illustrations, motion and layout together so the result explains the product and feels specific to its brand.

This is a design-and-implementation method, **not a site template**. Derive the outcome from the actual logo and product. Do not inherit a sample site's brand, palette, chapter count, illustration subjects, typography or scrolling model.

A simple website can have few sections and little copy while its illustrations remain complete and carefully drawn. Keep the scope small through content selection, not by removing the structures that make the artwork recognizable.

## Understand the product and inspect the logo

Use the supplied product information, existing website, logo and references. Establish what the product is, its main functions and the primary action. Reuse known information; ask only when an essential asset or genuinely consequential choice is missing.

View the actual logo before designing. Inspect its silhouette, strokes or filled masses, negative spaces, rhythm, proportions, colors and distinctive connections. Identify which elements can become useful visual material and which features make the original mark recognizable. Not every logo should be reduced to lines or split into three parts.

When usable vector paths are supplied, work from those paths. A brief visual inspection and inspection of their groups/contours is normally sufficient; re-measuring their geometry through pixel analysis is unnecessary.

Read [design-and-assets.md](references/design-and-assets.md) for logo analysis, product-to-form mapping and asset production.

## Develop a brand-specific visual story

Translate logo elements into compositions **related to the product's functions**. A curve might become a workflow, an opening might frame an image, or a filled shape might unfold into a workspace. These are possibilities, not required motifs. Rotating a complete logo above unrelated cards does not accomplish this task.

For each important page section, define:

- What the visitor should understand, expressed as a short product/function statement.
- The complete illustration that communicates it and how logo-derived forms participate.
- The meaningful object or visual relationship that persists into the next state.
- How the art shares space with the text and action at desktop and mobile sizes.

Plan which logo-derived elements survive into each destination, then develop the destination artwork before tuning its interpolation. Use deformation, unfolding, drawing, masking, part rearrangement or material changes as appropriate to the mark. Keep the original logo intact wherever it is presented as the official brand. Reassembly into the original mark can provide a closing beat when it suits the story; a download section or logo ending is not mandatory.

## Choose the page and motion model together

Choose the arrangement that suits the content and requested experience: a strong animated hero with quieter sections, continuous scroll-linked storytelling, a compact sequence, or another justified composition. Respect the user's selected references and interaction model. Do not force alternating full-screen chapters onto every product.

For scroll-linked work, prefer native document scrolling unless the brief calls for another behavior. Give readers clear, composed resting states and place transformations where they support the reading sequence. Derive timing from the actual layout rather than imposing sample thresholds.

Use brief copy that says **what the product is and what users can do**. Let the illustration and layout carry the explanation. Match type, spacing, controls and ornaments to the brand rather than surrounding the animation with a generic marketing template.

## Draw complete destinations, then choreograph their transformation

Read the illustration-craft section of [design-and-assets.md](references/design-and-assets.md) and view [the visual comparison](assets/illustration-craft.png); its editable source is [illustration-craft.svg](assets/illustration-craft.svg). The examples explain structure and finish, not a prescribed style or page template.

Render each important destination as an actual illustration in the working page or an editable asset. Establish its proportions, distinctive contour, meaningful components, connections and overlaps. Add line/color/material hierarchy where useful. Temporarily hold the scene still to judge the composition: it should explain its subject without relying on the headline to identify an otherwise ambiguous blob. This is a working step, not a request for a separate proposal or user approval at every stage.

Separate motion responsibilities: logo-derived structure can morph continuously; attached components follow that structure; destination-specific content and finish can unfold or appear once their space exists. These are roles, not a fixed number of groups. Preserve rich artwork without forcing every detail through the same interpolation function.

Let each carried logo element earn its role in each destination. Do not force a layer into an unrelated product object merely to keep it present across every section; it can finish one transformation and leave as new scene content enters.

Make the source-to-destination correspondence visible in the geometry or spatial handoff. Fading out the entire logo and displaying an unrelated symbol does not demonstrate the requested transformation. Once destinations and correspondences are established, author the travelling poses and synchronize them with the page.

## Implement the artwork in the chosen medium

Use the existing project stack. Read [implementation.md](references/implementation.md) for choosing SVG/CSS, a timeline library, canvas/3D or rendered media, and for geometry, synchronization and responsive composition.

Prefer original vector geometry for precise logo-derived shapes. Author intermediate artwork deliberately; use image or motion-generation tools when the chosen art direction actually needs their output. Generated imagery should support the same brand grammar, not substitute an unrelated decorative asset for the requested transformation.

Make a working page, not just a motion proposal. Coordinate geometry, travel, material and illustration content through a coherent animation model. Preserve readable type, useful controls and the exact source mark at official-logo resting states. Honor reduced-motion preferences with an understandable composition.

## Review and refine the rendered website

Use [visual-review.md](references/visual-review.md) to inspect settled illustrations first, then their transitions and desktop/mobile placement. Distinguish missing visual structure from contour sampling and frame timing; increasing numerical precision does not add missing product details. Judge whether another brand could obtain the same page by changing only the logo and colors: if so, revisit the logo-to-function mapping.

Inspect at least one middle state per important transition. If it reads as an accidental hybrid, correct the element correspondence or author a clearer travelling pose; staggering every layer or increasing contour precision will not repair a semantically wrong morph. Refine the observed problem: redraw an unattractive middle pose, adjust a conflicting travel route, or change an ill-timed reveal. After a focused change, review the affected motion and nearby states rather than rerunning unrelated suites.

Deliver the working preview, editable assets/source and a brief account of what was actually verified. If independent agent validation is requested, have it use a genuinely different product/logo brief; reproducing the source brand alone does not demonstrate generality. Report unavailable validation directly.

## Optional worked case

Read [tapestry-case-study.md](references/tapestry-case-study.md) **only when a similar continuous SVG story is useful or the user requests that case**. The folder assets/reference-site contains the runnable Tapestry example and its logo/font assets. It is an optional worked implementation, not the default starting layout or a source of branding for other products.
