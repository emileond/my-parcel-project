class MyButton extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: "open"
        });
        const button = document.createElement("button");
        button.className = "button";
        button.textContent = this.getAttribute("label") || "Click Me";
        const style = document.createElement("style");
        style.textContent = `
      .button {
        background-color: #008CBA;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
      }
    `;
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}
customElements.define("my-button", MyButton);

//# sourceMappingURL=index.e47f09dd.js.map
