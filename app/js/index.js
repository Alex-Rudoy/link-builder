import "../scss/main.scss";

let deleteDuplicatesButton = document.getElementById("deleteDuplicatesButton");
let deleteDuplicatesByDomainButton = document.getElementById("deleteDuplicatesByDomainButton");
let prepareLinksButton = document.getElementById("prepareLinksButton");
let getDomainsButton = document.getElementById("getDomainsButton");
let openAllLinksButton = document.getElementById("openAllLinksButton");
let linksTextArea = document.getElementById("linksTextArea");
let filterTextArea = document.getElementById("filterTextArea");

deleteDuplicatesButton.addEventListener("click", deleteDuplicates);
deleteDuplicatesByDomainButton.addEventListener("click", deleteDuplicatesByDomain);
prepareLinksButton.addEventListener("click", prepareLinks);
getDomainsButton.addEventListener("click", getDomains);
openAllLinksButton.addEventListener("click", openAllLinks);

function deleteDuplicates() {
  let links = processTextArea(linksTextArea);

  // actual delete duplicates
  let linksObject = links.reduce((result, link) => {
    if (!result[link]) {
      result[link] = link;
    }
    return result;
  }, {});

  // transform back to array
  let result = [];
  for (const key in linksObject) {
    result.push(linksObject[key]);
  }

  linksTextArea.value = result.join("\n");
}

function deleteDuplicatesByDomain() {
  let links = processTextArea(linksTextArea);

  // actual delete duplicates
  let linksObject = links.reduce((result, link) => {
    let shortLink = cutTheLink(link);

    if (!result[shortLink]) {
      result[shortLink] = link;
    }
    return result;
  }, {});

  // transform back to array
  let result = [];
  for (const key in linksObject) {
    result.push(linksObject[key]);
  }

  linksTextArea.value = result.join("\n");
}

function processTextArea(textarea) {
  return textarea.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !!line);
}

function cutTheLink(link) {
  return link.replace(/(http(s)?:\/\/)?(www.)?/gi, "").replace(/\/.*/gi);
}

function prepareLinks() {}
function getDomains() {}
function openAllLinks() {}
