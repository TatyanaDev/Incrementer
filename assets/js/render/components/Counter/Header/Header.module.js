import { createElement } from "../../../../../utils/createElement.js";
import { data } from "../../../../data/data.module.js";

export function Header() {
  const container = createElement("header", { class: "header", innerText: `MAX VALUE: ${data.maxValue}` });

  return container;
}
