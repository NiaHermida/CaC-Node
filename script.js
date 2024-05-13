document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired!");
    const collapsibles = document.querySelectorAll(".Collapsible");
    console.log(collapsibles); // Check if collapsibles are selected
    collapsibles.forEach(function(collapsible) {
      const button = collapsible.querySelector(".CollapseButton");
      const content = collapsible.querySelector(".CardGroup");
      console.log(button, content); // Check if button and content are selected
      button.addEventListener("click", function() {
        content.classList.toggle("active");
      });
    });
  });