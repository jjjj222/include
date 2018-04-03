//------------------------------------------------------------------------------
//   Toolbar
//------------------------------------------------------------------------------
export class Toolbar {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add("toolbar");

        this.form = document.createElement('form');
        this.form.classList.add('form-inline');
        this.root.appendChild(this.form);
    }
}

Toolbar.prototype.addCheckbox = function(label, callback) {
    const check = new FormCheck(label, callback);
    this.form.appendChild(check.root);
}

Toolbar.prototype.addButton = function(label, callback) {
    const btn = new FormButton(label, callback);
    this.form.appendChild(btn.root);
}

//------------------------------------------------------------------------------
//   FomrObj
//------------------------------------------------------------------------------
class FormObj {
    constructor() {
        this.marginLeft = "10px";
    }
}

//------------------------------------------------------------------------------
//   FormButton
//------------------------------------------------------------------------------
class FormButton extends FormObj {
    constructor(label, callback) {
        super();

        this.root = document.createElement("button");
        this.root.type = "button";

        this.root.style.marginLeft = this.marginLeft;

        this.root.textContent = label;
        this.root.addEventListener('click', event => {
            event.stopPropagation();

            console.log("QQ");
        })
    }
}

//------------------------------------------------------------------------------
//   FormCheck
//------------------------------------------------------------------------------
class FormCheck extends FormObj {
    constructor(label, callback) {
        super();

        this.root = document.createElement("div");
        this.root.classList.add("form-check");

        this.root.style.marginLeft = this.marginLeft;
        this.root.style.userSelect = "none";

        const label_dom = document.createElement("label");
        label_dom.classList.add("form-check-label");
        this.root.appendChild(label_dom);

        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("form-check-input");
        label_dom.appendChild(input);

        const text = document.createTextNode(label);
        label_dom.appendChild(text);

        input.addEventListener('click', event => {
            event.stopPropagation();

            callback(input.checked);
        })
    }
}
