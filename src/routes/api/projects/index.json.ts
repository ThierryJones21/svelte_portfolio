import { projects } from "$lib/config";
import type Project from "$types/Project";

export let items: [string, string, string, string, string[], string[][], boolean][] = projects.map(project => [
    project.title,
    project.description,
    project.date,
    project.image,
    project.technologies,
    project.links,
	project.highlight
]);

export const GET = () => {
	if (items.length === 0) {
		return {
			status: 404,
			body: { message: "Sorry, there are no projects yet" },
		};
	}
	const projectContent = items.map((item) => {
		const content: Project = {
			title: item[0],
			description: item[1],
			date: item[2],
			image: item[3],
			technologies: item[4],
			links: item[5],
			highlight: item[6]
		};
		return content;
	});
	
	if (items.length > 2) {
		const sortedProjectFrontmatters = projectContent.sort(
			(a: Project, b: Project) => {
				return new Date(b.date).valueOf() - new Date(a.date).valueOf();
			},
		);
		return {
			body: sortedProjectFrontmatters,
		};
	}
	else {
		return {
			body: projectContent,
		};
	}


};