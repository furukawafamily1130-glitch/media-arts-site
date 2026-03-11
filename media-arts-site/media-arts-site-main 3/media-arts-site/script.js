/*
  Shared JavaScript for portfolio pages.
  Handles relativity animation timeline on the home page.
*/

(function () {
  const scene = document.getElementById("relativityScene");
  if (!scene) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particlesContainer = document.getElementById("particles");
  const fragmentsContainer = document.getElementById("clockFragments");

  // Reduced motion: present a static symbolic frame.
  if (prefersReducedMotion) {
    scene.classList.add("reduce-motion", "stage-reveal");
    return;
  }

  // Build particles that move on curved paths during relativity stages.
  function createParticles(count) {
    if (!particlesContainer) return;
    particlesContainer.innerHTML = "";

    for (let i = 0; i < count; i += 1) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.left = `${20 + Math.random() * 60}%`;
      p.style.top = `${36 + Math.random() * 44}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.animationDuration = `${7 + Math.random() * 8}s`;
      p.style.setProperty("--px", `${-60 + Math.random() * 120}px`);
      p.style.setProperty("--py", `${-130 - Math.random() * 120}px`);
      particlesContainer.appendChild(p);
    }
  }

  // Build dissolving fragments from the clock during collapse/transition.
  function createFragments(count) {
    if (!fragmentsContainer) return;
    fragmentsContainer.innerHTML = "";

    for (let i = 0; i < count; i += 1) {
      const f = document.createElement("span");
      f.className = "clock-fragment";
      f.style.left = `${36 + Math.random() * 28}%`;
      f.style.top = `${42 + Math.random() * 26}%`;
      f.style.animationDelay = `${Math.random() * 800}ms`;
      f.style.setProperty("--fx", `${-100 + Math.random() * 200}px`);
      f.style.setProperty("--fy", `${-40 + Math.random() * 140}px`);
      f.style.setProperty("--fr", `${-90 + Math.random() * 180}deg`);
      fragmentsContainer.appendChild(f);
    }
  }

  // Stage timeline:
  // 1) Realistic clock state
  // 2) Early physical distortion (soft bend, subtle drift)
  // 3) Twisting/breakdown into fluid fragments
  // 4) Transition into relativity field (grid, gravity well, orbits, particles)
  // 5) Final reveal quote
  scene.classList.add("stage-surreal");

  window.setTimeout(() => {
    createFragments(20);
    scene.classList.remove("stage-surreal");
    scene.classList.add("stage-collapse");
  }, 3200);

  window.setTimeout(() => {
    createFragments(26);
    scene.classList.remove("stage-collapse");
    scene.classList.add("stage-transition");
  }, 7000);

  window.setTimeout(() => {
    createParticles(44);
    scene.classList.remove("stage-transition");
    scene.classList.add("stage-relativity");
  }, 9800);

  window.setTimeout(() => {
    scene.classList.add("stage-reveal");
  }, 12600);
})();
