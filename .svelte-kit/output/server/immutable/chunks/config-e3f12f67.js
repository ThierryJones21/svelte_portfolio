const metadata = {
  title: "Thierry Jones",
  description: "Engineer passionated about development and curious about digital circuits",
  baseUrl: "https://thierryjones.ca"
};
const navLinks = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" }
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
export {
  experience as e,
  metadata as m,
  navLinks as n,
  technologies as t
};
