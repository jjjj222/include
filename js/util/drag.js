export function drag(dom, mousemove_callback, mousedown_callback) {
    const disable_select_fn = (e) => {
        e.preventDefault();
    };

    const mousedown_fn = (e) => {
        e.stopPropagation();

        if (mousedown_callback) {
            mousedown_callback(e);
        }

        const mousemove_fn = (e) => {
            e.stopPropagation();

            mousemove_callback(e);
        };

        let mouseup_fn = function(e) {
            e.stopPropagation();
            window.removeEventListener("mousemove", mousemove_fn);
            window.removeEventListener("mouseup", this);
            window.removeEventListener("selectstart", disable_select_fn);
        };
        mouseup_fn = mouseup_fn.bind(mouseup_fn);

        window.addEventListener("mousemove", mousemove_fn);
        window.addEventListener("selectstart", disable_select_fn);
        window.addEventListener("mouseup", mouseup_fn);
    };

    dom.addEventListener("mousedown", mousedown_fn);
}
