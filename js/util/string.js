export function enable_string_format() {
    String.prototype.format = function() {
        return [...arguments].reduce((p,c) => p.replace(/%s/,c), this);
    };
}

export function disable_string_format() {
    delete String.prototype.format;
}
