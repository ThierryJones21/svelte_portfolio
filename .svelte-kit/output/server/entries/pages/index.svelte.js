import { c as create_ssr_component, e as escape, o as onDestroy, b as each, a as add_attribute, v as validate_component } from "../../immutable/chunks/index-f3ac1acc.js";
import { P as ProjectViewer } from "../../immutable/chunks/ProjectViewer-0177c42e.js";
import { H as Head } from "../../immutable/chunks/Head-e6f0e0c9.js";
import { I as Icon } from "../../immutable/chunks/Icon-60d085f3.js";
import { t as technologies, e as experience } from "../../immutable/chunks/config-2f6efd05.js";
const ContactForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".form-contact.svelte-qjh15l.svelte-qjh15l{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}.form-contact.svelte-qjh15l input.svelte-qjh15l,.form-contact.svelte-qjh15l textarea.svelte-qjh15l{width:100%;padding:10px;border:2px solid #ccc;border-radius:5px;box-sizing:border-box}.message-box.svelte-qjh15l.svelte-qjh15l{grid-column:span 2}.button-container.svelte-qjh15l.svelte-qjh15l{grid-column:span 2;display:flex;justify-content:center}.send-button.svelte-qjh15l.svelte-qjh15l{padding:10px 20px;border:2px solid #ccc;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.send-button.svelte-qjh15l.svelte-qjh15l:hover{background-color:#ddd}",
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div><h2>Contact Me</h2>
    <form class="${"form-contact svelte-qjh15l"}" action="${"https://getform.io/f/0574f96f-fa5d-4942-b7e1-58d6cd3748f8"}" method="${"POST"}" enctype="${"multipart/form-data"}"><div><label for="${"name"}">Name</label>
            <input type="${"text"}" name="${"name"}" ${"required"} class="${"svelte-qjh15l"}"></div>
        <div><label for="${"phone"}">Phone Number</label>
            <input type="${"text"}" id="${"phone"}" name="${"phone"}" pattern="${"[0-9]" + escape(3, true) + "-[0-9]" + escape(3, true) + "-[0-9]" + escape(4, true)}" placeholder="${"123-456-7890"}" title="${"Phone number format: XXX-XXX-XXXX"}" ${"required"} class="${"svelte-qjh15l"}"></div>
        <div><label for="${"email"}">Email</label>
            <input type="${"email"}" name="${"email"}" placeholder="${"example@example.com"}" ${"required"} class="${"svelte-qjh15l"}"></div>
        <div><label for="${"subject"}">Subject</label>
            <input type="${"text"}" name="${"subject"}" class="${"svelte-qjh15l"}"></div>
        <div class="${"message-box svelte-qjh15l"}"><label for="${"message"}">Message</label>
            <textarea rows="${"5"}" name="${"message"}" ${"required"} class="${"svelte-qjh15l"}"></textarea></div>
        <div class="${"button-container svelte-qjh15l"}"><button class="${"send-button svelte-qjh15l"}">Send Email
            </button></div></form>
</div>`;
});
const ItemSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "li.svelte-la4b8f{display:inline-block;position:absolute;color:var(--color-primary);font-weight:bold;font-size:110%}ul.svelte-la4b8f{display:inline;list-style:none}span.svelte-la4b8f{display:inline-block;position:absolute}",
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
  return `<ul class="${"svelte-la4b8f"}">${each(items, (item, i) => {
    return `${activeIndex === i ? `<li${add_attribute("id", i.toString(), 0)} class="${"svelte-la4b8f"}">${escape(item)}

                
                <span class="${"svelte-la4b8f"}">${validate_component(Icon, "Icon").$$render($$result, { name: item.toLowerCase() }, {}, {})}</span>
                
            </li>` : ``}`;
  })}
