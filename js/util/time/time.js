const TimeObj = require("./time_obj.js");

//------------------------------------------------------------------------------
export function timestamp() {
    const time_obj =  new TimeObj();
    return time_obj.timestamp();
}
