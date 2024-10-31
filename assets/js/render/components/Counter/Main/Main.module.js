import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer.module.js";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer.module.js";
import { createElement } from "../../../../../utils/createElement.js";
import { CurrentValue } from "./CurrentValue/CurrentValue.module.js";

export function Main() {
  const container = createElement("main", { class: "main" });

  container.append(CurrentValue(), ProgressBarContainer(), ButtonsContainer());

  return container;
}
