import { BootstrapObj } from './base_obj.js';

//------------------------------------------------------------------------------
//   Button
//------------------------------------------------------------------------------
/**
 * Class for creating a bootstrap 4 button.
 */
export class Button extends BootstrapObj {
    /**
     * Create a bootstarp 4 button
     * @param {string} [text] - The text of the button.
     */
    constructor(text) {
        super('button');

        //this.root = document.createElement('button');

        this.root.type = 'button';
        this.root.textContent = text;
        this.root.classList.add('btn');

        //this.root.style.userSelect = "none";
        this.setNoSelect();
    }

    ///**
    // * The border-radius of this button. (setter only for now)
    // * @type {string}
    // */
    //set borderRadius(val) {
    //    this.root.style.borderRadius = val;
    //}
}

//------------------------------------------------------------------------------
Button.prototype.setSmall = function() {
    this.root.classList.add('btn-sm');
}
