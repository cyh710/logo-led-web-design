# Optional case: Tapestry's continuous SVG story

This is **one worked case**, not the general recipe. Read it when a continuous logo-to-feature illustration fits the user's product or when the user requests the Tapestry example.

## Why this particular design

Tapestry is an AI character conversation product. Its Y/Z/thread mark supplies three persistent parts that can become character-setup frames, conversation surfaces and memory/branch connections. Five sections were chosen for that product: introduction, creating characters, conversation, memory/branches, and closing. Its cold blue, Chinese type, alternating desktop layout and sparse copy belong to this case.

Other logos need not have three parts; other products need not have these sections, cards, trees or palette. Do not copy this site's branding or domain illustrations into unrelated projects.

## Runnable files

The skill's assets/reference-site directory contains the example. Serve that directory with a local HTTP server.

- index.html: one SVG scene, product illustrations, shared clip, tethered details and exact source logo.
- scroll-flow.css: ordinary document sections, layout anchors and a shared sticky drawing stage. The stage supports drawing; the chapters are not pinned.
- woven-site.js: timeline, authored poses, poseAt, render, animate, resize, and contour correspondence.
- module-art.css: illustration surfaces, strokes and detail material.
- woven-site.css: case-specific typography, controls and header.
- assets: the Tapestry logo and geometry, plus locally bundled subset fonts and their licenses. New text can require different font coverage.

The example has local chapter-navigation actions, not working product downloads. Production release lookups, legal/contact links and deployment-specific metadata were removed for this bundle.

## Mechanics worth adapting selectively

- Per-section document-space anchors define position and size. The shared stage accounts for actual document scrolling, keeping settled artwork aligned with section copy.
- This case starts a transition at 15% of travel and finishes at 80%. Artwork sampling uses a 40 ms time-based response. These are tuned values for this composition, not skill defaults.
- Each of its three open paths has four cubic segments. Authored intermediate poses and Hermite timing carry the shapes through the journey. Matching traversal and contour winding matter to the logo handoff.
- Illustrated text is kept rigid or uniformly scaled. Role and conversation content share a changing clipped frame. One conversation bubble persists and becomes a memory card.
- Branch connections exist before their cards appear and remain until the cards leave. The exact source logo takes over from aligned temporary contours at the ending.
- Reduced motion selects settled section artwork directly rather than running the travelling morph.

## Findings from the first trial

A direct Cursor trial reproduced this brand's page. Browser inspection found a kink during the flow-to-tree approach and temporary card/headline overlap. The bundled example now pairs curve handles along a shared spline tangent in that span and gives the desktop route a leftward arc, returning to the unchanged endpoints.

The transferable lessons are to distinguish geometric from temporal continuity and to compose the entire travel corridor. The example's .12 * viewportWidth arc and scene-specific curve indices are not general solutions for another logo.

## Provenance and verification limits

Adapted from the author's Tapestry product website for this worked example, with the bundle-only changes described above. The original application was not modified.

The first Cursor build, screenshots and local browser checks validate this example's reuse. Further Cursor revision was stopped by its account usage limit. A different-brand build has not been independently verified; this example alone is not evidence of the skill's generality.
