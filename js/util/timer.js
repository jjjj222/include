import * as time_util from './time.js';

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

//------------------------------------------------------------------------------
//   TimeObj
//------------------------------------------------------------------------------
class TimeObj {
    constructor(time) {
        this._time = time;
    }
}

TimeObj.prototype.toString = function() {
    return time_util.millisecond_to_str(this._time);
}
