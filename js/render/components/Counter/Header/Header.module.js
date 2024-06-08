import { data } from "../../../../data/data.module.js";

export function Header() {
  const container = document.createElement("header");
  container.classList.add("header");
  container.innerText = `MAX VALUE: ${data.maxValue}`;

  return container;
}
