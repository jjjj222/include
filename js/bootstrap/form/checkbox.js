import { BootstrapObj } from '../base_obj.js';

//------------------------------------------------------------------------------
//   TextInput
//------------------------------------------------------------------------------
export class Checkbox extends BootstrapObj {
    constructor(label, callback) {
        super('div');

        this.root.classList.add("form-check");
        this.setNoSelect();
        //this.root.style.userSelect = "none";

        const label_dom = document.createElement("label");
        label_dom.classList.add("form-check-label");
        this.root.appendChild(label_dom);

        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("form-check-input");
        label_dom.appendChild(input);

        const text = document.createTextNode(label);
        label_dom.appendChild(text);

        this.on('click', () => {
            callback(input.checked);
        })
    }
}
