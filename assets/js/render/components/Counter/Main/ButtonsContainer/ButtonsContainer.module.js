import { createElement } from "../../../../../../utils/createElement.js";
import { increment, reset } from "../../../../../data/data.module.js";
import { Button } from "./Button/Button.module.js";

export function ButtonsContainer() {
  const container = createElement("div", { class: "buttons-container" });

  container.append(Button("Increment", increment), Button("Reset", reset));

  return container;
}
