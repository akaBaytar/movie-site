// dom manipulation
import { mobileMenu } from "./site/mobile.js";
import { sidebar } from "./site/sidebar.js";

//database
import { setData } from "./locale/setData.js";

mobileMenu();
sidebar();

setData();

// spinner
const spinner = document.querySelector(".spinner-wrapper");
const sections = document.querySelectorAll(
  ".trend-wrapper, .now-showing-wrapper, .in-the-mood-wrapper, .leaving-soon-wrapper, .cultures-wrapper"
);

sections.forEach((section) => (section.style.display = "none"));

setTimeout(() => {
  sections.forEach((section) => (section.style.display = "block"));
  spinner.remove();
}, 1000);
