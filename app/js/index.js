import "../scss/main.scss";
import buttonsFunctions from "./buttonFunctions";
import utils from "./utils";

const linksTextArea = document.getElementById("linksTextArea");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", buttonClickHandler));

function buttonClickHandler(e) {
  const links = utils.getArrayFromTextArea(linksTextArea);
  const nameOfFunction = e.target.id.replace("Button", "");
  const functionToCall = buttonsFunctions[nameOfFunction];
  const aggregatedLinks = functionToCall(links);
  linksTextArea.value = aggregatedLinks.join("\n");
}
