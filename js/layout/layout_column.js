import * as layout_style from './style.js';
import * as drag_util from "../util/drag.js";

//------------------------------------------------------------------------------
//   LayoutColumn
//------------------------------------------------------------------------------
export class LayoutColumn {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add("layout-column");
        layout_style.set_column_container(this.root);

        const main_section = document.createElement("div")
        layout_style.set_column_container(main_section)
        layout_style.set_main_section(main_section)
        this.root.appendChild(main_section)

        this.body = document.createElement("div")
        layout_style.set_main_section(this.body)
        main_section.appendChild(this.body)
    }
}

//------------------------------------------------------------------------------
LayoutColumn.prototype.addLeft = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.insertBefore(dom, this.root.firstChild)

    return dom
}

//------------------------------------------------------------------------------
LayoutColumn.prototype.addRight = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.appendChild(dom)

    return dom
}

//------------------------------------------------------------------------------
LayoutColumn.prototype.addLeftResizable = function(width) {
    const resizable_div = document.createElement("div");
    resizable_div.style.position = "relative";
    resizable_div.style.boxSizing = "border-box";
    resizable_div.style.flexShrink = "0";
    this.root.insertBefore(resizable_div, this.root.firstChild)

    const body = document.createElement("div")
    layout_style.set_fullsize_container(body);
    body.style.overflow = "auto";
    resizable_div.appendChild(body);

    const resizer = document.createElement("div");
    resizer.classList.add("resizer");
    resizer.style.right = "0px";

    drag_util.drag(resizer, (e) => {
        const bbox = resizable_div.getBoundingClientRect();
        const x = e.pageX - bbox.x;
        const w = Math.max(5, x) + 1;
        resizable_div.style.width = w + "px";
    });

    resizable_div.appendChild(resizer);

    if (width) {
        resizable_div.style.width = width;
    }

    return body
}

//------------------------------------------------------------------------------
LayoutColumn.prototype.addRightResizable = function(width) {
    const resizable_div = document.createElement("div");
    resizable_div.style.position = "relative";
    resizable_div.style.boxSizing = "border-box";
    resizable_div.style.flexShrink = "0";
    this.root.appendChild(resizable_div);

    const body = document.createElement("div")
    layout_style.set_fullsize_container(body);
    body.style.overflow = "auto";
    resizable_div.appendChild(body);

    const resizer = document.createElement("div");
    resizer.classList.add("resizer");
    resizer.style.left = "0px";

    drag_util.drag(resizer, (e) => {
        const bbox = resizable_div.getBoundingClientRect();
        const x = e.pageX - bbox.x;
        let w = bbox.width - x;
        w = Math.max(5, w) + 1;
        resizable_div.style.width = w + "px";
    });

    resizable_div.appendChild(resizer);

    if (width) {
        resizable_div.style.width = width;
    }

    return body
}
