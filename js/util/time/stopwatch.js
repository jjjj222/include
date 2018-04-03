import { Timer } from './timer.js';

//------------------------------------------------------------------------------
//   Stopwatch
//------------------------------------------------------------------------------
export class Stopwatch {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.timer = new Timer();
        requestAnimationFrame(this._step.bind(this));
    }

    get now() {
        return this.timer.now;
    }
}

//------------------------------------------------------------------------------
Stopwatch.prototype._step = function() {
    this.root.innerHTML = this.timer.now.toString();
    requestAnimationFrame(this._step.bind(this));
}
