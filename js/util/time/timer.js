const TimeObj = require("./time_obj.js");

//------------------------------------------------------------------------------
//   Timer
//------------------------------------------------------------------------------
export class Timer {
    constructor() {
        this._start = Date.now();
    }

    get now() {
        const diff = Date.now() - this._start;
        return new TimeObj(diff);
    }
}
