import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-f3ac1acc.js";
import { H as Head } from "../../../immutable/chunks/Head-113edfcf.js";
import { I as Icon } from "../../../immutable/chunks/Icon-3dbad89c.js";
import "../../../immutable/chunks/config-e3f12f67.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-y6u67h{font-size:4rem}input.svelte-y6u67h{width:100%;padding:8px;border:1px solid gray;border-radius:var(--border-radius);margin:40px 0;background-color:var(--color-bg)}input.svelte-y6u67h::selection,input.svelte-y6u67h:active{border-color:var(--color-primary)}.search-icon.svelte-y6u67h{position:absolute;transform:translate(-30px, 48px)}ul.svelte-y6u67h{list-style:none;margin:0;padding:0}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Head, "Head").$$render($$result, { title: "Projects" }, {}, {})}

<h1 class="${"svelte-y6u67h"}">Projects</h1>

<label for="${"search"}"><input id="${"search"}" placeholder="${"Search by Title"}" type="${"text"}" class="${"svelte-y6u67h"}">
	<span class="${"search-icon svelte-y6u67h"}">${validate_component(Icon, "Icon").$$render($$result, { name: "search" }, {}, {})}</span></label>

<ul class="${"svelte-y6u67h"}"></ul>`;
});
export {
  Projects as default
};
