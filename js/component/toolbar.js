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

Toolbar.prototype.addFileInputButton = function(label, callback) {
    const input = new FormFileInput(label, callback);
    this.form.appendChild(input.root);
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
        this.root.style.userSelect = "none";

        //this.root.style.marginLeft = this.marginLeft;

        this.root.textContent = label;
        this.root.addEventListener('click', event => {
            event.stopPropagation();

            callback();
        })
    }
}

//------------------------------------------------------------------------------
//   
//------------------------------------------------------------------------------
class FormFileInput extends FormObj {
    constructor(label, callback) {
        super();
        //this.root = document.createElement("form");
        //this.root.className = "form-inline";

        //const label = document.createElement("label");
        //label.classList.add("navbar-text");
        //label.textContent = "No file chosen";
        //label.style.marginRight = "10px";
        ////this.root.appendChild(label);
        //this.root.appendChild(label);

        const btn = document.createElement("button");
        //const btn = document.createElement("span");
        //btn.classList.add("btn");
        //btn.classList.add("btn-primary");
        btn.textContent = label;
        btn.style.overflow = "hidden";
        btn.style.position = "relative";
        //this.root.appendChild(btn);
        this.root = btn;
        this.root.style.userSelect = "none";


        const input = document.createElement("input");
        input.type = "file"
        btn.appendChild(input);

        const onchange_fn = (e) => {
            const file = e.target.files[0];
            if (!file) {
                return;
            }

            //label.textContent = file.name;
            callback(file);
        }

        input.addEventListener('change', onchange_fn);
        input.addEventListener('click', () => {
            input.value = null;
        })

        input.title = " ";
        input.style.position = "absolute";
        input.style.top = "0px";
        input.style.right = "0px";
        input.style.minWidth = "100%";
        input.style.minHeight = "100%";
        input.style.outline = "none";
        input.style.opacity = "0";
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
