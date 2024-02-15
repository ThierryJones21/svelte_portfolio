import { c as create_ssr_component, a as add_attribute, b as each, v as validate_component, e as escape } from "../../../immutable/chunks/index-f3ac1acc.js";
import { H as Head } from "../../../immutable/chunks/Head-4a1cd017.js";
import { I as Icon } from "../../../immutable/chunks/Icon-3dbad89c.js";
import "../../../immutable/chunks/config-aa159bd5.js";
const ProjectViewer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-113i5ko.svelte-113i5ko{margin:1rem 0}.links.svelte-113i5ko.svelte-113i5ko{list-style:none;display:flex;flex-direction:row;flex-wrap:wrap;gap:4px}.links.svelte-113i5ko li.svelte-113i5ko:not(:first-of-type){margin-bottom:1rem;transition:all ease 300ms}.links.svelte-113i5ko li.svelte-113i5ko:hover:not(:first-of-type){transform:scale(1.2)}.icon.svelte-113i5ko.svelte-113i5ko{text-decoration:none;color:var(--color-primary);padding:5px;margin:8px}.wrapper.svelte-113i5ko.svelte-113i5ko{display:flex;justify-content:space-between;margin:0 auto 80px auto;min-height:300px;height:fit-content;text-decoration:none;color:var(--color-text);flex-direction:column}.wrapper.svelte-113i5ko .preview-image.svelte-113i5ko{background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;min-height:300px;max-height:30vh;margin:0}.wrapper.svelte-113i5ko .info.svelte-113i5ko{margin:50px 0;width:100%}",
  map: null
};
function getLinkType(link) {
  if (link.toLowerCase().includes("github")) {
    return "github";
  } else if (link.toLowerCase().includes("you")) {
    return "youtube";
  } else {
    return "globe";
  }
}
const ProjectViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-113i5ko"}"><div class="${"preview-image svelte-113i5ko"}"${add_attribute("style", `background-image: url(${project.image})`, 0)}></div>

	<div class="${"info svelte-113i5ko"}"><ul class="${"links svelte-113i5ko"}"><li title="${"links"}" class="${"svelte-113i5ko"}">&lt;/&gt;</li>
			${each(project.links, (link) => {
    return `<li title="${"open link to project"}" class="${"svelte-113i5ko"}"><a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"icon svelte-113i5ko"}">${validate_component(Icon, "Icon").$$render($$result, {
      name: getLinkType(link),
      width: "20px",
      height: "20px"
    }, {}, {})}</a>
				</li>`;
  })}</ul>
		<h1>${escape(project.title)}</h1>

		<p class="${"svelte-113i5ko"}">${escape(project.description)} <br><br></p>
		</div>
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-y6u67h{font-size:4rem}input.svelte-y6u67h{width:100%;padding:8px;border:1px solid gray;border-radius:var(--border-radius);margin:40px 0;background-color:var(--color-bg)}input.svelte-y6u67h::selection,input.svelte-y6u67h:active{border-color:var(--color-primary)}.search-icon.svelte-y6u67h{position:absolute;transform:translate(-30px, 48px)}ul.svelte-y6u67h{list-style:none;margin:0;padding:0}li.svelte-y6u67h{transition:var(--transition)}",
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
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  filteredProjects = projects;
  return `${validate_component(Head, "Head").$$render($$result, { title: "Projects" }, {}, {})}

<h1 class="${"svelte-y6u67h"}">Projects</h1>

<label for="${"search"}"><input id="${"search"}" placeholder="${"Search by Title"}" type="${"text"}" class="${"svelte-y6u67h"}">
	<span class="${"search-icon svelte-y6u67h"}">${validate_component(Icon, "Icon").$$render($$result, { name: "search" }, {}, {})}</span></label>

<ul class="${"svelte-y6u67h"}">${filteredProjects.length ? `${each(filteredProjects, (project) => {
    return `<li class="${"svelte-y6u67h"}">${validate_component(ProjectViewer, "ProjectViewer").$$render($$result, { project }, {}, {})}
			</li>`;
  })}` : `<p>No projects here...</p>`}
</ul>`;
});
export {
  Projects as default,
  load,
  prerender
};
