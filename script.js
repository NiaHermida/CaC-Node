document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".Collapsible");
  collapsibles.forEach(function (collapsible) {
    const button = collapsible.querySelector(".IconButton");
    const content = collapsible.querySelector(".CardGroup");

    content.classList.add("hidden");
    button.classList.add("hidden");
    toggleIcon(button);

    button.addEventListener("click", function () {
      content.classList.toggle("hidden");
      button.classList.toggle("hidden");
      toggleIcon(button);
    });
  });

  function toggleIcon(button) {
    const collapsedIcon = button.querySelector(".CollapsedIcon");
    const expandedIcon = button.querySelector(".ExpandedIcon");

    collapsedIcon.classList.toggle(
      "hidden",
      !button.classList.contains("hidden")
    );
    expandedIcon.classList.toggle(
      "hidden",
      button.classList.contains("hidden")
    );
  }
});
