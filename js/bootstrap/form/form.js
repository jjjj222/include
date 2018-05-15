import { BootstrapObj } from '../base_obj.js';

//------------------------------------------------------------------------------
//   Form
//------------------------------------------------------------------------------
export class Form extends BootstrapObj {
    constructor() {
        super('form');
    }
}

//------------------------------------------------------------------------------
Form.prototype.setInline = function() {
    this.root.classList.add('form-inline');
}
