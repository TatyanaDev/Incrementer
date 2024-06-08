import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer.module.js";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer.module.js";
import { CurrentValue } from "./CurrentValue/CurrentValue.module.js";

export function Main() {
  const container = document.createElement("main");
  container.classList.add("main");

  container.append(CurrentValue(), ProgressBarContainer(), ButtonsContainer());

  return container;
}
