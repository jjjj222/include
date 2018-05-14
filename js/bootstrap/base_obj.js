import * as event_util from "../util/event.js";
import * as bootstrap_util from './util.js';

//------------------------------------------------------------------------------
//   BootstrapObj
//------------------------------------------------------------------------------
export class BootstrapObj {
    constructor(type) {
        this.root = document.createElement(type);
    }

    /**
     * The border-radius of this button. (setter only for now)
     * @type {string}
     */
    set borderRadius(val) {
        this.root.style.borderRadius = val;
    }
}

//------------------------------------------------------------------------------
BootstrapObj.prototype.setNoRadius = function() {
    this.borderRadius = 0;
}

//------------------------------------------------------------------------------
BootstrapObj.prototype.setNoHighlight = function() {
    bootstrap_util.setNoOutlineHighlight(this.root);
}

//------------------------------------------------------------------------------
BootstrapObj.prototype.setNoSelect = function() {
    this.root.style.userSelect = "none";
}

//------------------------------------------------------------------------------
BootstrapObj.prototype.on = event_util.on;
