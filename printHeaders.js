let headersNodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let log = ``;
headersNodes.forEach((node) => {
  const line = `${node.tagName} - ${node.textContent}`;
  log = `${log}
  ${line}
  `;
});
console.log(log);
