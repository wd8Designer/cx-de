/**
 * Cypherox Component Loader (Matching www/cx-uk-main/cx-uk-main includes.js)
 * Loads header.html and footer.html dynamically and dispatches 'includesLoaded'.
 */

async function loadInclude(selector, file) {
  const element = document.querySelector(selector);
  if (!element) return false;

  const cleanName = file.replace(/^\//, '');
  const candidates = [
    file,
    cleanName
  ];

  const cacheBuster = new Date().getTime();

  for (const candidate of candidates) {
    try {
      const response = await fetch(`${candidate}?v=${cacheBuster}`);
      if (response.ok) {
        element.innerHTML = await response.text();
        return true;
      }
    } catch (err) {
      // try next candidate
    }
  }

  console.error(`Failed to load include for ${selector} (${file})`);
  return false;
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadInclude("#site-header", "/header.html"),
    loadInclude("#site-footer", "/footer.html")
  ]);

  // Dispatch custom events for both www scripts and local components
  document.dispatchEvent(new Event("includesLoaded"));
  document.dispatchEvent(new CustomEvent("componentsLoaded"));
});
