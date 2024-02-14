import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, v as validate_component, b as each } from "../../immutable/chunks/index-f3ac1acc.js";
import { n as navLinks } from "../../immutable/chunks/config-a1c3d60c.js";
import { I as Icon } from "../../immutable/chunks/Icon-3dbad89c.js";
const ToggleTheme_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'label.svelte-1k0f5gz.svelte-1k0f5gz{padding:0;display:flex;align-items:center;background:transparent;border:none;box-sizing:border-box;--toggle-height:20px}input.svelte-1k0f5gz.svelte-1k0f5gz{position:absolute;width:0;height:0;opacity:0;overflow:hidden}.toggle.svelte-1k0f5gz.svelte-1k0f5gz,.toggle.svelte-1k0f5gz.svelte-1k0f5gz::after,.toggle.svelte-1k0f5gz.svelte-1k0f5gz::before{transition:var(--transition)}.toggle.svelte-1k0f5gz.svelte-1k0f5gz{position:relative;display:inline-block;width:calc(var(--toggle-height) * 2);height:var(--toggle-height);margin:0;background-color:#404346;color:#404346;border-radius:var(--toggle-height);cursor:pointer}input.svelte-1k0f5gz:checked~.toggle.svelte-1k0f5gz{color:white;background-color:white}.toggle.svelte-1k0f5gz.svelte-1k0f5gz::after{position:absolute;top:3px;left:calc(var(--toggle-height) + 3px);width:calc(var(--toggle-height) - 6px);height:calc(var(--toggle-height) - 6px);background-color:white;border-radius:var(--toggle-height);content:""}input.svelte-1k0f5gz:checked~.toggle.svelte-1k0f5gz::after{left:3px;background-color:#404346}.toggle.svelte-1k0f5gz.svelte-1k0f5gz:hover{background-color:#202122}input.svelte-1k0f5gz:checked~.toggle.svelte-1k0f5gz:hover{background-color:rgb(202, 202, 202)}input.svelte-1k0f5gz:checked~.toggle.svelte-1k0f5gz:hover:before{background-color:rgb(202, 202, 202)}.toggle.svelte-1k0f5gz.svelte-1k0f5gz::before{z-index:2;content:"";top:2px;right:8px;width:1px;height:1px;display:block;position:absolute;border-radius:var(--toggle-height);background-color:none}input.svelte-1k0f5gz:checked~.toggle.svelte-1k0f5gz::before{top:1px;right:15px;width:calc(var(--toggle-height) - 3px);height:calc(var(--toggle-height) - 7px);border-radius:var(--toggle-height);background-color:white}',
  map: null
};
const ToggleTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const THEMES = { LIGHT: "light", DARK: "dark" };
  let isDarkMode = true;
  $$result.css.add(css$3);
  return `


${$$result.head += `<meta${add_attribute("content", "#ffffff", 0)} name="${"theme-color"}" data-svelte="svelte-kbgwqe">`, ""}

<label aria-label="${"switch to " + escape(THEMES.LIGHT, true) + " mode"}" title="${"switch to " + escape(THEMES.LIGHT, true) + " mode"}" class="${"svelte-1k0f5gz"}"><input type="${"checkbox"}" class="${"svelte-1k0f5gz"}"${add_attribute("checked", isDarkMode, 1)}>
	<span class="${"toggle svelte-1k0f5gz"}"></span>
</label>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--nav-height:70px;--nav-scroll-pt:30px;--nav-item-padding:20px}header.svelte-1jkaqp5.svelte-1jkaqp5{position:sticky;z-index:2;top:0;left:0;height:var(--nav-height);color:var(--text);display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 calc((100vw - var(--max-width)) / 2);margin-top:var(--nav-scroll-pt);font-weight:500;letter-spacing:0.07rem;transition:var(--transition) all;background-color:var(--color-bg)}header.scroll.svelte-1jkaqp5.svelte-1jkaqp5{background-color:var(--color-bg);border-bottom:1px solid rgba(var(--color-primary-rgb), 0.1)}nav.svelte-1jkaqp5.svelte-1jkaqp5{display:flex;flex-direction:row}ul.svelte-1jkaqp5.svelte-1jkaqp5{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;list-style:none;margin:0;padding:0;transition:var(--transition)}li.svelte-1jkaqp5.svelte-1jkaqp5{padding:0 var(--nav-item-padding);display:inline-block;transition:var(--transition);border-radius:var(--border-radius)}li.svelte-1jkaqp5.svelte-1jkaqp5:last-of-type{padding-right:0}a.svelte-1jkaqp5>span.svelte-1jkaqp5{display:inline;color:var(--color-primary);font-family:var(--font-mono);font-size:0.8rem}a.svelte-1jkaqp5.svelte-1jkaqp5{text-decoration:none;color:var(--color-text)}a.svelte-1jkaqp5.svelte-1jkaqp5:hover{color:var(--color-primary)}a.svelte-1jkaqp5.svelte-1jkaqp5,button.svelte-1jkaqp5.svelte-1jkaqp5{transition:var(--transition);font-family:var(--font-mono);text-transform:uppercase}[aria-current].svelte-1jkaqp5.svelte-1jkaqp5:not([aria-current="false"]){color:var(--color-primary)}label.svelte-1jkaqp5.svelte-1jkaqp5{display:none}@media only screen and (max-width: 1200px){.logo.svelte-1jkaqp5.svelte-1jkaqp5{display:none}label.svelte-1jkaqp5.svelte-1jkaqp5{display:inline}ul.svelte-1jkaqp5.svelte-1jkaqp5{position:absolute;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 calc((100vw - var(--max-width)) / 2);list-style:none;background:var(--color-bg);top:var(--nav-height);left:0;width:100vw;height:100vh}ul.mobile-closed.svelte-1jkaqp5.svelte-1jkaqp5{opacity:0;pointer-events:none}nav.svelte-1jkaqp5.svelte-1jkaqp5{justify-content:space-between;width:100%}input.svelte-1jkaqp5.svelte-1jkaqp5{position:absolute;width:0;height:0;opacity:0;overflow:hidden}.toggle.svelte-1jkaqp5.svelte-1jkaqp5{transition:opacity 0.3s ease;position:relative;display:inline-block;margin:0;width:25px;height:25px;cursor:pointer}div.svelte-1jkaqp5.svelte-1jkaqp5{transition:opacity 0.3s ease, transform 0.3s ease;position:absolute;width:100%;height:100%}.menu.svelte-1jkaqp5.svelte-1jkaqp5{opacity:100;transform:scale(1)}.cross.svelte-1jkaqp5.svelte-1jkaqp5{opacity:0;transform:scale(0)}input:checked~.toggle.svelte-1jkaqp5 .menu.svelte-1jkaqp5{opacity:0;transform:scale(0)}input:checked~.toggle.svelte-1jkaqp5 .cross.svelte-1jkaqp5{transform:scale(1);opacity:100}ul.mobile-open.svelte-1jkaqp5.svelte-1jkaqp5{opacity:100;overflow:hidden}li.svelte-1jkaqp5.svelte-1jkaqp5{display:flex;border-radius:0;padding:0;width:100%;border-bottom:1px solid gray}li.svelte-1jkaqp5.svelte-1jkaqp5:last-of-type{border-bottom:none}li.svelte-1jkaqp5>a.svelte-1jkaqp5{width:100%;height:100%;padding:40px 0}a.svelte-1jkaqp5>button.svelte-1jkaqp5{width:100%}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let isMenuOpen = false;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css$2);
  return `<header class="${escape(null_to_empty(`${""}`), true) + " svelte-1jkaqp5"}">
	<a href="${"/"}" title="${"navigate home"}" class="${"logo svelte-1jkaqp5"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "home",
    width: "25px",
    height: "25px"
  }, {}, {})}</a>

	
	<nav class="${"svelte-1jkaqp5"}">${validate_component(ToggleTheme, "ToggleTheme").$$render($$result, {}, {}, {})}
		<label aria-label="${"toggle nav menu"}" title="${"toggle nav menu"}" class="${"svelte-1jkaqp5"}"><input type="${"checkbox"}" aria-label="${"toggle nav menu"}" class="${"svelte-1jkaqp5"}"${add_attribute("checked", isMenuOpen, 1)}>
			<span role="${"button"}" class="${"toggle svelte-1jkaqp5"}"><div class="${"cross svelte-1jkaqp5"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "cross",
    width: "25px",
    height: "25px"
  }, {}, {})}</div>

				<div class="${"menu svelte-1jkaqp5"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "menu",
    width: "25px",
    height: "25px"
  }, {}, {})}</div></span></label>
		<ul class="${escape(null_to_empty("mobile-closed"), true) + " svelte-1jkaqp5"}">${each(navLinks, (navLink, i) => {
    return `<li class="${"svelte-1jkaqp5"}"><a rel="${"prefetch"}"${add_attribute("href", navLink.href, 0)}${add_attribute("aria-current", currentPage === navLink.href, 0)} class="${"svelte-1jkaqp5"}">
						<span class="${"svelte-1jkaqp5"}"></span>
						${escape(navLink.text)}</a>
				</li>`;
  })}
			<li class="${"svelte-1jkaqp5"}"><a target="${"_blank"}" href="${"/Thierry-Jones-Resume.pdf"}" class="${"svelte-1jkaqp5"}"><button class="${"styled-btn svelte-1jkaqp5"}">RESUME</button></a></li></ul></nav></header>

