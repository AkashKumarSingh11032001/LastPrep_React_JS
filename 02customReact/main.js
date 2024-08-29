function customeRender1(reactElement, container) {
  const { type, props, children } = reactElement;

  const dom = document.createElement(type);
  dom.innerHTML = children;
  dom.setAttribute("href", props.href);
  dom.setAttribute("target", props.target);

  container.appendChild(dom);
}

function customeRender2(reactElement, container) {
  const { type, props, children } = reactElement;

  const dom = document.createElement(type);
  dom.innerHTML = children;

  for (const prop in props) {
    if (prop === 'children') continue;
    dom.setAttribute(prop, props[prop]);
  }

  container.appendChild(dom);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Here to Redirect to G oogle",
};

const root = document.querySelector("#root");
// customeRender1(reactElement, root); //--> v1
customeRender2(reactElement, root); //--> v2

// create a tag
