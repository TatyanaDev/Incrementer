import { createElement } from "../../../../../../utils/createElement.js";
import { data } from "../../../../../data/data.module.js";

export function CurrentValue() {
  const container = createElement("div", { class: "current-value" });

  const spanElement = createElement("span", { innerText: data.currentValue });

  container.append(spanElement);

  return container;
}
