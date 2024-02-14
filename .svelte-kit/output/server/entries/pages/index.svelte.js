import { c as create_ssr_component, o as onDestroy, b as each, a as add_attribute, e as escape, v as validate_component } from "../../immutable/chunks/index-f3ac1acc.js";
import { H as Head } from "../../immutable/chunks/Head-3476b964.js";
import { I as Icon } from "../../immutable/chunks/Icon-3dbad89c.js";
import { t as technologies, e as experience } from "../../immutable/chunks/config-e3f12f67.js";
const ItemSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "li.svelte-1b5n5x9{display:inline-block;position:absolute;color:var(--color-primary)}ul.svelte-1b5n5x9{display:inline;list-style:none}span.svelte-1b5n5x9{display:inline-block;position:absolute;right:-30px}",
  map: null
};
const ItemSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let activeIndex = 0;
  let interval;
  onDestroy(() => clearInterval(interval));
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$1);
  return `<ul class="${"svelte-1b5n5x9"}">${each(items, (item, i) => {
    return `${activeIndex === i ? `<li${add_attribute("id", i.toString(), 0)} class="${"svelte-1b5n5x9"}">${escape(item)}

                
                <span class="${"svelte-1b5n5x9"}">${validate_component(Icon, "Icon").$$render($$result, { name: item.toLowerCase() }, {}, {})}</span>
                
            </li>` : ``}`;
  })}
</ul>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-7lqj2y.svelte-7lqj2y{min-height:40vh;transition:var(--transition);margin-bottom:100px}.hero.svelte-7lqj2y.svelte-7lqj2y{min-height:calc(100vh - 104px - 104px);margin-top:100px;letter-spacing:0.1em}.hero.svelte-7lqj2y p.svelte-7lqj2y{max-width:50%}.hero.svelte-7lqj2y h1.svelte-7lqj2y{align-self:center;font-size:2.5rem;line-height:2.5rem}.hero.svelte-7lqj2y>img.svelte-7lqj2y{padding:5px;max-width:30%;border:1px var(--color-primary) solid;border-radius:50%}.hero.svelte-7lqj2y img.svelte-7lqj2y{grid-area:about-image}.hero.svelte-7lqj2y h2.svelte-7lqj2y{font-size:1.25rem;line-height:1.75rem;font-weight:400;color:rgba(var(--color-text-rgb), 0.6);font-family:var(--font-mono)}h1.section-header.svelte-7lqj2y.svelte-7lqj2y{font-size:calc(1.7vw + 1.7vh);display:flex;align-items:center;white-space:nowrap;margin-bottom:30px}h1.section-header.svelte-7lqj2y.svelte-7lqj2y::after{content:"";display:block;position:relative;margin-left:20px;width:300px;height:1px;background-color:rgba(var(--color-text-rgb), 0.5)}.about.svelte-7lqj2y.svelte-7lqj2y{display:grid;grid-template-columns:3fr 1fr;grid-template-areas:"about-content about-image";gap:50px}.about.svelte-7lqj2y>p.svelte-7lqj2y{grid-area:about-content}.about.svelte-7lqj2y>a img.svelte-7lqj2y{padding:5px;max-width:100%;border:0.5px var(--color-primary) solid;border-radius:10%}.about.svelte-7lqj2y .movie-text-wrapper.svelte-7lqj2y{font-size:1.125rem;color:var(--color-primary)}.about.svelte-7lqj2y img.svelte-7lqj2y{grid-area:about-image}.experience.svelte-7lqj2y.svelte-7lqj2y{max-width:1200px}.experience-wrapper.svelte-7lqj2y.svelte-7lqj2y{display:flex}.work-tablist.svelte-7lqj2y.svelte-7lqj2y{position:relative;--tab-height:42px}.work-tablist.svelte-7lqj2y>div.svelte-7lqj2y{position:absolute;top:0px;left:0px;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--color-primary);transform:translateY(calc(0 * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s}.work-tablist.svelte-7lqj2y>button.svelte-7lqj2y{border:none;border-radius:0;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);display:flex;-webkit-box-align:center;align-items:center;width:100%;height:var(--tab-height);padding:0px 20px 2px;border-left:2px solid rgba(var(--color-primary-rgb), 0.15);color:var(--color-primary);font-family:var(--font-mono);font-size:0.8rem;text-align:left;white-space:nowrap}.work-tabpanel.svelte-7lqj2y.svelte-7lqj2y{position:relative;width:100%;margin-left:20px}.work-tabpanel.svelte-7lqj2y h3.svelte-7lqj2y{margin-bottom:2px;font-size:1.2rem;font-weight:600;line-height:1.3}.company.svelte-7lqj2y.svelte-7lqj2y{color:var(--color-primary)}.company.svelte-7lqj2y a.svelte-7lqj2y{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);color:var(--color-primary)}.range.svelte-7lqj2y.svelte-7lqj2y{margin-bottom:25px;color:rgba(var(--color-text-rgb), 0.8);font-family:var(--font-mono);font-size:0.8rem}.work-tabpanel.svelte-7lqj2y ul.svelte-7lqj2y{padding:0px;margin:0px;list-style:none;font-size:1rem}.work-tabpanel.svelte-7lqj2y ul li.svelte-7lqj2y{position:relative;padding-left:30px;margin-bottom:10px}.work-tabpanel.svelte-7lqj2y ul li.svelte-7lqj2y::before{content:"=>";position:absolute;left:0px;color:var(--color-primary)}@media only screen and (max-width: 1200px){.hero.svelte-7lqj2y p.svelte-7lqj2y{max-width:100%}}@media only screen and (max-width: 1200px){section.about.svelte-7lqj2y.svelte-7lqj2y{display:block}h1.section-header.svelte-7lqj2y.svelte-7lqj2y::after{width:70%}.about.svelte-7lqj2y.svelte-7lqj2y{grid-template-areas:"about-image about-content";grid-template-columns:1fr;grid-template-rows:auto 1fr}.hero.svelte-7lqj2y img.svelte-7lqj2y{display:block;max-width:50%;margin:50px auto}.about.svelte-7lqj2y a img.svelte-7lqj2y{display:block;max-width:50%;margin:50px auto}.experience-wrapper.svelte-7lqj2y.svelte-7lqj2y{display:block}.work-tabpanel.svelte-7lqj2y.svelte-7lqj2y{margin-left:0;margin-top:25px}.experience.svelte-7lqj2y.svelte-7lqj2y{max-width:100%}}',
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let job;
  let selectedJobIndex = 0;
  $$result.css.add(css);
  job = experience[selectedJobIndex];
  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {})}

<section class="${"hero svelte-7lqj2y"}"><h1 class="${"svelte-7lqj2y"}">Thierry Jones</h1>
	<h2 class="${"svelte-7lqj2y"}">Computer Engineer, Developer</h2>
	<p class="${"svelte-7lqj2y"}">Canadian \u{1F1E8}\u{1F1E6} and French \u{1F1EB}\u{1F1F7} Engineer looking for new experience </p>
	<p class="${"svelte-7lqj2y"}">I am learning:\xA0\xA0<span>${validate_component(ItemSlider, "ItemSlider").$$render($$result, { items: technologies }, {}, {})}</span></p>
	<br>
	<img src="${"/images/prof-pic.png"}" alt="${"my prof pic"}" class="${"svelte-7lqj2y"}"></section>

<h1 class="${"section-header svelte-7lqj2y"}">About Me</h1>
<section class="${"about svelte-7lqj2y"}"><a target="${"_blank"}" href="${"https://letterboxd.com/film/prisoners/"}"><img src="${"/images/about_me_prisonners.jpg"}" alt="${"letterboxd link and img"}" class="${"svelte-7lqj2y"}"></a>

	
	<p class="${"svelte-7lqj2y"}">I am a dedicated and collaborative software developer, recently graduated from Queen\u2019s University \u{1F1F7}\u{1F1F4}.
		
		<br>
		<br>
		I enjoy swimming, weight lifting, coding, learning, reading, watching movies and spending time with family and friends.
		<br>
		<br>

		Here is one of my favourite movies <span class="${"movie-text-wrapper svelte-7lqj2y"}">Prisonners</span>.

		<br>
		<br></p></section>

<section class="${"experience svelte-7lqj2y"}"><h1 class="${"section-header svelte-7lqj2y"}">Work Experience</h1>
	<div class="${"experience-wrapper svelte-7lqj2y"}"><div role="${"tablist"}" class="${"work-tablist svelte-7lqj2y"}">${each(experience, (job2, i) => {
    return `<button class="${"styled-btn svelte-7lqj2y"}"><span>${escape(job2.company.name)}</span>
				</button>`;
  })}

			<div${add_attribute("style", `transform: translateY(calc(${selectedJobIndex} * var(--tab-height)));`, 0)} class="${"svelte-7lqj2y"}"></div></div>
		<div role="${"tabpanel"}" class="${"work-tabpanel svelte-7lqj2y"}"><h3 class="${"svelte-7lqj2y"}"><span>${escape(job.title)}</span><span class="${"company svelte-7lqj2y"}"><p></p>
					<a${add_attribute("href", job.company.url, 0)} rel="${"noopener noreferrer"}" target="${"_blank"}" class="${"svelte-7lqj2y"}">@${escape(job.company.name)}</a></span></h3>
			<p class="${"range svelte-7lqj2y"}">${escape(job.startDate)}${escape(job.endDate ? ` - ${job.endDate}` : "")}</p>
			<div><ul class="${"svelte-7lqj2y"}">${each(job.points, (point) => {
    return `<li class="${"svelte-7lqj2y"}">${escape(point)}</li>`;
  })}</ul></div></div></div></section>

<section class="${"more svelte-7lqj2y"}"><h1 class="${"section-header svelte-7lqj2y"}">Passion Projects</h1>
	<p>Here you can find some of the projects I have worked on, as well as many more to come in the future!
	</p>
	<p style="${"text-align:center"}"><a href="${"/projects"}"><button class="${"styled-btn"}">Projects</button></a></p>
</section>`;
});
export {
  Routes as default,
  prerender
};
