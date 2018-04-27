export function enable_string_format() {
    String.prototype.format = function() {
        return [...arguments].reduce((p,c) => p.replace(/%s/,c), this);
    };
}

export function disable_string_format() {
    delete String.prototype.format;
}

//------------------------------------------------------------------------------
export function glob_to_js_reg_pattern(glob_pattern) {
    let result = "^";

    for (let i = 0; i < glob_pattern.length; ++i) {
        const c = glob_pattern[i];
        if (c == '*') {
            result += '.*';
        } else{
            result += c;
        }
    }

    result += '$';

    return result;
}
