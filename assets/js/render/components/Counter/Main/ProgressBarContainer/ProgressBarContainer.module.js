import { createElement } from "../../../../../../utils/createElement.js";
import { data } from "../../../../../data/data.module.js";

export function ProgressBarContainer() {
  const container = createElement("div", { class: "progress-bar-container" });

  const barElement = createElement("div", {
    class: "progress-bar",
    style: { width: `${(data.currentValue / data.maxValue) * 100}%` },
  });

  container.append(barElement);

  return container;
}
