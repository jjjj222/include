import * as layout_style from '../layout/style.js';
import * as html_util from "../util/html.js";

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
        //this.root.style.overflow = "auto";
        this.root.style.overflowY = "auto";
        this.root.style.overflowWrap = "break-word";
        this.root.style.fontFamily = 'Courier New';

        this.max_history = null;
    }

    get length() {
        return this.root.childElementCount;
    }

    set fontFamily(val) {
        this.root.style.fontFamily = val;
    }

    //set wrap(val) {
    //    //if (val) {
    //    //    this.root.style.overflow = null;
    //    //    this.root.style.overflowY = "auto";
    //    //} else {
    //    //    this.root.style.overflow = "auto";
    //    //}
    //}
}

//------------------------------------------------------------------------------
TextDisplay.prototype.write = function(text) {
    if (this.length == 0) {
        this._addNewLine();
    }

    const lines = text.split('\n');

    lines.forEach(line => {
        this.root.lastChild.innerHTML += html_util.escape(line);
        this._addNewLine();
    })

    this._removeLastLine();
    this._removeHistory();
    this._scrollToBottom();
}

//------------------------------------------------------------------------------
//TextDisplay.prototype.print = function(text) {
//    this._addNewLine(text);
//    this._removeHistory();
//    this._scrollToBottom();
//}

//------------------------------------------------------------------------------
TextDisplay.prototype.println = function(text) {
    this.write(text + '\n');
}

//------------------------------------------------------------------------------
TextDisplay.prototype._addNewLine = function() {
    const line = document.createElement("p");
    line.style.margin = "0";
    line.style.padding = "0";
    //line.textContent = text;

    this.root.append(line);
}

//------------------------------------------------------------------------------
TextDisplay.prototype._scrollToBottom = function() {
    this.root.scrollTop = this.root.scrollHeight;
}

//------------------------------------------------------------------------------
TextDisplay.prototype._removeLastLine = function() {
    this.root.removeChild(this.root.lastChild);
}

//------------------------------------------------------------------------------
TextDisplay.prototype._removeFirstLine = function() {
    this.root.removeChild(this.root.firstChild);
}

//------------------------------------------------------------------------------
TextDisplay.prototype._removeHistory = function() {
    if (this.max_history == null) {
        return;
    }

    while (this.length > this.max_history) {
        this._removeFirstLine();
    }
}
