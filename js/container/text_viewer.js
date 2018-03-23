import * as layout_style from '../layout/style.js';

//------------------------------------------------------------------------------
//   TextViewer
//------------------------------------------------------------------------------
export class TextViewer {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add("text-viewer");
        layout_style.set_fullsize_container(this.root)
        this.root.style.overflow = "auto";

        this._mode= "pre"
    }
}

TextViewer.prototype.useMassMode = function() {
    this._mode = "mass";
}

TextViewer.prototype.setText = function(text) {
    this.root.innerHTML = "";
    let tag = "pre";
    if (this._mode == "mass") {
        tag = "p";
    }

    const pre = document.createElement(tag);
    pre.textContent = text;
    this.root.append(pre);

    if (this._mode == "mass") {
        pre.style.wordBreak = "break-all";
    }
}
