import { BootstrapObj } from './base_obj.js';

//------------------------------------------------------------------------------
//   FormInput
//------------------------------------------------------------------------------
export class FormInput extends BootstrapObj {
    constructor() {
        super('input');

        //this.root = document.createElement('input');
        this.root.type = 'text';
        this.root.classList.add('form-control');
    }
}

//------------------------------------------------------------------------------
FormInput.prototype.setSmall = function() {
    this.root.classList.add('form-control-sm');
}
