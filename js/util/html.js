const escape_map = {
    '>': '&gt;',
    ' ': '&nbsp;',
}

export function escape(text) {
    let result = "";
    for (let i = 0; i < text.length; ++i) {
        const c = text[i];
        const str = escape_map[c]

        if (typeof str === 'string') {
            result += str;
        } else {
            result += c;
        }

    }
    return result;
}
