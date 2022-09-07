export const HOST = "https://cloud.karachiwaterproject.com";
export const DEFAULT_NODE = "drivers-area";
export const READINGS_PER_PAGE = 20;
// export const MAPS_KEY = "AIzaSyDL3JhynfdzGBx9WKTx-mnd-LtOlSCFRyE";
export const MAPS_KEY = "AIzaSyDL3JhynfdzGBx9WKTx-mnd-LtOlSCFRyE";
export const GET_READINGS_AFTER = 10000;
export const CHANGE_NAV_ON_SCROLL = 200;
export const dashboardLinks = [
  {
    page: "Dashboard",
    url: "/dashboard",
  },
  {
    page: "Node Cards",
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
    name: "Development of a low-cost smart device network for domestic consumers",
    image: require("assets/img/project1.webp").default,
    url: "/projects/develop-low-cost/",
  },
  {
    name: "Towards a sustainable and equitable water pricing strategy for Karachi",
    image: require("assets/img/project2.webp").default,
    url: "/projects/toward-sustainable/",
  },
  {
    name: "Water security through a political-ecological lens: A case study of Lyari Township",
    image: require("assets/img/project3.webp").default,
    url: "/projects/water-justice/",
  },
  {
    name: "Quantifying household water use and its determinants in low-income water scarce households.",
    image: require("assets/img/project5.webp").default,
    url: "/projects/water-demand/",
  },
  // {
  //   name: "",
  //   // image: require("assets/img/project5.webp").default,
  //   url: "/projects/water-demand/",
  // },
];

export const research = [
  {
    name: "Study highlights severe inequities in water access in Karachi",
    description:
      "KARACHI: Lyari’s water problem, and those of similar settlements across Karachi, cannot be resolved by only augmenting water supply as often stated in public discourse and water utility plans. Rather, institutional structures and policies are needed to ensure equitable access to existing water supply system, says a study recently published in an international journal.",
    image: require("assets/img/research/research1.webp").default,
    url: "https://www.dawn.com/news/1703958",
  },
  {
    name: "KWP is pleased to announce that our first research paper was published in the prestigious Journal of Hydrology.",
    description:
      "We demonstrate the effect of socioeconomic and political inequalities in determining a community’s level of water security, using a mixed-methods approach. We conduct a total of 465 household surveys supplemented with participant observation and stakeholder interviews.",
    image: require("assets/img/research/paper.webp").default,
    url: "https://doi.org/10.1016/j.ejrh.2022.101140",
  },
  {
    name: "48th Annual Conference of the Industrial Electronics Society-IECON.",
    description:
      "KWP's work on the design and development of Smart Devices is accepted in the 48th Annual Conference of the Industrial Electronics Society-IECON. Paper title: 'Design and Implementation of Smart Flowmeter for Urban Water Metering'. Authors: Junaid Ahmed Memon, Abdul Rehman, Ahsan Ali, Sarwan Shah, Hassaan F. Khan",
    image: require("assets/img/research/junaid-paper.webp").default,
    url: "https://doi.org/10.1016/j.ejrh.2022.101140",
  },
  {
    name: "Karachi Water Project hosted its first event of the fall semester 2022.",
    description:
      "Several HU student researchers talked about the extensive research work they carried out to study the water challenges in Karachi. Our team includes students from social development and policy (SDP), electrical engineering (EE), computer engineering (CE), and communication and design (CND). It is a showcase of how interdisciplinary research work is carried out to address the water-related issues faced by residents of Karachi.",
    image: require("assets/img/research/panel-talk-2.webp").default,
  },
  {
    name: "Solving out water crises through technology: challenges and opportinities.",
    description:
      "On March 31, 2022 KWP hosted a DSSE Public Lecture Series (PLS) event titled Solving our water crises through technology: Challenges and Opportunities. The event featured two invited speakers, Dr. Abubakr Mohammad (LUMS) and Junaid Memon (Habib University) who spoke about their respective research work focusing on designing technology-based solutions to help improve water management in farms and in households across Pakistan.",
    image: require("assets/img/research/dr.webp").default,
    url: "https://www.instagram.com/p/Cf8wiXLjoVe/",
  },
  {
    name: "A panel talk hosted by students in Habib University working on one of the studies by the KWP:",
    description:
      "Water insecurity and social justice. The study focuses on Lyari as a multi-ethnic area and how water plays a significant role in the lives of its residents. Students from Habib University who are working on the study presents their perspective and learnings. Students and faculty from different schools attend the talk and gained knowledge about the study and its findings.",
    image: require("assets/img/research/panel-talk-liyari.webp").default,
  },
  {
    name: "Linking Water (In)Security to Social Justice",
    description:
      "On March 17, 2022 KWP hosted a panel discussion featuring invited speakers discussing access to water from a social justice perspective. The invited speakers included Ms. Mahim Maher, Dr. Noman Ahmed, and Farhan Anwar. The panel discussion was moderated by Dr. Hassaan F. Khan. ",
    image: require("assets/img/research/mahim-nouman.webp").default,
  },
];

// console.log(process.env.HOST);

export const triggerLoader = () => {};
