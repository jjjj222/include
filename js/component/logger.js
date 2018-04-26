import * as layout_style from '../layout/style.js';
import { TextDisplay } from './text_display.js';
import * as time_util from '../util/time/time.js';

//------------------------------------------------------------------------------
//   Logger
//------------------------------------------------------------------------------
export class Logger {
    constructor(parent) {
        this.text_display = new TextDisplay(parent);
        this.root = this.text_display.root;

        this.root.classList.add("logger");
    }
}

//------------------------------------------------------------------------------
Logger.prototype.log = function(text) {
    const timestamp = `(${time_util.timestamp()})`;
    const line = `${timestamp} - ${text}`;
    this.text_display.println(line);
}
