import type { GatsbyBrowser } from "gatsby";

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = (
  args
) => {
  window.scrollTo(0, 0);
  return false;
};