`;
});
const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thierry-jones-5106a6172/"
  },
  {
    name: "GitHub",
    href: "https://github.com/ThierryJones21"
  }
];
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'footer.svelte-1m4wot8.svelte-1m4wot8{bottom:0;color:var(--color-text);padding:10px 0;font-family:var(--font-mono);margin:0 auto;margin-top:200px}ul.svelte-1m4wot8.svelte-1m4wot8{position:fixed;bottom:0;list-style:none;display:flex;flex-direction:column;align-items:center;padding:0 calc((100vw - var(--max-width)) / 2);margin:0;color:var(--color-primary);transition:var(--transition)}ul.left.svelte-1m4wot8.svelte-1m4wot8{left:0}ul.svelte-1m4wot8.svelte-1m4wot8::after{content:"";width:1px;height:25px;background-color:var(--color-text)}ul.left.svelte-1m4wot8>li.svelte-1m4wot8{display:inline;padding:10px;transition:ease 300ms}ul.left.svelte-1m4wot8>li.svelte-1m4wot8:hover{transform:scale(1.2)}a.svelte-1m4wot8.svelte-1m4wot8{text-decoration:none;color:var(--color-text);padding:6px 12px;transition:var(--transition);border-radius:var(--border-radius)}a.svelte-1m4wot8.svelte-1m4wot8:hover{background-color:rgb(var(--color-primary-rgb), 0.3)}li.svelte-1m4wot8>a.svelte-1m4wot8{padding:0}li.svelte-1m4wot8>a.svelte-1m4wot8:hover{background-color:transparent;color:var(--color-primary)}section.svelte-1m4wot8.svelte-1m4wot8{text-align:center;margin-top:20px}@media only screen and (max-width: 1200px){footer.svelte-1m4wot8.svelte-1m4wot8{display:flex;flex-direction:column;align-items:center}ul.svelte-1m4wot8.svelte-1m4wot8{position:unset;flex-direction:row}ul.svelte-1m4wot8.svelte-1m4wot8::after{display:none}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1m4wot8"}"><ul class="${"left svelte-1m4wot8"}">${each(socials, (social) => {
    return `<li class="${"svelte-1m4wot8"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}"${add_attribute("href", social.href, 0)}${add_attribute("title", social.name, 0)} class="${"svelte-1m4wot8"}">${validate_component(Icon, "Icon").$$render($$result, {
      name: social.name.toLowerCase(),
      width: "35px",
      height: "35px"
    }, {}, {})}</a>
				
			</li>`;
  })}
		<li class="${"svelte-1m4wot8"}"><a href="${"mailto:jones.thierry@gmail.com"}" class="${"svelte-1m4wot8"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "mail",
    width: "35px",
    height: "35px"
  }, {}, {})}</a></li></ul>
	
	<section class="${"svelte-1m4wot8"}"><a target="${"_blank"}" href="${"https://www.linkedin.com/in/thierry-jones-5106a6172/"}" title="${"visit my linkedin"}" class="${"svelte-1m4wot8"}">Visit my LinkedIn </a></section>
</footer>`;
});
const global = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-13kwhv3{margin:0 auto;position:relative;z-index:0;margin-top:var(--nav-height);max-width:var(--max-content-width)}",
  map: null
};
async function load({ url }) {
  return { props: { currentPage: url.pathname } };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, { currentPage }, {}, {})}
<main class="${"svelte-13kwhv3"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  _layout as default,
  load
};
