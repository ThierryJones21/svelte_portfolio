import { c as create_ssr_component, a as add_attribute, e as escape, b as each } from "./index-f3ac1acc.js";
import "./Icon-60d085f3.js";
const ProjectViewer_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1h0eq2q.svelte-1h0eq2q{margin:1rem 0;line-height:1.5}.links.svelte-1h0eq2q.svelte-1h0eq2q{margin-top:30px;margin-left:-50px;list-style:none;justify-content:flex-start;display:flex}.links.svelte-1h0eq2q li.svelte-1h0eq2q:not(:first-of-type){align-items:center;transition:var(--transition)}.links.svelte-1h0eq2q li.svelte-1h0eq2q:hover:not(:first-of-type){align-items:center;transform:scale(1.2)}.icon.svelte-1h0eq2q.svelte-1h0eq2q{cursor:pointer;background:none;border-style:solid;border-width:2px;font-weight:500;letter-spacing:0.07rem;padding:10px 20px;border-radius:var(--border-radius);color:var(--color-primary);border-color:var(--color-primary);transition:var(--transition);margin-bottom:1rem;text-decoration:none;color:var(--color-primary);margin:8px}.wrapper.svelte-1h0eq2q.svelte-1h0eq2q{max-width:fit-content;display:flex;justify-content:space-between;margin:0 auto 40px auto;min-height:300px;height:fit-content;text-decoration:none;color:var(--color-text);flex-direction:column}.wrapper.svelte-1h0eq2q .preview-image.svelte-1h0eq2q{background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;min-height:300px;max-height:30vh;margin:0;border-radius:2%}.wrapper.svelte-1h0eq2q .info.svelte-1h0eq2q{margin:10px 0;width:100%}",
  map: null
};
const ProjectViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1h0eq2q"}"><div class="${"preview-image svelte-1h0eq2q"}"${add_attribute("style", `background-image: url(${project.image})`, 0)}></div>
		<div class="${"info svelte-1h0eq2q"}"><h1>${escape(project.title)} - ${escape(project.date)}</h1>
			<p class="${"svelte-1h0eq2q"}">${escape(project.description)}</p>
			
			<ul class="${"links svelte-1h0eq2q"}"><li title="${"links"}" class="${"svelte-1h0eq2q"}"></li>
				${each(project.links, ([name, link], i) => {
    return `<li title="${"open link to project"}" class="${"svelte-1h0eq2q"}"><a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"icon svelte-1h0eq2q"}">
							${escape(name)}</a>
					</li>`;
  })}</ul></div>
</div>`;
});
export {
  ProjectViewer as P
};
