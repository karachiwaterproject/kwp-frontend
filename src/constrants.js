export const HOST = "http://127.0.0.1:8000";
export const DEFAULT_NODE = "test-node";
export const READINGS_PER_PAGE = 20;
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
  {
    page: "Logout",
    url: "/logout",
  },
];

console.log(process.env.HOST);
