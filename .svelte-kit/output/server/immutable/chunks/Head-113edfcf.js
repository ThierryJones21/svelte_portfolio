import { g as getContext, c as create_ssr_component, d as subscribe, e as escape, a as add_attribute } from "./index-f3ac1acc.js";
import { m as metadata } from "./config-e3f12f67.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title = metadata.title } = $$props;
  let { description = metadata.description } = $$props;
  let { image = "/images/logo.png" } = $$props;
  let { type = "website" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"robots"}" content="${"follow, index"}" data-svelte="svelte-xg2na8"><meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-xg2na8"><meta property="${"og:url"}"${add_attribute("content", `${metadata.baseUrl}${$page.url.pathname}`, 0)} data-svelte="svelte-xg2na8"><link rel="${"canonical"}"${add_attribute("href", `${metadata.baseUrl}${$page.url.pathname}`, 0)} data-svelte="svelte-xg2na8"><meta property="${"og:type"}"${add_attribute("content", type, 0)} data-svelte="svelte-xg2na8"><meta property="${"og:site_name"}" content="${"Thierry Jones"}" data-svelte="svelte-xg2na8"><meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-xg2na8"><meta property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-xg2na8"><meta property="${"og:image"}"${add_attribute("content", `${metadata.baseUrl}${image}`, 0)} data-svelte="svelte-xg2na8">`, ""}`;
});
export {
  Head as H
};
