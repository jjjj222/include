export function remove_all_child(dom) {
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    }
}
