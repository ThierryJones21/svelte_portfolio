export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","Thierry-Jones-Resume.pdf","favicon.svg","fonts/Apfel/ApfelGrotezk-Regular.woff2","fonts/Arvo/Arvo-Regular.ttf","icons/icons.svg","images/.DS_Store","images/logo.png","images/logo.svg","images/movies/apocalypto.jpg","images/movies/dune.jpg","images/movies/heat.jpg","images/movies/iron-claw.jpg","images/movies/memento.jpg","images/movies/prisonners.jpg","images/movies/talk-to-me.jpg","images/movies/we-own-the-night.jpg","images/prof-pic.png","images/projects/.DS_Store","images/projects/Capstone.jpg","images/projects/ELEC490_Final_Report_Group_52.pdf","images/projects/Tetris.jpg","images/projects/ericsson-response.jpg","images/projects/qec-programming.png","images/projects/stock-prediction.png","images/projects/stock-project.png","images/projects/tfjs-stock-prediction.png","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".woff2":"font/woff2",".ttf":"font/ttf",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"immutable/start-ea9e7f42.js","imports":["immutable/start-ea9e7f42.js","immutable/chunks/index-b814adb8.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/sitemap.xml.ts.js')
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/send-email",
				pattern: /^\/api\/send-email\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/send-email.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/projects.json",
				pattern: /^\/api\/projects\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/projects/index.json.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
