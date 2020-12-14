const toFilter = document.getElementById("toFilter");
const filterTextArea = document.getElementById("filterTextArea");

const utils = {
  getArrayFromTextArea: (textarea) => {
    return textarea.value
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => !!line);
  },

  deleteDuplicates: (links, byDomain) => {
    const linksObject = links.reduce((result, link) => {
      let key = byDomain ? utils.getDomain(link) : link;
      result[key] = link;
      return result;
    }, {});

    let result = [];
    for (const key in linksObject) {
      result.push(linksObject[key]);
    }
    return result;
  },

  getDomain: (link) => {
    return link.replace(/(http(s)?:\/\/)?(www.)?/gi, "").replace(/\/.*/gi, "");
  },

  addHTTP: (links) => {
    return links.map((link) => {
      if (!link.match(/^http/gi)) return "http://" + link;
      return link;
    });
  },

  filterLinks: (links) => {
    if (!toFilter.checked) return links;

    const stopWords = utils.getArrayFromTextArea(filterTextArea);

    return links.filter((link) => {
      return stopWords.reduce((contains, stopWord) => {
        if (!contains || link.includes(stopWord)) return false;
        return true;
      }, true);
    });
  },
};

export default utils;
