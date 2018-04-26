import { Button } from "./button.js";

//------------------------------------------------------------------------------
//   InputGroup
//------------------------------------------------------------------------------
export class InputGroup {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add('input-group');

        this._prepend = document.createElement('div');
        this._prepend.classList.add('input-group-prepend');
        this.root.appendChild(this._prepend);

        this.input = document.createElement('input');
        //this.input = document.createElement('textarea');
        this.input.classList.add('form-control');
        this.root.appendChild(this.input);
    }
}

//------------------------------------------------------------------------------
InputGroup.prototype.prependText = function(text) {
    const addon = document.createElement('span');
    addon.classList.add('input-group-text');
    addon.style.borderRadius = "0";
    addon.textContent = text;
    this._prepend.appendChild(addon);
}

//------------------------------------------------------------------------------
InputGroup.prototype.appendBtn = function(text) {
    const span = document.createElement('span');
    span.classList.add('input-group-btn');
    this.root.appendChild(span);

    const btn = new Button(text);
    btn.borderRadius = "0";
    span.appendChild(btn.root);
}
