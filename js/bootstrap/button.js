import * as event_util from "../util/event.js";

//------------------------------------------------------------------------------
//   Button
//------------------------------------------------------------------------------
/**
 * Class for creating a bootstrap 4 button.
 */
export class Button {
    /**
     * Create a bootstarp 4 button
     * @param {string} [text] - The text of the button.
     */
    constructor(text) {
        this.root = document.createElement('button');

        this.root.type = 'button';
        this.root.textContent = text;
        this.root.classList.add('btn');
    }

    /**
     * The border-radius of this button.
     * @type {string}
     */
    set borderRadius(val) {
        this.root.style.borderRadius = val;
    }
}

//------------------------------------------------------------------------------
Button.prototype.on = event_util.on;
