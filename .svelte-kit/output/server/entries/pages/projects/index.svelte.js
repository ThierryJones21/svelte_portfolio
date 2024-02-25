import { c as create_ssr_component, a as add_attribute, v as validate_component, b as each } from "../../../immutable/chunks/index-f3ac1acc.js";
import { I as Icon } from "../../../immutable/chunks/Icon-60d085f3.js";
import { P as ProjectViewer } from "../../../immutable/chunks/ProjectViewer-0177c42e.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1tgeks9{font-size:4rem}input.svelte-1tgeks9{width:100%;padding:8px;border:1px solid gray;border-radius:var(--border-radius);margin:40px 0;background-color:var(--color-bg)}input.svelte-1tgeks9::selection,input.svelte-1tgeks9:active{border-color:var(--color-primary)}.search-icon.svelte-1tgeks9{position:absolute;transform:translate(-30px, 48px)}ul.svelte-1tgeks9{list-style:none;margin:0;padding:0}li.svelte-1tgeks9{transition:var(--transition)}",
  map: null
};
const prerender = true;
const load = async ({ fetch }) => {
  const projectsResponse = await fetch("/api/projects.json");
  const projects = await projectsResponse.json();
  return { props: { projects } };
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProjects;
  let { projects } = $$props;
  let searchQuery = "";
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  filteredProjects = projects;
  return `<h1 class="${"svelte-1tgeks9"}">Projects</h1>
<section class="${"section"}"><label for="${"search"}"><input id="${"search"}" placeholder="${"Search by Title"}" type="${"text"}" class="${"svelte-1tgeks9"}"${add_attribute("value", searchQuery, 0)}>
		<span class="${"search-icon svelte-1tgeks9"}">${validate_component(Icon, "Icon").$$render($$result, { name: "search" }, {}, {})}</span></label>

	<ul class="${"svelte-1tgeks9"}">${filteredProjects.length ? `${each(filteredProjects, (project) => {
    return `<li class="${"svelte-1tgeks9"}">${validate_component(ProjectViewer, "ProjectViewer").$$render($$result, { project }, {}, {})}
				</li>`;
  })}` : `<p>No projects here...</p>`}</ul>
</section>`;
});
export {
  Projects as default,
  load,
  prerender
};
