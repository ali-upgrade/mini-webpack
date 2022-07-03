module.exports = function (content) {
  const script = `
    const styleEl = document.createElement('style');
    styleEl.innerHTML = ${JSON.stringify(content)};
    document.head.appendChild(styleEl);
  `

  return script;
}