import type NavLink from "$types/NavLink";
import type Experience from "$types/Experience";
import type Project from "$types/Project";
import type Movies from "$types/Movies";
import socials from "./socials";

export const metadata = {
	title: "Thierry Jones",
	description: "Engineer passionated about development and curious about digital circuits",
	baseUrl: "https://thierryjones.ca",
};

export const navLinks: NavLink[] = [
	{ href: "/", text: "Home" },
	{ href: "/projects", text: "Projects"}
];

export const projects: Project[] = [
	{
		title: 'Stock Prediction LSTM Model',
		description: `
		This project entails the development of a stock price prediction system utilizing LSTM neural networks. Historical stock data is sourced from the Financial Modeling Prep API and preprocessed for training. Leveraging TensorFlow, the LSTM model is constructed with meticulous tuning of architecture and hyperparameters. Extensive training, validation, and testing ensure the model's accuracy and reliability. Upon achieving satisfactory performance, the trained model is saved for future utilization. The system effectively predicts future stock prices, with visualizations comparing actual versus predicted prices offering valuable insights. This project demonstrates proficiency in data processing, deep learning, and financial forecasting.`,
		date: '2024',
		technologies: ['Google Colab','Python', 'Javascript', 'TensorFlow'],
		image: '/images/projects/tfjs-stock-prediction.png',
		links: [
			['tfjs-webapp','https://ml-stock-prediciton.vercel.app/'],
			['google-colab', 'https://colab.research.google.com/drive/1ZxWSM0klQ5dlHQtwspzn_skuMLrjyh0y#scrollTo=ZMA0Vg01SmXT']
		]
	},
	{
		title: 'Capstone Final Project',
		description: `A cutting-edge Python/JS application integrating machine learning via TensorFlow and computer vision with OpenCV for joint tracking and form correction. This innovative solution harnesses Python's versatility alongside JavaScript's interactivity to revolutionize joint tracking algorithms. With a focus on enhancing user experience and efficiency, it marks a significant milestone in AI-driven applications. Access the detailed report for insights into the project's development and functionality.`,
		date: '2023',
		technologies: ['Python', 'Javascript', 'TensorFlow', 'OpenCV'],
		image: '/images/projects/Capstone.jpg',
		links: [
			['capstone', '/images/projects/ELEC490_Final_Report_Group_52.pdf']
		]
	  },
	  {
		title: 'Tetris React JS Game',
		description: `Immerse yourself in this captivating JavaScript-based game, powered by React. Dive into the nostalgia of Tetris with modern technology, showcasing the seamless integration of JavaScript and React. Experience addictive gameplay and compete with friends for the top spot on the leaderboard. Try it now for a dose of retro fun and leaderboard glory!`,
		date: '2023',
		technologies: [ 'Javascript', 'React'],
		image: '/images/projects/Tetris.jpg',
		links: [
			['react-tetris', 'https://react-tetris-app.vercel.app/']
		]
	  },
	  {
		title: 'StockPulse: Your Dynamic Financial Dashboard',
		description: `StockPulse is your ultimate financial companion, offering dynamic and immersive stock data visualization. Seamlessly explore real-time and historical market trends with interactive candlestick charts. Choose from a curated list of top stock symbols or enter custom ones, tailoring your analysis to your needs. With intuitive controls and customizable options, StockPulse empowers you to track price movements, make informed decisions, and unlock investment opportunities with ease. Elevate your financial journey with StockPulse, your dynamic ally in the world of finance.`,
		date: '2024',
		technologies: [ 'Javascript', 'React', 'Vite', 'FMP API'],
		image: '/images/projects/stock-project.png',
		links: 
			[
				['stock-pulse', 'https://stock-tracker-iota.vercel.app/'], 
				['fmp-api', 'https://site.financialmodelingprep.com/developer/docs']
			]
	  },
	  {
		title: 'Dynamic VPN Solution: Securing Connections Anywhere',
		description: 'Developed and maintained an encrypted VPN solution as part of the Ericsson Response humanitarian emergency relief program. Designed to ensure secure connections for employees and volunteers in any situation or location worldwide. Implemented advanced encryption protocols to safeguard data transmission.',
		date: '2023',
		technologies: ['VPN', 'Encryption', 'Network Security'],
		image: '/images/projects/ericsson-response.jpg',
		links: [
			['ericsson-response', 'https://www.ericsson.com/en/about-us/sustainability-and-corporate-responsibility/digital-inclusion/humanitarian-response']
		]
	},
	{
		title: 'QEC Programming Challenges Director',
		description: 'Directed the creation of tiered difficulty coding challenges for the Queen\'s Engineering Competition (QEC), catering to over 100 participants across various engineering disciplines. Delivered challenges through Slack and QEC\'s GitHub repository. ',
		date: '2022',
		technologies: [],
		image: '/images/projects/qec-programming.png',
		links: [
			['qec-programming','https://github.com/ThierryJones21/QEC_Programming']
		]
	}
  
];

export const experience: Experience[] = [
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
		endDate: "2023",
		points: [
			"Created flows to automate dashboards and tools for Product Support engineers and managers.",
			"Designed, built, and maintained a website in collaboration with the Ericsson Response humanitarian emergency relief program.",
			"Encrypted VPN data to help keep employee and volunteer connections secure in any situation or part of the world.",
			"Served as team leader for new co-ops hired in September 2022."
		]
	},
	{
		title: "Programming Challenge Director",
		company: { name: "Queen’s Engineering Competition", url: "https://quengcomp.ca/" },
		startDate: "2020",
		points: [
			"Directed the creation of tiered difficulty coding challenges, delivering them to an estimated 100+ participants through Slack and QEC’s GitHub repository (ThierryJones/QEC_Programming).",
			"Collaborated with other challenge directors to ensure fair scoring criteria, representation of 11 engineering disciplines, and smooth execution of the 2-day event."
		]
	},
	{
		title: "Junior Software Developer",
		company: { name: "Calatlyst.Earth", url: "https://catalyst.earth/" },
		startDate: "2019",
		points: [
			"Developed customizable UI templates for the marketing team to facilitate easy map creation and customization for clients.",
			"Created a dashboard with the marketing team that queried client data through various APIs (Google, YouTube, Pardot) and displayed easy-to-use statistics to generate potential leads.",
			"Adhered to agile methodology, interfaced with 100+ clients and users, and implemented feedback to maximize customer satisfaction."
		]
	}
	
	
];

export const technologies = [
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
	"Passion:)",
];

export const movies: Movies[] = [
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

	

]