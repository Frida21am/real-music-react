import type { GatsbyBrowser } from "gatsby";

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = (
  args
) => {
  return false;
};
