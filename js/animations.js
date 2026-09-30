/**
 * Cypherox Technologies — Animations Script
 * Handles IntersectionObserver scroll reveals, stat number counters,
 * and subtle hero card interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  initScrollReveal();
  initCounterAnimation();
  initHeroParallax();
  initSchematicPulse();
});

// --------------------------------------------------------------------------
// 1. SCROLL REVEAL (INTERSECTION OBSERVER)
// --------------------------------------------------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 2. ANIMATED NUMBER COUNTERS (STATS STRIP)
// --------------------------------------------------------------------------
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('.stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateValue(el, 0, target, 1800);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      obj.innerHTML = Math.floor(easedProgress * (end - start) + start).toLocaleString('de-DE');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end.toLocaleString('de-DE');
      }
    };
    window.requestAnimationFrame(step);
  }
}

// --------------------------------------------------------------------------
// 3. SUBTLE HERO MOUSE INTERACTION
// --------------------------------------------------------------------------
function initHeroParallax() {
  // Disabled for minimal design aesthetic
}

// --------------------------------------------------------------------------
// 4. SCHEMATIC ROTATING ACTIVE NODE
// --------------------------------------------------------------------------
function initSchematicPulse() {
  const nodes = document.querySelectorAll('.schematic__node');
  if (nodes.length < 2) return;

  let activeIndex = 0;
  setInterval(() => {
    nodes.forEach((n, idx) => {
      n.classList.toggle('schematic__node--active', idx === activeIndex);
    });
    activeIndex = (activeIndex + 1) % nodes.length;
  }, 2400);
}


// ==========================================
// HERO CANVAS ANIMATION (CONVERGING PARTICLES)
// ==========================================
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const gridSize = 100;
  const pulses = [];
  const pulseCount = 15; // Number of moving lines
  
  // Create pulses
  for(let i=0; i<pulseCount; i++) {
    pulses.push(createPulse());
  }

  function createPulse() {
    // 0: horizontal moving right, 1: horizontal moving left
    // 2: vertical moving down, 3: vertical moving up
    const direction = Math.floor(Math.random() * 4);
    const isHorizontal = direction < 2;
    
    // Snap to grid lines
    let x = 0, y = 0;
    if (isHorizontal) {
      y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
      x = direction === 0 ? -200 : width + 200;
    } else {
      x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
      y = direction === 2 ? -200 : height + 200;
    }

    return {
      x, y,
      direction,
      length: Math.random() * 200 + 100,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }

  function drawGrid() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    
    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    drawGrid();

    // Draw pulses
    pulses.forEach(p => {
      // Create gradient for pulse
      let x2 = p.x, y2 = p.y;
      if (p.direction === 0) x2 = p.x - p.length;
      if (p.direction === 1) x2 = p.x + p.length;
      if (p.direction === 2) y2 = p.y - p.length;
      if (p.direction === 3) y2 = p.y + p.length;

      const gradient = ctx.createLinearGradient(p.x, p.y, x2, y2);
      gradient.addColorStop(0, `rgba(242, 110, 101, ${p.opacity})`);
      gradient.addColorStop(1, 'rgba(242, 110, 101, 0)');

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Move pulse
      if (p.direction === 0) p.x += p.speed;
      if (p.direction === 1) p.x -= p.speed;
      if (p.direction === 2) p.y += p.speed;
      if (p.direction === 3) p.y -= p.speed;

      // Reset if out of bounds
      if ((p.direction === 0 && p.x - p.length > width) ||
          (p.direction === 1 && p.x + p.length < 0) ||
          (p.direction === 2 && p.y - p.length > height) ||
          (p.direction === 3 && p.y + p.length < 0)) {
        Object.assign(p, createPulse());
      }
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

// Ensure it initializes
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
});
