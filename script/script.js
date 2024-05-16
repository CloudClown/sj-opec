document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const navLinks = navbar.querySelectorAll("a");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !navbar.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      navbar.classList.remove("active");
    }
  });

  // Add event listener to each navbar link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});
