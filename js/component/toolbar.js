import { Button } from '../bootstrap/button.js';
import { FormInput } from '../bootstrap/form.js';

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

//------------------------------------------------------------------------------
Toolbar.prototype.addCheckbox = function(label, callback) {
    const check = new FormCheck(label, callback);
    this.form.appendChild(check.root);
}

Toolbar.prototype.addButton = function(label, callback) {
    const btn = new Button(label);

    btn.setSmall();
    btn.setNoRadius();
    btn.setNoHighlight();
    btn.root.classList.add('btn-outline-secondary');

    btn.on('click', callback);
    this.form.appendChild(btn.root);
}

Toolbar.prototype.addFileInputButton = function(label, callback) {
    const input = new FormFileInput(label, callback);
    this.form.appendChild(input.root);
}

Toolbar.prototype.addInput = function() {
    const input = new FormInput();
    input.setSmall();
    input.setNoRadius();
    input.setNoHighlight();
    //input.setNoHighlight();

    //input.root.style.borderRadius = 0;
    //input.root.classList.add('form-control-sm');
    ////const div = document.createElement('div');
    ////div.classList.add('form-group');
    ////this.root.appendChild(div);
    //const input = document.createElement('input');
    //input.type = 'text';
    //input.classList.add('form-control');
    //input.style.outline = 'none';
    //input.style.boxShadow = 'none';
    //input.style.border = '1px solid #ccc';
    ////input.classList.add('no-outline-highlight');
    ////input.classList.add('mb-2');
    ////input.classList.add('mr-sm-2');
    ////input.classList.add('mb-sm-2');
    //this.form.appendChild(input);
    this.form.appendChild(input.root);

    input.on('input', () => {
        console.log(input.root.value);
    })

    //input.addEventListener('input', () => {
    //    console.log(input.value);
    //})
  //const
  //  this.root.
}

//Toolbar.prototype.addInputGroup = function() {
//    const input_group = new InputGroup(this.root);
//    input_group.prependText('>');
//    input_group.appendBtn('Enter');
//}
//------------------------------------------------------------------------------
//   FomrObj
//------------------------------------------------------------------------------
// TODO: remove
//class FormObj {
//    constructor() {
//        this.marginLeft = "10px";
//        this.marginRight = "10px";
//    }
//}

//------------------------------------------------------------------------------
//   FormButton
//------------------------------------------------------------------------------
//class FormButton {
//    constructor(label, callback) {
//        const btn = new Button(label);
//        this.root = btn.root;
//
//        btn.setNoRadius();
//        btn.setNoHighlight();
//
//        btn.on('click', callback);
//    }
//}

//------------------------------------------------------------------------------
//   
//------------------------------------------------------------------------------
//class FormFileInput extends FormObj {
class FormFileInput {
    constructor(label, callback) {
        //super();
        //this.root = document.createElement("form");
        //this.root.className = "form-inline";

        //const label = document.createElement("label");
        //label.classList.add("navbar-text");
        //label.textContent = "No file chosen";
        //label.style.marginRight = "10px";
        ////this.root.appendChild(label);
        //this.root.appendChild(label);

        const btn = new Button(label);
        this.root = btn.root;

        btn.setSmall();
        btn.setNoRadius();
        btn.setNoHighlight();
        btn.root.classList.add('btn-outline-secondary');
        //const btn = btn_o.root;

        //const btn = document.createElement("button");
        //const btn = document.createElement("span");
        //btn.classList.add("btn");
        //btn.classList.add("btn-primary");
        //btn.textContent = label;
        btn.root.style.overflow = "hidden";
        btn.root.style.position = "relative";
        //this.root.appendChild(btn);
        //this.root.style.userSelect = "none";
        //btn.classList.add('btn');
        //btn.classList.add('btn-sm');
        //btn.classList.add('btn-outline-secondary');


        const input = document.createElement("input");
        input.type = "file"
        btn.root.appendChild(input);

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
//class FormCheck extends FormObj {
class FormCheck {
    constructor(label, callback) {
        //super();

        this.root = document.createElement("div");
        this.root.classList.add("form-check");

        const margin = '10px'

        //this.root.style.marginLeft = this.marginLeft;
        //this.root.style.marginRight = this.marginRight;
        this.root.style.marginLeft = margin;
        this.root.style.marginRight = margin;
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
