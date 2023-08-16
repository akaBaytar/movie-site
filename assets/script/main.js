// dom manipulation
import { mobileMenu } from "./site/mobile.js";
import { sidebar } from "./site/sidebar.js";

//database
import { setData } from "./locale/setData.js";

mobileMenu();
sidebar();

setData();
