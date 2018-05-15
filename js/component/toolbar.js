import { Button } from '../bootstrap/button.js';
import { Label } from '../bootstrap/label.js';
import { Form } from '../bootstrap/form/form.js';
import { TextInput } from '../bootstrap/form/text_input.js';
import { Checkbox } from '../bootstrap/form/checkbox.js';

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

        const form = document.createElement('form');
        form.classList.add('form-inline');
        this.root.appendChild(form);

        this.left_group = document.createElement('div');
        this.left_group.classList.add('form-group');
        form.appendChild(this.left_group);

        this.right_group = document.createElement('div');
        this.right_group.classList.add('form-group');
        this.right_group.classList.add('ml-auto');
        form.appendChild(this.right_group);

        //this.form_right = document.createElement('form');
        //this.form_right.classList.add('form-inline');
        //this.form_right.classList.add('ml-auto');
        //this.root.appendChild(this.form_right);

        this.form = this.left_group
        //this.align_right = false;
    }
}

//------------------------------------------------------------------------------
Toolbar.prototype.setAppendRight = function(val = true) {
    if (val) {
        this.form = this.right_group;
    } else {
        this.form = this.left_group;
    }
}

//------------------------------------------------------------------------------
Toolbar.prototype.addCheckbox = function(label, callback) {
    const checkbox = new Checkbox(label, callback);

    const margin = '10px'
    checkbox.root.style.marginLeft = margin;
    checkbox.root.style.marginRight = margin;

    this.form.appendChild(checkbox.root);
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

//Toolbar.prototype.addInput = function(callback) {
Toolbar.prototype.addInput = function() {
    const input = new TextInput();
    input.setSmall();
    input.setNoRadius();
    input.setNoHighlight();

    this.form.appendChild(input.root);

    //input.on('input', () => {
    //    //console.log(input.root.value);
    //    callback(input.root.value);
    //})

    //input.on('keydown', event => {
    //    event.stopPropagation();

    //    //console.log(event.key);
    //    if (event.key == 'Enter') {
    //        event.preventDefault();
    //    //    cli_mgr.process(input.value);
    //    //    input.value = "";
    //    //} else if (event.key == 'Tab') {
    //    //    event.preventDefault();
    //    //    console.log('qq tab');
    //    }
    //})

    return input;
}

Toolbar.prototype.addLabel = function(text) {
    const label = new Label(text);

    const margin = '10px'
    label.root.style.marginLeft = margin;
    label.root.style.marginRight = margin;
    //const l = document.createElement('label');
    //l.textContent = 'qqq';
    this.form.appendChild(label.root);

    return label;
}

//------------------------------------------------------------------------------
//   
//------------------------------------------------------------------------------
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
//class FormCheck {
//    constructor(label, callback) {
//        const checkbox = new Checkbox(label, callback);
//        this.root = checkbox.root;
//        //super();
//
//        //this.root = document.createElement("div");
//        //this.root.classList.add("form-check");
//
//        //const margin = '10px'
//
//        ////this.root.style.marginLeft = this.marginLeft;
//        ////this.root.style.marginRight = this.marginRight;
//        //this.root.style.marginLeft = margin;
//        //this.root.style.marginRight = margin;
//        //this.root.style.userSelect = "none";
//
//        //const label_dom = document.createElement("label");
//        //label_dom.classList.add("form-check-label");
//        //this.root.appendChild(label_dom);
//
//        //const input = document.createElement("input");
//        //input.type = "checkbox";
//        //input.classList.add("form-check-input");
//        //label_dom.appendChild(input);
//
//        //const text = document.createTextNode(label);
//        //label_dom.appendChild(text);
//
//        //input.addEventListener('click', event => {
//        //    event.stopPropagation();
//
//        //    callback(input.checked);
//        //})
//    }
//}
