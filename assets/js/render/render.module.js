import { Counter } from "./components/Counter/Counter.module.js";

const root = document.getElementById("root");

export function render() {
  root.innerHTML = "";

  root.append(Counter());
}
