import * as layout_style from '../layout/style.js';

//------------------------------------------------------------------------------
//   TextDisplay
//------------------------------------------------------------------------------
export class TextDisplay {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        layout_style.set_fullsize_container(this.root)
        this.root.style.overflow = "auto";

        this.max_history = null;
    }

    get length() {
        return this.root.childElementCount;
    }
}

//------------------------------------------------------------------------------
TextDisplay.prototype.print = function(text) {
    if (this.max_history != null && this.length == this.max_history) {
        this.root.removeChild(this.root.firstChild);
    }

    const line = document.createElement("p");
    line.style.margin = "0";
    line.style.padding = "0";
    line.textContent = text;

    this.root.append(line);
    this.root.scrollTop = this.root.scrollHeight;
}
