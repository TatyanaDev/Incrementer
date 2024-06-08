import { data } from "../../../../../data/data.module.js";

export function ProgressBarContainer() {
  const container = document.createElement("div");
  container.classList.add("progress-bar-container");

  const barElement = document.createElement("div");
  barElement.classList.add("progress-bar");
  barElement.style.width = `${(data.currentValue / data.maxValue) * 100}%`;

  container.append(barElement);

  return container;
}
