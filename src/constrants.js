export const HOST = "https://cloud.karachiwaterproject.com";
export const DEFAULT_NODE = "drivers-area";
export const READINGS_PER_PAGE = 20;
export const MAPS_KEY = "AIzaSyDL3JhynfdzGBx9WKTx-mnd-LtOlSCFRyE";
export const GET_READINGS_AFTER = 10000;
export const CHANGE_NAV_ON_SCROLL = 200;
export const dashboardLinks = [
  {
    page: "Dashboard",
    url: "/dashboard",
  },
  {
    page: "Nodes",
    url: "/nodes",
  },
  {
    page: "Readings",
    url: "/readings",
  },
  // {
  //   page: "Logout",
  //   url: "/logout",
  // },
  // {
  //   page: "HomeNode",
  //   url: "/homenode",
  // },
];

export const projects = [
  {
    name: "Development of a low-cost smart flowmeter network for domestic consumers",
    image: require("assets/img/project1.jpg").default,
    url: "/projects/develop-low-cost/",
  },
  {
    name: "Towards a sustainable and equitable water pricing strategy for Karachi",
    image: require("assets/img/project2.jpg").default,
    url: "/projects/toward-sustainable/",
  },
  {
    name: "Water security through a political-ecological lens: A case study of Lyari Township",
    image: require("assets/img/project3.jpg").default,
    url: "/projects/water-security/",
  },
];
// console.log(process.env.HOST);
