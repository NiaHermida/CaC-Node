document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".Collapsible");
  collapsibles.forEach(function (collapsible) {
    const button = collapsible.querySelector(".IconButton");
    const content = collapsible.querySelector(".CardGroup");

    toggleIcon(button, content.classList.contains("hidden"));

    button.addEventListener("click", function () {
      content.classList.toggle("hidden");
      toggleIcon(button, content.classList.contains("hidden"));
    });
  });

  function toggleIcon(button, isContentHidden) {
    const collapsedIcon = button.querySelector(".CollapsedIcon");
    const expandedIcon = button.querySelector(".ExpandedIcon");

    collapsedIcon.classList.toggle("hidden", !isContentHidden);
    expandedIcon.classList.toggle("hidden", isContentHidden);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".Navbar__Items__ToggleButton");
  const overlay = document.querySelector(".Overlay");
  const overlayMenu = document.querySelector(".OverlayMenu");

  menuToggle.addEventListener("click", function(event) {
    event.stopPropagation(); 
    overlay.classList.toggle("open");
  });

  overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
      overlay.classList.remove("open");
    }
  });

  overlayMenu.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  const overlayLinks = overlayMenu.querySelectorAll("a");
  overlayLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.stopPropagation(); 
    });
  });

  document.addEventListener("click", function() {
    overlay.classList.remove("open");
  });
});