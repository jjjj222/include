import * as layout_style from './style.js';
import * as drag_util from "../util/drag.js";

//------------------------------------------------------------------------------
//   LayoutColumn
//------------------------------------------------------------------------------
/**
 * Class for creating a column layout.
 */
export class LayoutColumn {
    /**
     * Create a column-based layout object.
     * @param {DOM} [parent] - The parent DOM to which this layout is attached.
     */
    constructor(parent) {
        /**
         * The root div of this layout.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_column = new LayoutColumn();
         * parent_div.appendChild(layout_column.root);
         */
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

        /**
         * The default part of the layout.
         * It's used for containing other divs.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_column = new LayoutColumn(parent);
         * layout_column.body.appendChild(div);
         */
        this.body = document.createElement("div")
        layout_style.set_main_section(this.body)
        main_section.appendChild(this.body)
    }
}

//------------------------------------------------------------------------------
/**
 * Add a DOM to the left of the layout.
 * @param {DOM} [dom] - The DOM to be added.
 * @returns {DOM} The DOM added.
 */
LayoutColumn.prototype.addLeft = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.insertBefore(dom, this.root.firstChild)

    return dom
}

//------------------------------------------------------------------------------
/**
 * Add a DOM to the right of the layout.
 * @param {DOM} [dom] - The DOM to be added.
 * @returns {DOM} The DOM added.
 */
LayoutColumn.prototype.addRight = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    this.root.appendChild(dom)

    return dom
}

//------------------------------------------------------------------------------
/**
 * Add a resizable pane to the left of the layout.
 * @param {string} [width] - The initial width of the pane in CSS Length Unit.
 * @returns {DOM} The DOM which is used for containing other divs.
 */
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
/**
 * Add a resizable pane to the right of the layout.
 * @param {string} [width] - The initial width of the pane in CSS Length Unit.
 * @returns {DOM} The DOM which is used for containing other divs.
 */
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
