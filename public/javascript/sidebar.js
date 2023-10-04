
 const shrink_btn = document.querySelector(".shrink-btn");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 5) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();

  // Trigger the tooltip hover effect for the clicked menu
  tooltip_elements[activeIndex].dispatchEvent(new Event("mouseover"));
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));


function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

function showLoadingOverlay() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.style.display = 'flex';
}

function hideLoadingOverlay() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.style.display = 'none';
}

function changeLink() {
  showLoadingOverlay(); // Show loading overlay when a menu item is clicked
  
  activeIndex = parseInt(this.dataset.active);
  setActiveMenuItem(activeIndex);
  
  setTimeout(() => {
    hideLoadingOverlay(); // Hide loading overlay after a short delay (simulate loading)
  }, 500); // Adjust the delay as needed
}
