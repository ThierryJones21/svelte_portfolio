const metadata = {
  title: "Thierry Jones",
  description: "Engineer passionated about development and curious about digital circuits",
  baseUrl: "https://thierryjones.ca"
};
const navLinks = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" }
];
const projects = [
  {
    title: "Checkmate: Reinventing Chess for Modern Players",
    description: "Led a team in developing a cutting-edge chess application, integrating advanced features for an enhanced user experience. Employed C++ and Qt Creator Studio to craft the application, focusing on engineering design principles like SCAMPER, iterative process cycles, and agile methodologies. Personally spearheaded the UI design and devised the algorithm ensuring the accurate functioning of standard chess gameplay.",
    date: "2020",
    technologies: ["C++", "Qt Creator Studio"],
    image: "images/projects/checkmate.png",
    links: [
      "https://example.com/checkmate",
      "https://github.com/yourusername/checkmate"
    ]
  }
];
const experience = [
  {
    title: "End User Support Specialist",
    company: { name: "Proxi.id", url: "https://www.proxi.id/" },
    startDate: "2023",
    endDate: "Present",
    points: [
      "Provided technical support and assistance to customers seeking academic verification for software licenses from companies such as Parallels, Avid, Qlik, and SideFX.",
      "Drove problem-solving initiatives, mastered the codebase, and gained insights into startup operations within the development team."
    ]
  },
  {
    title: "Automation Developer",
    company: { name: "Ericsson", url: "https://www.ericsson.com/" },
    startDate: "2021",
    endDate: "2023 (Part Time)",
    points: [
      "Created flows to automate dashboards and tools for Product Support engineers and managers.",
      "Designed, built, and maintained a website in collaboration with the Ericsson Response humanitarian emergency relief program.",
      "Encrypted VPN data to help keep employee and volunteer connections secure in any situation or part of the world.",
      "Served as team leader for new co-ops hired in September 2022."
    ]
  },
  {
    title: "Programming Challenge Director",
    company: { name: "Queen\u2019s Engineering Competition", url: "https://quengcomp.ca/" },
    startDate: "2020",
    points: [
      "Directed the creation of tiered difficulty coding challenges, delivering them to an estimated 100+ participants through Slack and QEC\u2019s GitHub repository (ThierryJones/QEC_Programming).",
      "Collaborated with other challenge directors to ensure fair scoring criteria, representation of 11 engineering disciplines, and smooth execution of the 2-day event."
    ]
  },
  {
    title: "Junior Software Developer",
    company: { name: "Calatlyst.Earth (formerly PCI Geomatics)", url: "https://catalyst.earth/" },
    startDate: "2019",
    endDate: "2019",
    points: [
      "Developed customizable UI templates for the marketing team to facilitate easy map creation and customization for clients.",
      "Created a dashboard with the marketing team that queried client data through various APIs (Google, YouTube, Pardot) and displayed easy-to-use statistics to generate potential leads.",
      "Adhered to agile methodology, interfaced with 100+ clients and users, and implemented feedback to maximize customer satisfaction."
    ]
  }
];
const technologies = [
  "Python",
  "C++",
  "Docker",
  "React",
  "NextJS",
  "Javascript",
  "Svelte",
  "VHDL",
  "AWS",
  "SQL",
  "Tailwind",
  "Power Automate",
  "Passion:)"
];
const movies = [
  {
    title: "Prisonners",
    url: "/images/movies/prisonners.jpg",
    href: "https://letterboxd.com/film/prisoners/"
  },
  {
    title: "The Iron Claw",
    url: "/images/movies/iron-claw.jpg",
    href: "https://letterboxd.com/film/the-iron-claw-2023/"
  },
  {
    title: "Dune",
    url: "/images/movies/dune.jpg",
    href: "https://letterboxd.com/film/dune-2021/"
  },
  {
    title: "Talk to Me",
    url: "/images/movies/talk-to-me.jpg",
    href: "https://letterboxd.com/film/talk-to-me-2022/"
  },
  {
    title: "We Own the Night",
    url: "/images/movies/we-own-the-night.jpg",
    href: "https://letterboxd.com/film/we-own-the-night/"
  },
  {
    title: "Apocalypto",
    url: "/images/movies/apocalypto.jpg",
    href: "	https://letterboxd.com/film/apocalypto/"
  },
  {
    title: "Memento",
    url: "/images/movies/memento.jpg",
    href: "https://letterboxd.com/film/memento/"
  },
  {
    title: "Heat",
    url: "/images/movies/heat.jpg",
    href: "	https://letterboxd.com/film/heat-1995/"
  }
];
export {
  movies as a,
  experience as e,
  metadata as m,
  navLinks as n,
  projects as p,
  technologies as t
};