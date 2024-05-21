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
