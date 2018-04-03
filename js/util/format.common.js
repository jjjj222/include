function padZero(d, n = 2) {
    let result = "" + d;
    if (result.length < n) {
        result = Array(n - result.length + 1).join('0') + result;
    }
    return result;
}

//------------------------------------------------------------------------------
//   exports
//------------------------------------------------------------------------------
exports.padZero = padZero;
