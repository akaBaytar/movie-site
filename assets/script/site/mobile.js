export function mobileMenu() {
  const toggleButton = document.querySelector("#mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-navigation");

  toggleButton.addEventListener("click", () => {
    if (mobileMenu.style.left === "-100%") {
      mobileMenu.style.left = "-0.9rem";
      toggleButton.checked = true;
    } else {
      mobileMenu.style.left = "-100%";
      toggleButton.checked = false;
    }
  });
}
