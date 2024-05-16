document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });

    // Close the navbar when clicking outside of it
    document.addEventListener("click", function (event) {
      if (
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navbar.classList.remove("active");
      }
    });
  });