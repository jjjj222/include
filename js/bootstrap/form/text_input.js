import { BootstrapObj } from '../base_obj.js';

//------------------------------------------------------------------------------
//   TextInput
//------------------------------------------------------------------------------
export class TextInput extends BootstrapObj {
    constructor() {
        super('input');

        this.root.type = 'text';
        this.root.classList.add('form-control');
    }
}

//------------------------------------------------------------------------------
TextInput.prototype.setSmall = function() {
    this.root.classList.add('form-control-sm');
}
