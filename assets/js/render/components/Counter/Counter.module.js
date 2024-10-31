import { createElement } from "../../../../utils/createElement.js";
import { Header } from "./Header/Header.module.js";
import { Main } from "./Main/Main.module.js";

export function Counter() {
  const container = createElement("div", { class: "counter" });
  
  container.append(Header(), Main());

  return container;
}
