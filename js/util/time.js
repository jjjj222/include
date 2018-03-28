//------------------------------------------------------------------------------
export function pad(d, n = 2) {
    let result = "" + d;
    if (result.length < n) {
        result = Array(n - result.length + 1).join('0') + result;
    }
    return result;
}

//------------------------------------------------------------------------------
export function timestamp() {
    const now = new Date(Date.now());
    const year = now.getFullYear();
    const month = pad(now.getMonth());
    const day = pad(now.getDate());
    const hour = pad(now.getHours());
    const minute = pad(now.getMinutes());
    const second = pad(now.getSeconds());
    const timestamp = `(${year}-${month}-${day} ${hour}:${minute}:${second})`
    return timestamp;
}

//------------------------------------------------------------------------------
export function millisecond_to_str(time) {
    const millisecond = pad(time % 1000, 3);
    time = Math.floor(time / 1000);
    const second = pad(time % 60);
    time = Math.floor(time / 60);
    const minute = pad(time % 60);
    time = Math.floor(time / 60);
    const hour = pad(time);

    return `${hour}:${minute}:${second}.${millisecond}`;
}
