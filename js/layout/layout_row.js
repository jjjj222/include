import * as layout_style from './style.js';

//------------------------------------------------------------------------------
//   LayoutRow
//------------------------------------------------------------------------------
export class LayoutRow {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.className = "layout-row";
        layout_style.set_row_container(this.root)

        const main_section = document.createElement("div")
        layout_style.set_row_container(main_section)
        layout_style.set_main_section(main_section)
        this.root.appendChild(main_section)

        this.body = document.createElement("div")
        layout_style.set_main_section(this.body)
        main_section.appendChild(this.body)
    }
}

//------------------------------------------------------------------------------
LayoutRow.prototype.addTop = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.insertBefore(dom, this.root.firstChild)

    return dom
}

//------------------------------------------------------------------------------
LayoutRow.prototype.addBottom = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.appendChild(dom)

    return dom
}
