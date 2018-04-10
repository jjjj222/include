import * as layout_style from '../layout/style.js';
import * as time_util from '../util/time/time.js';

//------------------------------------------------------------------------------
//   Logger
//------------------------------------------------------------------------------
export class Logger {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add("logger");
        layout_style.set_fullsize_container(this.root)
        this.root.style.overflow = "auto";
    }
}

//------------------------------------------------------------------------------
Logger.prototype.log = function(text) {
    const timestamp = `(${time_util.timestamp()})`;

    const line = document.createElement("p");
    line.style.margin = "0";
    line.style.padding = "0";

    line.textContent = `${timestamp} - ${text}`;
    this.root.append(line);
    this.root.scrollTop = this.root.scrollHeight;
}