</ul>`;
});
const MoviesTransition_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-rouhzx.svelte-rouhzx{margin-top:-3vh;min-height:40vh;width:100%;transition:var(--transition);margin-bottom:100px}.hero-experience-wrapper.svelte-rouhzx.svelte-rouhzx{display:flex;flex-wrap:wrap;justify-content:space-between}.hero.svelte-rouhzx.svelte-rouhzx,.experience.svelte-rouhzx.svelte-rouhzx{flex-basis:calc(50% - 20px);margin-bottom:20px;flex:1 1 45%;align-items:center}.hero.svelte-rouhzx.svelte-rouhzx{letter-spacing:0.1em}.hero.svelte-rouhzx p.svelte-rouhzx{max-width:50%}.hero.svelte-rouhzx h1.svelte-rouhzx{align-self:center;font-size:2.5rem;line-height:2.5rem}.hero.svelte-rouhzx>img.svelte-rouhzx{padding:5px;max-width:30%;border:1px var(--color-primary) solid;border-radius:50%}.hero.svelte-rouhzx img.svelte-rouhzx{grid-area:about-image}.hero.svelte-rouhzx h2.svelte-rouhzx{font-size:1.25rem;line-height:1.75rem;font-weight:400;color:rgba(var(--color-text-rgb), 0.6);font-family:var(--font-mono)}h1.section-header.svelte-rouhzx.svelte-rouhzx{font-size:calc(1.7vw + 1.7vh);display:flex;align-items:center;justify-content:center;white-space:nowrap;margin-bottom:30px}.experience.svelte-rouhzx.svelte-rouhzx{flex-basis:55%}.experience-wrapper.svelte-rouhzx.svelte-rouhzx{display:flex;flex-direction:column}.experience.svelte-rouhzx.svelte-rouhzx{max-width:100%}.experience.svelte-rouhzx ul.svelte-rouhzx{padding-left:20px}.experience.svelte-rouhzx li.svelte-rouhzx{line-height:1.5}.experience.svelte-rouhzx h3.svelte-rouhzx{margin-bottom:10px}.experience.svelte-rouhzx h3 .company.svelte-rouhzx{margin-top:10px}.experience.svelte-rouhzx h3 .company a.svelte-rouhzx{color:var(--color-primary)\n    }.work-tabpanel.svelte-rouhzx.svelte-rouhzx{margin-left:0;margin-top:25px;width:100%}.work-tablist.svelte-rouhzx>div.svelte-rouhzx{position:absolute;top:0px;left:100px;z-index:10;width:100px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--color-primary);transform:translateY(calc(0 * var(--tab-height)));transition:var(--transition)}.work-tablist.svelte-rouhzx>button p.svelte-rouhzx{padding-left:15px;font-size:0.8rem;color:var(--color-primary);transition:var(--transition)}.work-tablist.svelte-rouhzx>button.svelte-rouhzx{border:none;border-radius:0;text-decoration:none;text-decoration-skip-ink:auto;position:relative;display:flex;align-items:center;height:var(--tab-height);padding:10px 10px 10px;color:var(--color-primary-rgb);font-family:var(--font-mono);text-align:left;font-size:1rem;font-weight:600;width:90%;border-left:10px}.header-container.svelte-rouhzx.svelte-rouhzx{margin-bottom:20px}.project-wrapper.svelte-rouhzx.svelte-rouhzx{width:100%;display:flex;flex-direction:column;align-items:center;margin-bottom:100px}.project-wrapper.svelte-rouhzx h1.svelte-rouhzx{align-self:center;font-size:2.5rem;line-height:2.5rem}.project-grid.svelte-rouhzx.svelte-rouhzx{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:50px;justify-content:space-evenly}@media only screen and (max-width: 1000px){.project-grid.svelte-rouhzx.svelte-rouhzx{grid-template-columns:repeat(1, minmax(0, 1fr))}}@media only screen and (min-width: 1000px){.hero.svelte-rouhzx p.svelte-rouhzx{max-width:100%}h1.section-header.svelte-rouhzx.svelte-rouhzx::after{width:70%}.hero.svelte-rouhzx img.svelte-rouhzx{display:block;max-width:50%;margin:50px auto}.experience-wrapper.svelte-rouhzx.svelte-rouhzx{display:block}.work-tabpanel.svelte-rouhzx.svelte-rouhzx{margin-left:0;margin-top:25px}.work-tablist.svelte-rouhzx>div.svelte-rouhzx{position:absolute;top:0px;left:100px;z-index:10;width:100px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--color-primary);transform:translateY(calc(0 * var(--tab-height)));transition:var(--transition)}.work-tablist.svelte-rouhzx>button p.svelte-rouhzx{padding-left:15px;font-size:0.8rem;color:var(--color-primary);transition:var(--transition)}.work-tablist.svelte-rouhzx>button.svelte-rouhzx{border:none;border-radius:0;text-decoration:none;text-decoration-skip-ink:auto;position:relative;display:flex;align-items:center;height:var(--tab-height);padding:20px 20px 20px;color:var(--color-primary-rgb);font-family:var(--font-mono);text-align:left;font-size:1rem;font-weight:600;width:90%;border-left:10px}.experience.svelte-rouhzx.svelte-rouhzx{max-width:100%}.experience.svelte-rouhzx h3 .company a.svelte-rouhzx{color:var(--color-primary)\n        }}",
  map: null
};
const prerender = true;
const load = async ({ fetch }) => {
  const projectsResponse = await fetch("/api/projects.json");
  const projects = await projectsResponse.json();
  return { props: { projects } };
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProjects;
  let job;
  let { projects } = $$props;
  let selectedJobIndex = 0;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  filteredProjects = projects;
  job = experience[selectedJobIndex];
  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {})}

<section class="${"hero-experience-wrapper svelte-rouhzx"}"><section class="${"hero svelte-rouhzx"}"><h1 class="${"svelte-rouhzx"}">Thierry Jones</h1>
        <h2 class="${"svelte-rouhzx"}">Computer Engineer, Developer</h2>
        <p class="${"svelte-rouhzx"}">I am a Queen&#39;s Computer Engineering Graduate.</p>
        <p class="${"svelte-rouhzx"}">Skills:<span>${validate_component(ItemSlider, "ItemSlider").$$render($$result, { items: technologies }, {}, {})}</span></p>
        <br>
        <img src="${"/images/prof-pic.png"}" alt="${"my prof pic"}" class="${"svelte-rouhzx"}"></section>

    <section class="${"experience svelte-rouhzx"}"><h1 class="${"section-header svelte-rouhzx"}">Work Experience</h1>
        <div class="${"experience-wrapper svelte-rouhzx"}"><div role="${"tablist"}" class="${"work-tablist svelte-rouhzx"}">${each(experience, (job2, i) => {
    return `<button class="${"styled-btn svelte-rouhzx"}"><span>${escape(job2.company.name)}</span>
                        <p class="${"range svelte-rouhzx"}">${escape(job2.startDate)}${escape(job2.endDate ? ` - ${job2.endDate}` : " ")}</p>
                    </button>`;
  })}
                <div${add_attribute("style", `transform: translateY(calc(${selectedJobIndex} * var(--tab-height)));`, 0)} class="${"svelte-rouhzx"}"></div></div>
            <div role="${"tabpanel"}" class="${"work-tabpanel svelte-rouhzx"}"><h3 class="${"svelte-rouhzx"}"><span>${escape(job.title)}</span>
                    <span class="${"company svelte-rouhzx"}"><p></p>
                        <a${add_attribute("href", job.company.url, 0)} rel="${"noopener noreferrer"}" target="${"_blank"}" class="${"svelte-rouhzx"}">${escape(job.company.name)}</a></span></h3>
                
                <div><ul class="${"svelte-rouhzx"}">${each(job.points, (point) => {
    return `<li class="${"svelte-rouhzx"}">${escape(point)}</li>`;
  })}</ul></div></div></div></section></section>

<div class="${"project-wrapper svelte-rouhzx"}"><div class="${"header-container svelte-rouhzx"}"><h1 class="${"section-header svelte-rouhzx"}">Projects</h1></div>
    <div class="${"project-grid svelte-rouhzx"}">${filteredProjects.length ? `${each(filteredProjects, (project) => {
    return `${validate_component(ProjectViewer, "ProjectViewer").$$render($$result, { project }, {}, {})}`;
  })}` : `<p>No projects here...</p>`}</div></div>

<section class="${"svelte-rouhzx"}">${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Routes as default,
  load,
  prerender
};
