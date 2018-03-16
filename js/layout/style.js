/** @module layout/style */

/**
 * Set the current DOM object to be the size of its parent.
 * @param {DOM} dom - The target DOM to be styled.
 */
export function set_fullsize_container(dom) {
    dom.style.boxSizing = "border-box";
    dom.style.height = "100%";
    dom.style.width = "100%";
    dom.style.margin = "0px";
    dom.style.overflow = "hidden";
}

/**
 * TODO
 * @param {DOM} dom - The target DOM to be styled.
 */
export function set_row_container(dom) {
    set_fullsize_container(dom);
    set_flex_container(dom);
    dom.style.flexDirection = "column";
}

/**
 * TODO
 * @param {DOM} dom - The target DOM to be styled.
 */
export function set_column_container(dom) {
    set_fullsize_container(dom);
    set_flex_container(dom);
    dom.style.flexDirection = "row";
}

/**
 * TODO
 * @param {DOM} dom - The target DOM to be styled.
 */
export function set_main_section(dom) {
    dom.style.boxSizing = "border-box";
    dom.style.height = "100%";
    dom.style.width = "100%";
    dom.style.margin = "0px";
    dom.style.padding = "0px";
    dom.style.flexGrow = "1";
}

function set_flex_container(dom) {
    dom.style.display = "flex";
    dom.style.justifyContent = "flex-start";
    dom.style.alignItems = "stretch";
    dom.style.alignContent = "stretch";
}
