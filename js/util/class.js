//------------------------------------------------------------------------------
export function set_readonly(obj, property_name, val) {
    Object.defineProperty(obj, property_name, {
        value: (typeof val != "undefined") ? val : obj[property_name],
        writable: false,
    })
}

//------------------------------------------------------------------------------
export function set_super(obj, function_names) {
    const prototype = obj.__proto__.__proto__;
    obj.super = {};

    if (! function_names) {
        function_names = Object.keys(prototype);
    }

    function_names.forEach(key => {
        obj.super[key] = prototype[key].bind(obj);
    })
}
