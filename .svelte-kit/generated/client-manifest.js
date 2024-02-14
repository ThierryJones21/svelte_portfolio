export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"projects": [[0, 3], [1]]
};