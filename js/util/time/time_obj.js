const format_util_common = require("../format.common.js");
const padZero = format_util_common.padZero;

//------------------------------------------------------------------------------
//   TimeObj
//------------------------------------------------------------------------------
class TimeObj {
    constructor(time) {
        if (time) {
            this._time = time;
        } else {
            this._time = Date.now();
        }
    }
}

//------------------------------------------------------------------------------
TimeObj.prototype.toString = function() {
    let time = this._time;
    const millisecond = padZero(time % 1000, 3);
    time = Math.floor(time / 1000);
    const second = padZero(time % 60);
    time = Math.floor(time / 60);
    const minute = padZero(time % 60);
    time = Math.floor(time / 60);
    const hour = padZero(time);

    return `${hour}:${minute}:${second}.${millisecond}`;
}

//------------------------------------------------------------------------------
TimeObj.prototype.toJSON = function() {
    const date_obj = new Date(this._time);
    return {
        year: date_obj.getFullYear(),
        month: padZero(date_obj.getMonth() + 1),
        day: padZero(date_obj.getDate()),
        hour: padZero(date_obj.getHours()),
        minute: padZero(date_obj.getMinutes()),
        second: padZero(date_obj.getSeconds()),
        millisecond: padZero(date_obj.getMilliseconds(), 3),
    }
}

//------------------------------------------------------------------------------
TimeObj.prototype.timestamp = function() {
    const json = this.toJSON();
    return `${json.year}-${json.month}-${json.day} ${json.hour}:${json.minute}:${json.second}`
}

//------------------------------------------------------------------------------
//   exports
//------------------------------------------------------------------------------
module.exports = TimeObj;
