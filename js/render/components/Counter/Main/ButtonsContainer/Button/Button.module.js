export function Button(title, onClickHandler) {
  const container = document.createElement("button");
  container.innerText = title;
  container.addEventListener("click", onClickHandler);

  return container;
}
