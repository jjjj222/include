import * as event_util from "../util/event.js";

//------------------------------------------------------------------------------
//   Button
//------------------------------------------------------------------------------
export class Button {
    constructor(text) {
        this.root = document.createElement('button');

        this.root.type = 'button';
        this.root.textContent = text;
        this.root.classList.add('btn');
        //this.root.classList.add('btn-primary');
    }

    set borderRadius(val) {
        this.root.style.borderRadius = val;
    }
}

Button.prototype.on = event_util.on;
