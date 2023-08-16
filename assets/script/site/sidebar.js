export function sidebar() {
  const sidebar = document.querySelector(".sidebar-wrapper");
  const upButton = document.querySelector(".bi-chevron-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      sidebar.style.left = 0;
    } else {
      sidebar.style.left = "-100%";
    }
  });

  upButton.addEventListener("click", () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox etc.
    document.documentElement.style.scrollBehavior = "auto";
  });
}
