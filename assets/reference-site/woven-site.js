(async () => {
  const brandContours = await fetch('assets/logo-contours.json').then(response => response.json());
  const section = document.querySelector('.story');
  const header = document.querySelector('header');
  const chapters = [...section.querySelectorAll('.chapter')];
  const visual = document.querySelector('.visual');
  const details = [...document.querySelectorAll('[data-art]')];
  const opening = document.querySelector('.opening-art');
  const paths = ['y', 'z', 'thread'].map(name => document.getElementById(`form-${name}`));
  const surface = document.getElementById('morph-surface');
  const panelClip = document.getElementById('panel-clip-path');
  const highlights = [...document.querySelectorAll('.ribbon-highlights path')];
  const brandPaths = [...document.querySelectorAll('#brand-outline-morph path')];
  const brandLayer = document.getElementById('brand-outline-morph');
  const completeLogo = document.getElementById('brand-complete');
  const brandOrnaments = document.getElementById('brand-ornaments');
  const keepsake = document.getElementById('message-memory-bridge');
  const keepsakeCard = keepsake.querySelector('rect');
  const keepsakeText = keepsake.querySelector('text');
  const branchCard = document.getElementById('memory-branch-card');
  const ribbonStops = [...document.querySelectorAll('#art-ribbon stop')].map(element => {
    const hex = element.getAttribute('stop-color').slice(1);
    return {element, color: [0, 2, 4].map(offset => parseInt(hex.slice(offset, offset + 2), 16))};
  });
  const inks = details.map(detail => detail.querySelector('.panel-ink'));
  const attachments = details.map(detail => [...detail.querySelectorAll('[data-tether]')].map(element => {
    const [path, point] = element.dataset.tether.split(':');
    return { element, path: +path, coordinate: point === 'start' ? 0 : point === 'end' ? 24 : +point };
  }));
  const clamp = n => Math.max(0, Math.min(1, n));
  const smooth = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const mix = (a, b, t) => a + (b - a) * t;
  // Pages scroll freely; artwork changes between chapters and settles before arrival.
  const chapterShapes = [3, 0, 1, 2, 3];
  const progress = (value, start, end) => smooth((value - start) / (end - start));
  function timeline(distance) {
    const scene = Math.min(Math.floor(distance), chapterShapes.length - 1);
    return {scene, transition: scene === chapterShapes.length - 1 ? 0 : clamp((distance - scene - .15) / .65)};
  }

  // Corresponding cubic curves: role card → conversation → branching memories → brand.
  const shapes = [
    [
      [125,420, 125,330,125,230,125,174, 125,145,140,135,170,135, 250,135,375,135,470,135, 500,135,511,150,511,178],
      [511,178, 511,250,511,332,511,399, 511,429,498,445,469,445, 390,445,270,445,170,445, 140,445,125,437,125,420],
      [167,514, 205,544,246,540,286,526, 335,510,375,486,414,476, 465,465,526,474,546,435, 565,401,559,350,511,322]
    ],
    [
      [125,455, 125,382,125,261,125,175, 125,142,142,126,175,126, 254,126,382,126,465,126, 497,126,515,143,515,176],
      [515,176, 515,241,515,350,515,433, 515,466,497,483,465,483, 372,483,248,483,175,483, 142,483,125,472,125,455],
      [220,477, 240,502,258,513,292,518, 340,526,392,522,440,513, 493,503,541,491,557,450, 573,409,552,354,515,327]
    ],
    [
      [326,324, 326,310,326,296,326,282, 326,266,326,248,326,232, 326,218,326,204,326,192, 326,178.745,336.745,168,350,168],
      [350,324, 342,324,334,324,326,324, 318,324,310,324,302,324, 298,324,294,324,290,324, 286,324,282,324,278,324],
      [326,324, 326,348,326,372,326,396, 326,408,326,420,326,432, 326,440,326,448,326,456, 326,469.255,336.745,480,350,480]
    ],
    [
      [132,161, 174,173,231,217,260,263, 275,286,267,318,263,346, 258,380,251,414,260,446, 266,471,285,487,310,490],
      [335,242, 380,237,449,231,487,235, 505,237,492,260,470,283, 415,338,354,392,322,437, 285,489,390,490,501,453],
      [176,283, 141,298,114,325,124,345, 135,370,190,365,230,353, 280,338,328,314,369,299, 386,293,399,289,407,289]
    ]
  ];
  // Authored travelling poses: three separated strokes, not a collapsed window.
  const flowing = [
    [110,300, 145,285,170,238,210,224, 248,208,274,206,310,212, 360,221,395,252,435,253, 470,254,500,244,530,240],
    [530,320, 508,320,476,333,438,335, 400,337,362,327,320,314, 284,303,256,288,218,294, 178,300,145,335,110,350],
    [110,400, 148,391,180,365,220,363, 258,361,293,381,328,391, 370,403,408,410,447,407, 480,405,510,396,530,395]
  ];
  // Leave room for the aligned cards while their connector strokes unfold.
  const memoryFlow = flowing.map(line => line.map((value,i) => i%2 === 0 ? 100+(value-110)*300/420 : value));
  const branching = [
    [326,324, 326,310,326,296,326,282, 326,270,326,258,326,246, 326,236,326,226,326,216, 326,202.745,336.745,192,350,192],
    [350,324, 342,324,334,324,326,324, 318,324,310,324,302,324, 298,324,294,324,290,324, 286,324,282,324,278,324],
    [326,324, 326,348,326,372,326,396, 326,402,326,408,326,414, 326,420,326,426,326,432, 326,445.255,336.745,456,350,456]
  ];
  const unfurled = [
    [125,220, 169,229,192,266,195,300, 199,335,181,364,195,395, 208,425,231,441,257,450, 274,456,291,458,310,457],
    [485,405, 449,425,404,437,374,424, 345,411,365,380,395,350, 431,314,487,271,477,244, 470,223,420,219,365,229],
    [115,340, 90,360,97,390,130,401, 166,413,212,411,256,400, 310,387,369,361,412,347, 442,337,466,333,490,335]
  ];
  // Reverse only the traversal, not the visible Z; this lets its ribbon unfold
  // along the outside instead of dragging both ends through the centre.
  const travellingMark = shapes[3].map((line, i) => i === 1
    ? Array.from({length: 13}, (_, j) => line.slice(24 - j * 2, 26 - j * 2)).flat() : line);
  // Shape progression is separate from the continuous page/anchor progression.
  const poses = [
    [[0,travellingMark],[.28,travellingMark],[.45,unfurled],[.63,flowing],[1,shapes[0]]],
    [[0,shapes[0]],[1,shapes[1]]],
    [[0,shapes[1]],[.22,shapes[1]],[.36,memoryFlow],[.54,branching],[1,shapes[2]]],
    [[0,shapes[2]],[.24,branching],[.43,flowing],[.61,unfurled],[.8,travellingMark],[1,travellingMark]]
  ];
  function poseAt(scene, transition) {
    if (scene === 4) return travellingMark;
    const keys = poses[scene];
    const end = keys.findIndex(([at]) => at > transition);
    if (end === -1) return keys.at(-1)[1];
    const [start, from] = keys[end - 1];
    const [finish, to] = keys[end];
    const t = (transition - start) / (finish - start);
    // Pass through travelling poses without braking at each one. Identical
    // neighbouring poses keep the authored panel/brand phases stationary.
    const tangent = (key, line, coordinate) => {
      if (key === 0 || key === keys.length - 1) return 0;
      const previous = keys[key - 1];
      const current = keys[key];
      const next = keys[key + 1];
      const before = previous[1][line][coordinate];
      const value = current[1][line][coordinate];
      const after = next[1][line][coordinate];
      return before === value || after === value ? 0 : .65 * (after - before) / (next[0] - previous[0]);
    };
    return from.map((line, i) => {
      const points = line.map((value, j) =>
        (2*t**3 - 3*t*t + 1) * value + (-2*t**3 + 3*t*t) * to[i][j]
        + (t**3 - 2*t*t + t) * tangent(end - 1, i, j) * (finish - start)
        + (t**3 - t*t) * tangent(end, i, j) * (finish - start));
      // The flow-to-tree approach is one smooth spline: turn each handle pair
      // together rather than introducing a separate bend at every cubic knot.
      if (scene === 2 && start === .36) {
        const turning = progress(t, 0, .2) * (1 - progress(t, .8, 1));
        for (const knot of [6, 12, 18]) for (const axis of [0, 1]) {
          const tangent = (points[knot + 6 + axis] - points[knot - 6 + axis]) / 6;
          points[knot - 2 + axis] = mix(points[knot - 2 + axis], points[knot + axis] - tangent, turning);
          points[knot + 2 + axis] = mix(points[knot + 2 + axis], points[knot + axis] + tangent, turning);
        }
        return points;
      }
      // Rotate handles instead of cancelling opposite vectors into a cusp.
      for (const knot of [6,12,18]) for (const offset of [-2,2]) {
        const a = Math.atan2(line[knot+offset+1]-line[knot+1],line[knot+offset]-line[knot]);
        const b = Math.atan2(to[i][knot+offset+1]-to[i][knot+1],to[i][knot+offset]-to[i][knot]);
        const rotation = Math.atan2(Math.sin(b-a),Math.cos(b-a));
        const angle = a + rotation * smooth(t);
        const length = mix(Math.hypot(line[knot+offset]-line[knot],line[knot+offset+1]-line[knot+1]),
          Math.hypot(to[i][knot+offset]-to[i][knot],to[i][knot+offset+1]-to[i][knot+1]),smooth(t));
        points[knot+offset] = points[knot] + Math.cos(angle)*length;
        points[knot+offset+1] = points[knot+1] + Math.sin(angle)*length;
      }
      return points;
    });
  }
  function pathData(coordinates) {
    const n = coordinates.map(value => value.toFixed(3));
    return `M${n[0]} ${n[1]} C${n.slice(2, 8).join(' ')} C${n.slice(8, 14).join(' ')} C${n.slice(14, 20).join(' ')} C${n.slice(20, 26).join(' ')}`;
  }
  function resampleLoop(points, count) {
    const closed = [...points, points[0]];
    const lengths = [0];
    for (let i = 1; i < closed.length; i++) {
      lengths.push(lengths[i - 1] + Math.hypot(closed[i][0] - closed[i - 1][0], closed[i][1] - closed[i - 1][1]));
    }
    let segment = 0;
    return Array.from({length: count}, (_, i) => {
      const distance = lengths.at(-1) * i / count;
      while (lengths[segment + 1] < distance) segment++;
      const t = (distance - lengths[segment]) / (lengths[segment + 1] - lengths[segment]);
      return closed[segment].map((value, axis) => mix(value, closed[segment + 1][axis], t));
    });
  }
  function curvePoint(points, t) {
    const segment = Math.min(3, Math.floor(t * 4));
    const u = t * 4 - segment;
    const offset = segment * 6;
    return [0, 1].map(axis => (1-u)**3 * points[offset+axis]
      + 3*(1-u)**2*u * points[offset+2+axis] + 3*(1-u)*u*u * points[offset+4+axis] + u**3 * points[offset+6+axis]);
  }
  function ribbonOutline(points, start, end, count, width = 4) {
    const centers = Array.from({length: 65}, (_, i) => curvePoint(points, mix(start, end, i / 64)));
    const normals = centers.map((point, i) => {
      const a = centers[Math.max(0, i - 1)];
      const b = centers[Math.min(64, i + 1)];
      return Math.atan2(b[1] - a[1], b[0] - a[0]) + Math.PI / 2;
    });
    const edge = (point, angle) => [point[0] + Math.cos(angle) * width / 2, point[1] + Math.sin(angle) * width / 2];
    const left = centers.map((point, i) => edge(point, normals[i]));
    const right = centers.map((point, i) => edge(point, normals[i] + Math.PI)).reverse();
    const endCap = Array.from({length: 7}, (_, i) => edge(centers.at(-1), normals.at(-1) - (i + 1) * Math.PI / 8));
    const startCap = Array.from({length: 7}, (_, i) => edge(centers[0], normals[0] + Math.PI - (i + 1) * Math.PI / 8));
    return resampleLoop([...left, ...endCap, ...right, ...startCap], count);
  }
  function alignContour(source, contour, scale = 1.25) {
    const area = loop => loop.reduce((sum, p, i) => {
      const next = loop[(i + 1) % loop.length];
      return sum + p[0] * next[1] - next[0] * p[1];
    }, 0);
    let target = resampleLoop(contour.map(p => p.map(value => value * scale)), source.length);
    const reversed = area(source) * area(target) < 0;
    if (reversed) target.reverse();
    let bestOffset = 0;
    let bestScore = Infinity;
    for (let offset = 0; offset < target.length; offset++) {
      const score = source.reduce((sum, p, i) => {
        const q = target[(i + offset) % target.length];
        return sum + (p[0] - q[0])**2 + (p[1] - q[1])**2;
      }, 0);
      if (score < bestScore) { bestScore = score; bestOffset = offset; }
    }
    const reorder = loop => {
      const sampled = resampleLoop(loop, source.length);
      if (reversed) sampled.reverse();
      return source.map((_, i) => sampled[(i + bestOffset) % sampled.length]);
    };
    return {points: source.map((_, i) => target[(i + bestOffset) % target.length]), reorder};
  }
  // Only the logo handoff uses filled silhouettes, traced from the actual brand artwork.
  // Y has two contours around the original thread cutout, so its source ribbon is split too.
  const brandMorphs = ['y', 'z', 'thread'].flatMap((name, path) => brandContours[name].map((contour, part, loops) => {
    const start = part / loops.length;
    const end = (part + 1) / loops.length;
    // Only inflate once the strokes have arrived at the brand's own pose.
    const from = ribbonOutline(travellingMark[path], start, end, 160);
    const original = resampleLoop(contour.map(point => point.map(value => value * 1.25)),160);
    const skeleton = Array.from({length: 97}, (_, i) => curvePoint(shapes[3][path],mix(start,end,i/96)));
    if (path === 0 && part === 0) {
      // The upper Y is branched. Establish its right arm while still thin,
      // rather than growing a triangular slab from an unbranched ribbon.
      for (let i=0;i<=64;i++) {
        const t=i/64;
        skeleton.push([263*(1-t)**3+3*278*(1-t)**2*t+3*338*(1-t)*t*t+389*t**3,
          280*(1-t)**3+3*239*(1-t)**2*t+3*174*(1-t)*t*t+159*t**3]);
      }
    }
    const thin = original.map(point => {
      const nearest = skeleton.reduce((best, candidate) =>
        Math.hypot(candidate[0]-point[0],candidate[1]-point[1]) < Math.hypot(best[0]-point[0],best[1]-point[1]) ? candidate : best);
      const distance = Math.hypot(point[0]-nearest[0],point[1]-nearest[1]);
      return point.map((value,axis) => nearest[axis]+(value-nearest[axis])*Math.min(1,2/distance));
    });
    const softened = thin.map((point,i) => point.map((_,axis) =>
      [1,2,3,2,1].reduce((sum,weight,j) => sum+weight*thin[(i+j-2+thin.length)%thin.length][axis],0)/9));
    const alignment = alignContour(from,softened,1);
    return {from,thin:alignment.points,to:alignment.reorder(original)};
  }));
  function closedPath(from, to, amount) {
    const points = from.map((p, i) => p.map((value, axis) => mix(value, to[i][axis], amount)));
    const middle = (a, b) => a.map((value, axis) => ((value + b[axis]) / 2).toFixed(3)).join(' ');
    return `M${middle(points.at(-1), points[0])}` + points.map((point, i) =>
      `Q${point.map(value => value.toFixed(3)).join(' ')} ${middle(point, points[(i + 1) % points.length])}`).join('') + 'Z';
  }
  let sectionTop;
  let stageEnd;
  let viewportHeight;
  let viewportWidth;
  let anchors;
  let displayedScroll = scrollY;
  let targetScroll = scrollY;
  let frameId = 0;
  let lastFrame = 0;
  let navigationScroll = scrollY;
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let reduceMotion = motionQuery.matches;
  motionQuery.addEventListener('change', event => {
    reduceMotion = event.matches;
    displayedScroll = targetScroll = scrollY;
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
    render();
  });
  function render() {
    const sampleScroll = reduceMotion ? scrollY : displayedScroll;
    const distance = Math.max(0, (sampleScroll - sectionTop) / viewportHeight);
    const { scene, transition } = reduceMotion
      ? { scene: Math.min(Math.floor(distance), chapterShapes.length - 1), transition: 0 }
      : timeline(distance);
    const amount = reduceMotion ? 0 : smooth(transition);
    const pose = poseAt(scene, transition);
    const coordinates = paths.map((path, i) => {
      const points = pose[i];
      const d = pathData(points);
      path.setAttribute('d', d);
      highlights[i].setAttribute('d', d);
      return points;
    });
    // The panel is the space enclosed by the same two animated brand strokes.
    const panelOutline = paths[0].getAttribute('d') + paths[1].getAttribute('d').replace(/^M/, 'L') + 'Z';
    surface.setAttribute('d', panelOutline);
    panelClip.setAttribute('d', panelOutline);
    surface.style.opacity = scene === 0 ? progress(transition, .8, .94) : scene === 1 ? 1
      : scene === 2 ? 1 - progress(transition, .04, .2) : 0;
    const fromAnchor = anchors[scene];
    const toAnchor = anchors[Math.min(scene + 1, 4)];
    const size = mix(fromAnchor.size, toAnchor.size, amount);
    // Sweep through the open left column before the incoming memory copy enters.
    const sweep = scene === 2 && viewportWidth > 900
      ? Math.sin(Math.PI * amount) * viewportWidth * .12 : 0;
    const x = mix(fromAnchor.x, toAnchor.x, amount) - sweep;
    const lift = reduceMotion ? 0 : Math.sin(Math.PI * amount) * viewportHeight * .07;
    // Interpolate document anchors, then follow the same scroll as their copy.
    const stageScroll = Math.max(0, Math.min(scrollY - sectionTop, stageEnd));
    const y = mix(fromAnchor.y, toAnchor.y, amount) - stageScroll - lift;
    visual.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${size / 640})`;
    details.forEach((detail, i) => {
      const visibility = scene === 0 && i === 0 ? progress(transition, .78, .96)
        : scene === 1 && i === 0 ? 1 - progress(transition, .32, .62)
        : scene === 1 && i === 1 ? progress(transition, .32, .62)
        : scene === 2 && i === 1 ? 1 - progress(transition, .02, .2)
        : scene === 2 && i === 2 ? progress(transition, .54, .72)
        : scene === 3 && i === 2 ? 1 - progress(transition, .08, .24) : 0;
      const sliding = scene === 1 && i < 2;
      detail.style.opacity = sliding ? '1' : visibility.toFixed(5);
      detail.style.visibility = visibility === 0 ? 'hidden' : 'visible';
      if (visibility === 0) return;
      attachments[i].forEach(({ element, path, coordinate }) => {
        const reference = shapes[i][path];
        const current = coordinates[path];
        const scale = .94 + .06 * visibility;
        element.style.opacity = sliding ? visibility.toFixed(5) : '1';
        element.setAttribute('transform', `translate(${current[coordinate]} ${current[coordinate + 1]}) scale(${scale}) translate(${-reference[coordinate]} ${-reference[coordinate + 1]})`);
      });
      const ink = inks[i];
      if (ink) {
        // Preserve typography and card proportions; only the frame is deformable.
        const reference = shapes[i];
        const width = (coordinates[1][0] - coordinates[0][0]) / (reference[1][0] - reference[0][0]);
        const height = (coordinates[1][13] - coordinates[0][13]) / (reference[1][13] - reference[0][13]);
        const scale = Math.min(width, height);
        const slide = sliding ? 390 * (i === 0 ? visibility - 1 : 1 - visibility) : 0;
        ink.setAttribute('transform', `translate(${coordinates[0][0]} ${coordinates[0][13]}) scale(${scale}) translate(${slide-reference[0][0]} ${-reference[0][13]})`);
      }
    });
    // Carry one existing reply out of the chat into its memory branch card.
    // The rest of the interface can leave before its frame opens into ribbons.
    keepsake.style.opacity = scene === 1 ? (transition > .32 ? 1 : 0)
      : scene === 2 && transition < .7 ? 1 : 0;
    keepsake.parentElement.setAttribute('clip-path', scene === 1 ? 'url(#panel-clip)' : 'none');
    const carry = scene === 2 ? progress(transition, .18, .62) : 0;
    keepsakeCard.setAttribute('width', mix(177,224,carry));
    keepsakeCard.setAttribute('height', mix(43,88,carry));
    keepsakeCard.setAttribute('rx', mix(11,14,carry));
    keepsakeCard.style.fill = `rgb(${[127,159,229].map(value => mix(value,255,carry)).join(' ')})`;
    keepsakeText.style.opacity = scene === 2 ? (1 - progress(transition, .4, .55)).toFixed(5) : 1;
    if (scene === 1 && transition > .32) keepsake.setAttribute('transform', inks[1].getAttribute('transform'));
    else keepsake.setAttribute('transform', `translate(${mix(0,coordinates[1][0]+8-318,carry)} ${mix(0,coordinates[1][1]-44-275,carry)})`);
    branchCard.style.opacity = scene === 2 ? progress(transition, .6, .7).toFixed(5) : '1';
    const towardsMark = scene === 0 ? 1 - progress(transition, 0, .28) : scene === 4 ? 1
      : scene === 3 ? progress(transition, .8, 1) : 0;
    const ornamentAmount = progress(towardsMark, .45, 1);
    brandOrnaments.style.opacity = ornamentAmount.toFixed(5);
    brandOrnaments.setAttribute('transform', `translate(320 320) scale(${mix(.94,1,ornamentAmount)}) translate(-320 -320)`);
    const outlining = scene === 4 || (scene === 0 && transition <= .28) || (scene === 3 && transition >= .8);
    brandLayer.style.visibility = outlining ? 'visible' : 'hidden';
    if (outlining) brandPaths.forEach((path, i) => {
      const outline = brandMorphs[i];
      const d = towardsMark < .35
        ? closedPath(outline.from, outline.thin, progress(towardsMark,0,.35))
        : closedPath(outline.thin, outline.to, progress(towardsMark,.35,1));
      path.setAttribute('d', d);
    });
    // The connected trunk and its material are established before cards enter;
    // keep them connected until the cards have left, then release the ribbons.
    const memoryBlend = scene === 2 ? progress(transition,.36,.54) : scene === 3 ? 1-progress(transition,.24,.43) : 0;
    paths.forEach(path => {
      path.style.opacity = outlining ? 0 : 1;
      path.style.strokeWidth = mix(4,2.5,memoryBlend).toFixed(3);
    });
    // The contour is already aligned with the source artwork before the exact logo takes over.
    const complete = scene === 0 ? progress(1 - transition, .97, 1) : scene === 4 ? 1
      : scene === 3 ? progress(transition, .97, 1) : 0;
    brandLayer.style.opacity = (1 - complete).toFixed(5);
    completeLogo.style.opacity = complete.toFixed(5);
    const materialBlend = scene === 0 ? progress(1 - transition, .4, .5)
      : scene === 3 ? progress(transition, .4, .5) : scene === 4 ? 1 : 0;
    const brandColor = [135, 168, 238];
    const memoryColor = [146,175,232];
    const colorAt = color => `rgb(${color.map((value, i) => mix(mix(value,brandColor[i],materialBlend),memoryColor[i],memoryBlend).toFixed(3)).join(' ')})`;
    ribbonStops.forEach(({element, color}) => element.setAttribute('stop-color', colorAt(color)));
    paths[2].style.stroke = colorAt([173, 198, 250]);
    visual.style.setProperty('--line-detail', outlining ? 0 : ((1 - towardsMark) * (1 - materialBlend) * (1-memoryBlend)).toFixed(5));
    opening.style.opacity = (scene === 0 ? 1 - progress(transition, 0, .6) : 0).toFixed(5);
  }
  function animate(now) {
    const elapsed = now - lastFrame;
    lastFrame = now;
    // Time-based interpolation supplies frames between wheel events at any display refresh rate.
    const step = (targetScroll - displayedScroll) * (1 - Math.exp(-elapsed / 40));
    displayedScroll += step;
    const settled = Math.abs(targetScroll - displayedScroll) < .05;
    if (settled) displayedScroll = targetScroll;
    render();
    frameId = settled ? 0 : requestAnimationFrame(animate);
  }
  addEventListener('scroll', () => {
    targetScroll = scrollY;
    if (targetScroll !== navigationScroll) {
      const hidden = targetScroll > 24 && targetScroll > navigationScroll;
      header.classList.toggle('is-hidden',hidden);
      navigationScroll = targetScroll;
    }
    if (reduceMotion) {
      displayedScroll = targetScroll;
      render();
      return;
    }
    if (!frameId) {
      lastFrame = performance.now();
      frameId = requestAnimationFrame(animate);
    }
  }, {passive: true});
  function resize() {
    viewportWidth = innerWidth;
    viewportHeight = chapters[0].querySelector('.chapter-content').getBoundingClientRect().height;
    sectionTop = section.offsetTop;
    stageEnd = section.offsetHeight - viewportHeight;
    anchors = chapters.map(chapter => {
      const content = chapter.querySelector('.chapter-content').getBoundingClientRect();
      const anchor = chapter.querySelector('.art-anchor').getBoundingClientRect();
      return {x: anchor.left - content.left, y: anchor.top + scrollY - sectionTop, size: anchor.width};
    });
    displayedScroll = targetScroll = scrollY;
    render();
  }
  addEventListener('resize', resize);
  resize();
  document.querySelectorAll('a[href="#top"], a[href="#features"], a[href="#conversation"], a[href="#memories"], a[href="#download"]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const id = link.getAttribute('href');
    const top = document.querySelector(id).offsetTop;
    scrollTo({top, behavior: reduceMotion ? 'auto' : 'smooth'});
  }));
})();
