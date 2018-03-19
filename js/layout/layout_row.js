import * as layout_style from './style.js';

//------------------------------------------------------------------------------
//   LayoutRow
//------------------------------------------------------------------------------
/**
 * Class for creating a layered layout.
 */
export class LayoutRow {
    /**
     * Create a row-based layout object.
     * @param {DOM} [parent] - The parent DOM to which this layout is attached.
     */
    constructor(parent) {
        /**
         * The root div of this layout.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_row = new LayoutRow();
         * parent_div.appendChild(layout_row.root);
         */
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

        /**
         * The default part of the layout.
         * It's used for containing other divs.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_row = new LayoutRow(parent);
         * layout_row.body.appendChild(div);
         */
        this.body = document.createElement("div")
        layout_style.set_main_section(this.body)
        main_section.appendChild(this.body)
    }
}

//------------------------------------------------------------------------------
/**
 * Add a DOM on the top of the layout.
 * @param {DOM} [dom] - The DOM to be added.
 * @returns {DOM} The DOM added.
 * @example
 * let layout_row = new LayoutRow(parent);
 * layout_row.addTop(div);
 */
LayoutRow.prototype.addTop = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    dom.style.flexShrink = "0";
    this.root.insertBefore(dom, this.root.firstChild)

    return dom
}

//------------------------------------------------------------------------------
/**
 * Add a DOM at the bottom of the layout.
 * @param {DOM} [dom] - The DOM to be added.
 * @returns {DOM} The DOM added.
 * @example
 * let layout_row = new LayoutRow(parent);
 * layout_row.addBottom(div);
 */
LayoutRow.prototype.addBottom = function(dom) {
    if (!dom) {
        dom = document.createElement("div")
    }

    dom.style.flexShrink = "0";
    this.root.appendChild(dom)

    return dom
}
