function customeRender(reactElement, container) {
  const { type, props, children } = reactElement;

  const dom = document.createElement(type);
  dom.innerHTML = children;
  dom.setAttribute("href", props.href);
  dom.setAttribute("target", props.target);

  container.appendChild(dom);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Here to Redirect to Google",
};

const root = document.querySelector("#root");
customeRender(reactElement, root);

// create a tag
