export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","Thierry-Jones-Resume.pdf","favicon.svg","fonts/Apfel/ApfelGrotezk-Regular.woff2","fonts/Inter/Inter-Black.ttf","fonts/Inter/Inter-Bold.ttf","fonts/Inter/Inter-ExtraBold.ttf","fonts/Inter/Inter-ExtraLight.ttf","fonts/Inter/Inter-Light.ttf","fonts/Inter/Inter-Medium.ttf","fonts/Inter/Inter-Regular.ttf","fonts/Inter/Inter-SemiBold.ttf","fonts/Inter/Inter-Thin.ttf","fonts/Sato/Satoshi-Variable.woff2","fonts/SpaceMono/SpaceMono-Bold.ttf","fonts/SpaceMono/SpaceMono-BoldItalic.ttf","fonts/SpaceMono/SpaceMono-Italic.ttf","fonts/SpaceMono/SpaceMono-Regular.ttf","icons/icons.svg","images/.DS_Store","images/logo.png","images/logo.svg","images/movies/apocalypto.jpg","images/movies/dune.jpg","images/movies/heat.jpg","images/movies/iron-claw.jpg","images/movies/memento.jpg","images/movies/prisonners.jpg","images/movies/talk-to-me.jpg","images/movies/we-own-the-night.jpg","images/prof-pic.png","images/projects/.DS_Store","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".woff2":"font/woff2",".ttf":"font/ttf",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"immutable/start-a43e12cf.js","imports":["immutable/start-a43e12cf.js","immutable/chunks/index-b122bb94.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
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
