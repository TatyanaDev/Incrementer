export function createElement(tagName, attributes = {}) {
  const container = document.createElement(tagName);

  for (const [name, value] of Object.entries(attributes)) {
    switch (name) {
      case "innerText":
        container.innerText = value;
        break;
      case "style":
        Object.assign(container.style, value);
        break;
      default:
        container.setAttribute(name, value);
        break;
    }
  }

  return container;
}
