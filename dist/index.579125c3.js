// index.js
async function loadTemplate(url) {
    const response = await fetch(url);
    const text = await response.text();
    const template = document.createElement("div");
    template.innerHTML = text;
    document.body.appendChild(template);
}
async function init() {
    await loadTemplate("./components/button.html");
    //   await loadTemplate('./templates/card.html')
    // Example of using the templates
    const buttonTemplate = document.getElementById("button-template");
    //   const cardTemplate = document.getElementById('card-template')
    const buttonClone = buttonTemplate.content.cloneNode(true);
    //   const cardClone = cardTemplate.content.cloneNode(true)
    document.getElementById("app").appendChild(buttonClone);
//   document.getElementById('app').appendChild(cardClone)
}
init();

//# sourceMappingURL=index.579125c3.js.map
