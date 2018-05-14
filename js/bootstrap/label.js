import { BootstrapObj } from './base_obj.js';

//------------------------------------------------------------------------------
//   Button
//------------------------------------------------------------------------------
export class Label extends BootstrapObj {
    constructor(text) {
        super('label');
        this.text = text;
    }

    set text(val) {
        this.root.textContent = val;
    }
}
