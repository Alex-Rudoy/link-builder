import utils from "./utils";

const buttonFunctions = {
  deleteDuplicates: (links) => {
    const byDomain = false;
    const aggregatedLinks = utils.deleteDuplicates(links, byDomain);
    const filteredLinks = utils.filterLinks(aggregatedLinks);
    return filteredLinks;
  },

  deleteDuplicatesByDomain: (links) => {
    const byDomain = true;
    const aggregatedLinks = utils.deleteDuplicates(links, byDomain);
    const filteredLinks = utils.filterLinks(aggregatedLinks);
    return filteredLinks;
  },

  prepareLinks: (links) => {
    const aggregatedLinks = utils.addHTTP(links);
    const filteredLinks = utils.filterLinks(aggregatedLinks);
    return filteredLinks;
  },

  getDomains: (links) => {
    const aggregatedLinks = links.map((link) => {
      return utils.getDomain(link);
    });
    const filteredLinks = utils.filterLinks(aggregatedLinks);
    return filteredLinks;
  },

  openAllLinks: (links) => {
    buttonFunctions.prepareLinks(links).forEach((link) => {
      window.open(link, "_blank");
    });
    return links;
  },
};

export default buttonFunctions;
