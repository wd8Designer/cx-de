/* Homepage curtain. Scoped to #es-curtain.
   The lamp is baked off the main thread in short slices so the first
   screen stays responsive, and the loop stops once the band has scrolled
   away. Only the visible logo is baked up front; the other two wait until
   they are opened, which keeps the Caffenza typeface off the first load. */
(function () {
  var root = document.getElementById('es-curtain');
  if (!root) return;

  var CFG = {
    orbitMs: 9000,
    fadeMs: 1100,
    ambient: 0.14,
    gain: 0.78,
    grain: 0.42,
    halo: 0.27
  };

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var small = window.matchMedia('(max-width: 768px)').matches;
  var hero = root;
  var band = root.querySelector('.band');
  var cv = document.getElementById('es-curtain-burn');
  var slotEl = document.getElementById('es-curtain-slot');
  if (!band || !cv || !slotEl) return;
  var ctx = cv.getContext('2d', { alpha: false });

  var CX_PATH = new Path2D(
    'M106.007 55.4254C105.58 65.0677 103.96 71.4526 97.988 75.6095L97.977 75.6172L97.9664 75.6254C95.5239 77.5278 92.1012 78.5105 87.2653 79.0051C82.432 79.4994 76.2705 79.5 68.3984 79.5H38.1302C30.0611 79.5 23.9002 79.4994 19.1165 79.0051C14.3333 78.511 11.0066 77.5292 8.56219 75.6254L8.55517 75.62L8.54796 75.6147C4.55338 72.7258 2.53868 68.7773 1.52288 63.4878C0.502 58.1718 0.5 51.5597 0.5 43.3831V36.6169C0.5 28.4471 0.600034 21.832 1.66944 16.5165C2.73464 11.222 4.75209 7.26792 8.55734 4.3783L8.55736 4.37833L8.56219 4.37457C11.0047 2.47222 14.4274 1.4895 19.2633 0.994918C24.0966 0.500603 30.2581 0.5 38.1302 0.5H68.3984C76.4675 0.5 82.6284 0.500624 87.4122 0.994865C92.1953 1.48904 95.522 2.47077 97.9664 4.37457L97.9663 4.37467L97.9756 4.38154C103.573 8.53775 105.184 14.5459 105.985 23.7786H83.019C82.8593 22.5095 82.0909 21.4904 80.9441 20.6906C79.6635 19.7975 77.8715 19.1453 75.7823 18.6668C71.5975 17.7085 66.0477 17.4104 60.5365 17.4104H46.3851C40.8838 17.4104 36.5286 17.5094 33.15 17.9621C29.7786 18.4139 27.2981 19.227 25.6126 20.7203C23.9294 22.2115 23.0096 24.219 22.457 26.9145C21.9072 29.5971 21.7099 33.0214 21.5138 37.3905L21.5133 37.4017V37.4129V42.9851C21.5133 47.3693 21.7092 50.7986 22.3115 53.4922C22.9164 56.1973 23.9388 58.1948 25.6126 59.6777C27.2981 61.1709 29.7786 61.984 33.15 62.4358C36.5286 62.8886 40.8838 62.9875 46.3851 62.9875H60.5365C66.0456 62.9875 71.7013 62.69 75.9926 61.5785C78.137 61.0231 79.9846 60.2538 81.3049 59.1817C82.5135 58.2003 83.2839 56.9595 83.4209 55.4254H106.007ZM165.139 59.9954L165.104 59.96L165.063 59.9322L165.049 59.9227C164.473 59.5324 163.865 59.1207 163.25 58.8086C162.629 58.4936 161.962 58.2582 161.264 58.2582C160.039 58.2582 158.283 58.663 157.356 60.0291L142.142 75.479C141.226 76.409 139.824 77.2698 138.3 77.8986C136.776 78.5273 133.896 78.903 133.896 78.903H109.265C108.51 78.903 107.92 78.8044 107.537 78.6098C107.352 78.5161 107.231 78.4079 107.154 78.2911C107.079 78.1771 107.029 78.0268 107.029 77.8149C107.029 77.746 107.076 77.5395 107.258 77.2165C107.429 76.9118 107.694 76.5507 108.056 76.1829C108.056 76.1821 108.057 76.1814 108.058 76.1807L140.863 43.6612C142.21 42.7199 142.607 40.9404 142.607 39.7015C142.607 38.4626 142.21 36.6832 140.863 35.7418L108.058 3.22231C108.057 3.22156 108.056 3.22082 108.056 3.22007C107.694 2.8523 107.429 2.49114 107.258 2.18651C107.076 1.86352 107.029 1.65705 107.029 1.58807C107.029 1.37261 107.128 1.12419 107.444 0.910315C107.773 0.687529 108.348 0.5 109.265 0.5H133.896C135.18 0.5 136.776 0.875666 138.3 1.50438C139.824 2.1332 141.226 2.99406 142.142 3.92397L157.389 19.4076C158.654 20.6921 159.955 21.1448 161.264 21.1448C162.49 21.1448 164.245 20.74 165.173 19.3739L180.387 3.92397C181.303 2.99406 182.705 2.1332 184.229 1.50438C185.753 0.875666 187.348 0.5 188.632 0.5H213.263C214.019 0.5 214.608 0.598618 214.992 0.793216C215.176 0.886867 215.298 0.995073 215.374 1.11186C215.449 1.22589 215.5 1.37624 215.5 1.58807C215.5 1.65706 215.453 1.86352 215.271 2.18651C215.1 2.49109 214.835 2.85219 214.473 3.21991C214.472 3.22071 214.472 3.22151 214.471 3.22231L181.634 35.7733L181.629 35.7775C180.365 37.0619 179.922 38.3788 179.922 39.7015C179.922 40.9404 180.318 42.7199 181.665 43.6612L214.471 76.1807C214.472 76.1815 214.472 76.1823 214.473 76.1832C214.835 76.5509 215.1 76.9119 215.271 77.2165C215.453 77.5395 215.5 77.746 215.5 77.8149C215.5 78.0304 215.4 78.2788 215.084 78.4927C214.755 78.7155 214.181 78.903 213.263 78.903H188.632C187.348 78.903 185.753 78.5273 184.229 77.8986C182.705 77.2698 181.303 76.409 180.387 75.479L165.139 59.9954Z'
  );

  var VARN_LIGHT = [
    [278, 263, 355, 432, [0.50, 0.47, 0.87]],
    [355, 432, 432, 600, [0.93, 0.58, 0.69]],
    [432, 600, 512, 775, [0.85, 0.35, 0.19]],
    [747, 263, 512, 775, [1.0, 0.93, 0.82]]
  ];

  function segD(px, py, ax, ay, bx, by) {
    var vx = bx - ax, vy = by - ay, wx = px - ax, wy = py - ay;
    var h = (wx * vx + wy * vy) / (vx * vx + vy * vy);
    h = h < 0 ? 0 : h > 1 ? 1 : h;
    var dx = wx - vx * h, dy = wy - vy * h;
    return Math.sqrt(dx * dx + dy * dy);
  }

  var SLIDES = [
    {
      label: 'Cypherox logo',
      box: [0.5, 0.5, 215, 79],
      fitW: 1.15,
      fitH: 0.65,
      draw: function (c) {
        c.fillStyle = '#fff';
        c.fill(CX_PATH);
      },
      track: [
        [-20, -20],
        [108, -30],
        [236, -20],
        [246, 40],
        [236, 100],
        [108, 110],
        [-20, 100],
        [-30, 40]
      ],
      ramp: { e: [0.95, 0.43, 0.40], m: [1.0, 0.58, 0.52], c: [1.0, 0.88, 0.86] }
    },
    {
      label: 'Cypherox logo',
      box: [0.5, 0.5, 215, 79],
      fitW: 1.15,
      fitH: 0.65,
      draw: function (c) {
        c.fillStyle = '#fff';
        c.fill(CX_PATH);
      },
      track: [
        [-20, -20],
        [108, -30],
        [236, -20],
        [246, 40],
        [236, 100],
        [108, 110],
        [-20, 100],
        [-30, 40]
      ],
      ramp: { e: [0.95, 0.43, 0.40], m: [1.0, 0.58, 0.52], c: [1.0, 0.88, 0.86] }
    },
    {
      label: 'Caffenza logo',
      box: null,
      fitW: 1.3,
      fitH: 0.42,
      gain: 1,
      font: '800 200px Fraunces, Georgia, serif',
      draw: function (c) {
        c.font = this.font;
        c.fillStyle = '#fff';
        c.textBaseline = 'alphabetic';
        c.fillText('CYPHEROX', 0, 0);
      },
      track: null,
      ramp: { e: [0.55, 0.26, 0.10], m: [0.88, 0.56, 0.28], c: [1, 0.9, 0.74] }
    }
  ];

  var fontsReady = false;
  var frauncesPromise = null;

  function measureCaffenza() {
    var s = SLIDES[2];
    var m = document.createElement('canvas').getContext('2d');
    m.font = s.font;
    var t = m.measureText('CYPHEROX');
    var asc = t.actualBoundingBoxAscent || 150;
    var desc = t.actualBoundingBoxDescent || 10;
    var x0 = -(t.actualBoundingBoxLeft || 0);
    var x1 = t.actualBoundingBoxRight || t.width;
    s.box = [x0, -asc, x1 - x0, asc + desc];
    var p = 70;
    s.track = [[x0 - p, -asc - p], [x1 + p, -asc - p], [x1 + p, desc + p], [x0 - p, desc + p]];
  }

  function ensureFraunces() {
    if (frauncesPromise) return frauncesPromise;
    frauncesPromise = new Promise(function (resolve) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,800&display=swap';
      link.media = 'print';
      link.onload = function () { link.media = 'all'; };
      document.head.appendChild(link);
      var fonts = (document.fonts && document.fonts.load) ? document.fonts.load('800 200px Fraunces') : Promise.resolve();
      Promise.race([fonts, new Promise(function (r) { setTimeout(r, 2500); })]).then(function () {
        fontsReady = true;
        measureCaffenza();
        resolve();
      });
    });
    return frauncesPromise;
  }

  var R = 1, W = 0, H = 0, slot = { cx: 0, cy: 0, s: 1 };

  function fit(S) {
    var bx = S.box[0], by = S.box[1], bw = S.box[2], bh = S.box[3];
    var k = Math.min(slot.s * S.fitW / bw, slot.s * S.fitH / bh);
    return { k: k, ox: slot.cx - (bx + bw / 2) * k, oy: slot.cy - (by + bh / 2) * k };
  }

  function edt(g, w, h) {
    var n = Math.max(w, h);
    var f = new Float64Array(n);
    var d = new Float64Array(n);
    var v = new Int32Array(n);
    var z = new Float64Array(n + 1);
    var BIG = 1e20;
    function pass(len) {
      var k = 0, q, s, r;
      v[0] = 0;
      z[0] = -BIG;
      z[1] = BIG;
      for (q = 1; q < len; q++) {
        s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while (s <= z[k]) {
          k--;
          s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = BIG;
      }
      k = 0;
      for (q = 0; q < len; q++) {
        while (z[k + 1] < q) k++;
        r = q - v[k];
        d[q] = r * r + f[v[k]];
      }
    }
    var x, y;
    for (x = 0; x < w; x++) {
      for (y = 0; y < h; y++) f[y] = g[y * w + x];
      pass(h);
      for (y = 0; y < h; y++) g[y * w + x] = d[y];
    }
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) f[x] = g[y * w + x];
      pass(w);
      for (x = 0; x < w; x++) g[y * w + x] = Math.sqrt(d[x]);
    }
    return g;
  }

  function sm(a, b, x) {
    x = (x - a) / (b - a);
    x = x < 0 ? 0 : x > 1 ? 1 : x;
    return x * x * (3 - 2 * x);
  }

  function yieldThread() {
    return new Promise(function (resolve) {
      if (window.requestIdleCallback) requestIdleCallback(function () { resolve(); }, { timeout: 48 });
      else setTimeout(resolve, 0);
    });
  }

  var bakeGen = 0;

  function bake(S, gen) {
    var F = fit(S);
    var mc = document.createElement('canvas');
    mc.width = W;
    mc.height = H;
    var m = mc.getContext('2d', { willReadFrequently: true });
    m.setTransform(F.k, 0, 0, F.k, F.ox, F.oy);
    S.draw(m);
    var mask = m.getImageData(0, 0, W, H).data;

    var q = 0.25;
    var w2 = Math.ceil(W * q);
    var h2 = Math.ceil(H * q);
    var sc = document.createElement('canvas');
    sc.width = w2;
    sc.height = h2;
    var s2 = sc.getContext('2d', { willReadFrequently: true });
    s2.drawImage(mc, 0, 0, w2, h2);
    var sd = s2.getImageData(0, 0, w2, h2).data;
    var g = new Float64Array(w2 * h2);
    var i;
    for (i = 0; i < w2 * h2; i++) g[i] = sd[i * 4 + 3] > 110 ? 0 : 1e20;
    edt(g, w2, h2);

    var sigma = CFG.halo * slot.s;
    var gain = S.gain || CFG.gain;
    var amb = CFG.ambient;
    var noise = CFG.grain;
    var full = new ImageData(W, H);
    var dim = new ImageData(W, H);
    var fd = full.data;
    var dd = dim.data;
    var rp = S.ramp;
    var T = new Float64Array(3);
    var seed = 1234567;
    var er = 0, eg = 0, eb = 0, mr = 0, mg = 0, mb = 0, cr = 0, cg = 0, cb = 0;
    if (!S.tint) {
      er = rp.e[0]; eg = rp.e[1]; eb = rp.e[2];
      mr = rp.m[0]; mg = rp.m[1]; mb = rp.m[2];
      cr = rp.c[0]; cg = rp.c[1]; cb = rp.c[2];
    }

    var y = 0;
    var rows = small ? 10 : 6;

    function rowsNow() {
      var yEnd = Math.min(H, y + rows);
      var x, o, gx, gy, x0, y0, fx, fy, j, dist, inside, halo, n, v, pass, t, a, b, out;
      for (; y < yEnd; y++) {
        gy = Math.min(h2 - 1.001, y * q);
        y0 = gy | 0;
        fy = gy - y0;
        for (x = 0; x < W; x++) {
          i = y * W + x;
          o = i * 4;
          gx = Math.min(w2 - 1.001, x * q);
          x0 = gx | 0;
          fx = gx - x0;
          j = y0 * w2 + x0;
          dist = (g[j] * (1 - fx) + g[j + 1] * fx) * (1 - fy) + (g[j + w2] * (1 - fx) + g[j + w2 + 1] * fx) * fy;
          inside = mask[o + 3] / 255;
          halo = sigma / (sigma + Math.max(0, dist / q - 1.5));
          seed ^= seed << 13;
          seed ^= seed >>> 17;
          seed ^= seed << 5;
          n = 1 - noise + noise * (0.45 + 0.55 * ((seed >>> 0) / 4294967296));
          v = gain * halo * (1 - inside) * n;
          if (S.tint) {
            S.tint((x - F.ox) / F.k, (y - F.oy) / F.k, T);
            mr = T[0]; mg = T[1]; mb = T[2];
            er = mr * 0.82; eg = mg * 0.7; eb = mb * 0.7;
            cr = mr + (1 - mr) * 0.62;
            cg = mg + (0.97 - mg) * 0.62;
            cb = mb + (0.92 - mb) * 0.62;
          }
          for (pass = 0; pass < 2; pass++) {
            t = Math.min(1, pass ? v * amb : v);
            a = sm(0, 0.45, t);
            b = sm(0.55, 1, t);
            out = pass ? dd : fd;
            out[o] = ((er + (mr - er) * a) * (1 - b) + cr * b) * t * 255;
            out[o + 1] = ((eg + (mg - eg) * a) * (1 - b) + cg * b) * t * 255;
            out[o + 2] = ((eb + (mb - eb) * a) * (1 - b) + cb * b) * t * 255;
            out[o + 3] = 255;
          }
        }
      }
    }

    return new Promise(function (resolve) {
      function step() {
        if (gen !== bakeGen) { resolve(false); return; }
        rowsNow();
        if (y < H) {
          yieldThread().then(step);
          return;
        }
        function put(img) {
          var c = document.createElement('canvas');
          c.width = W;
          c.height = H;
          c.getContext('2d').putImageData(img, 0, 0);
          return c;
        }
        S.full = put(full);
        S.dim = put(dim);
        S.fit = F;
        var pts = S.track.map(function (pt) { return [F.ox + pt[0] * F.k, F.oy + pt[1] * F.k]; });
        var cum = [0];
        var pi;
        for (pi = 0; pi < pts.length; pi++) {
          var aa = pts[pi];
          var bb = pts[(pi + 1) % pts.length];
          cum.push(cum[pi] + Math.hypot(bb[0] - aa[0], bb[1] - aa[1]));
        }
        S.pts = pts;
        S.cum = cum;
        var bx = S.box[0], by = S.box[1], bw = S.box[2], bh = S.box[3];
        S.hit = [F.ox + bx * F.k, F.oy + by * F.k, bw * F.k, bh * F.k];
        S.ready = true;
        resolve(true);
      }
      step();
    });
  }

  function onTrack(S, u) {
    var L = S.cum[S.cum.length - 1];
    var t = (u % 1) * L;
    var i = 0;
    while (i < S.pts.length - 1 && S.cum[i + 1] < t) i++;
    var a = S.pts[i];
    var b = S.pts[(i + 1) % S.pts.length];
    var f = (t - S.cum[i]) / Math.max(1e-6, S.cum[i + 1] - S.cum[i]);
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }

  var lc = document.createElement('canvas');
  var lctx = lc.getContext('2d');
  var bc = document.createElement('canvas');
  var bctx = bc.getContext('2d');
  var Q_END = Math.sqrt(Math.pow(CFG.ambient, -1 / 1.3) - 1);
  var STOPS = [];
  var sj;
  for (sj = 0; sj < 10; sj++) {
    var rr = sj / 9;
    var qq = rr * Q_END;
    var lamp = Math.pow(1 / (1 + qq * qq), 1.3);
    STOPS.push([rr, Math.max(0, (Math.max(lamp, CFG.ambient) - CFG.ambient) / (1 - CFG.ambient))]);
  }

  var pointer = { x: 0, y: 0, over: false };

  function paint(target, S, lampX, lampY, reach) {
    target.globalAlpha = 1;
    target.drawImage(S.dim, 0, 0);
    var Rr = reach * Q_END;
    var gr = lctx.createRadialGradient(lampX, lampY, 0, lampX, lampY, Rr);
    var si;
    for (si = 0; si < STOPS.length; si++) gr.addColorStop(STOPS[si][0], 'rgba(0,0,0,' + STOPS[si][1].toFixed(3) + ')');
    lctx.globalCompositeOperation = 'copy';
    lctx.fillStyle = gr;
    lctx.fillRect(0, 0, W, H);
    lctx.globalCompositeOperation = 'source-in';
    lctx.drawImage(S.full, 0, 0);
    lctx.globalCompositeOperation = 'source-over';
    target.drawImage(lc, 0, 0);
  }

  var lamps = SLIDES.map(function () { return { x: 0, y: 0, follow: 0, set: false }; });
  var t0 = performance.now();

  function lampFor(i, now) {
    var S = SLIDES[i];
    var L = lamps[i];
    var u = reduce ? 0.78 : ((now - t0) % CFG.orbitMs) / CFG.orbitMs;
    var track = onTrack(S, u);
    var hx = S.hit[0], hy = S.hit[1], hw = S.hit[2], hh = S.hit[3];
    var pad = slot.s * 0.12;
    var over = pointer.over && i === cur && pointer.x > hx - pad && pointer.x < hx + hw + pad && pointer.y > hy - pad && pointer.y < hy + hh + pad;
    L.follow += ((over ? 1 : 0) - L.follow) * 0.09;
    var gx = track[0] + (pointer.x - track[0]) * L.follow;
    var gy = track[1] + (pointer.y - track[1]) * L.follow;
    if (!L.set) { L.x = gx; L.y = gy; L.set = true; }
    L.x += (gx - L.x) * 0.14;
    L.y += (gy - L.y) * 0.14;
    return [L.x, L.y, slot.s * 0.97 * (0.5 + 0.14 * L.follow)];
  }

  var cur = 0, prev = -1, fadeStart = 0;
  var visible = true;
  var raf = 0;

  function frame(now) {
    raf = 0;
    if (!visible) return;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    if (!SLIDES[cur].ready) {
      if (prev >= 0 && SLIDES[prev].ready) {
        var prevLamp = lampFor(prev, now);
        paint(ctx, SLIDES[prev], prevLamp[0], prevLamp[1], prevLamp[2]);
      }
    } else {
      var p = prev < 0 ? 1 : Math.min(1, (now - fadeStart) / (reduce ? 1 : CFG.fadeMs));
      if (p < 1 && prev >= 0 && SLIDES[prev].ready) {
        var pl = lampFor(prev, now);
        paint(ctx, SLIDES[prev], pl[0], pl[1], pl[2]);
        var cl = lampFor(cur, now);
        bctx.fillStyle = '#000';
        bctx.fillRect(0, 0, W, H);
        paint(bctx, SLIDES[cur], cl[0], cl[1], cl[2]);
        ctx.globalAlpha = p * p * (3 - 2 * p);
        ctx.drawImage(bc, 0, 0);
        ctx.globalAlpha = 1;
      } else {
        prev = -1;
        var ll = lampFor(cur, now);
        paint(ctx, SLIDES[cur], ll[0], ll[1], ll[2]);
      }
      hero.classList.add('is-lit');
    }
    if (!reduce || (prev >= 0 && (now - fadeStart) < CFG.fadeMs)) raf = requestAnimationFrame(frame);
  }

  function kick() {
    if (visible && !raf) raf = requestAnimationFrame(frame);
  }

  function layout() {
    var gen = ++bakeGen;
    R = Math.min(window.devicePixelRatio || 1, small ? 1 : 1.25);
    var cr = cv.getBoundingClientRect();
    var sr = slotEl.getBoundingClientRect();
    W = cv.width = lc.width = bc.width = Math.max(2, Math.round(cr.width * R));
    H = cv.height = lc.height = bc.height = Math.max(2, Math.round(cr.height * R));
    slot = {
      cx: (sr.left - cr.left + sr.width / 2) * R,
      cy: (sr.top - cr.top + sr.height / 2) * R,
      s: sr.width * R
    };
    SLIDES.forEach(function (S, i) {
      S.ready = false;
      lamps[i].set = false;
    });
    hero.classList.remove('is-lit');
    if (saveData || !W || !H) return;
    function bakeVisible() {
      if (!SLIDES[cur].box) return;
      bake(SLIDES[cur], gen).then(function (ok) {
        if (ok && gen === bakeGen) kick();
      });
    }
    if (cur === 2 && !fontsReady) ensureFraunces().then(function () {
      if (gen === bakeGen) bakeVisible();
    });
    else bakeVisible();
    if (window.esCurtainPlace) window.esCurtainPlace();
  }

  var rt = 0;
  var started = false;
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      if (!started) return;
      clearTimeout(rt);
      rt = setTimeout(layout, 180);
    }).observe(band);
  }

  var tabs = Array.prototype.slice.call(root.querySelectorAll('.tab'));
  var panes = [0, 1, 2].map(function (i) { return document.getElementById('es-curtain-p' + i); });
  var points = Array.prototype.slice.call(root.querySelectorAll('.points'));
  var ink = document.getElementById('es-curtain-ink');

  function moveInk(from, to) {
    var right = to > from;
    var far = Math.abs(to - from);
    var fast = 0.38 + 0.08 * far;
    var slow = 0.62 + 0.1 * far;
    ink.style.setProperty('--tl', (right ? slow : fast) + 's');
    ink.style.setProperty('--tr', (right ? fast : slow) + 's');
    ink.style.setProperty('--dl', right ? '.06s' : '0s');
    ink.style.setProperty('--dr', right ? '0s' : '.06s');
    ink.style.setProperty('--from', to);
    ink.style.setProperty('--to', to);
  }

  function go(i, focus) {
    i = (i + 3) % 3;
    if (i === cur) return;
    prev = cur;
    cur = i;
    fadeStart = performance.now();
    hero.dataset.active = String(i);
    slotEl.setAttribute('aria-label', SLIDES[i].label);
    tabs.forEach(function (t, k) {
      t.setAttribute('aria-selected', k === i ? 'true' : 'false');
      t.tabIndex = k === i ? 0 : -1;
    });
    moveInk(prev, i);
    [panes, points].forEach(function (list) {
      list.forEach(function (el, k) {
        if (!el) return;
        el.classList.toggle('on', k === i);
        if (k === i) {
          el.removeAttribute('aria-hidden');
          el.inert = false;
        } else {
          el.setAttribute('aria-hidden', 'true');
          el.inert = true;
        }
      });
    });
    if (focus) tabs[i].focus();
    function bakeCurrent() {
      if (!SLIDES[i].ready && W && (i !== 2 || fontsReady)) {
        bake(SLIDES[i], bakeGen).then(function () { kick(); });
      } else {
        kick();
      }
    }
    if (i === 2 && !fontsReady) ensureFraunces().then(bakeCurrent);
    else bakeCurrent();
  }

  tabs.forEach(function (t, i) { t.addEventListener('click', function () { go(i); }); });
  root.querySelector('.tabs').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, true); }
  });

  band.addEventListener('pointermove', function (e) {
    var cr = cv.getBoundingClientRect();
    pointer.x = (e.clientX - cr.left) * R;
    pointer.y = (e.clientY - cr.top) * R;
    pointer.over = true;
  }, { passive: true });
  band.addEventListener('pointerleave', function () { pointer.over = false; }, { passive: true });

  var sx = null, sy = 0;
  band.addEventListener('pointerdown', function (e) {
    if (!e.target.closest('a,button')) { sx = e.clientX; sy = e.clientY; }
  });
  window.addEventListener('pointerup', function (e) {
    if (sx === null) return;
    var dx = e.clientX - sx;
    var dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) kick();
    }, { rootMargin: '80px' }).observe(hero);
  }

  function start() {
    if (started) return;
    started = true;
    layout();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
  window.addEventListener('load', start);
  if (window.requestIdleCallback) requestIdleCallback(start, { timeout: 600 });
})();
