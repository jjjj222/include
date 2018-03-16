import { LayoutSwitch } from "./layout_switch.js";
import { Nav } from "../container/nav.js";
import { LayoutRow } from "./layout_row.js";

//------------------------------------------------------------------------------
//   LayoutSwitchWithNav
//------------------------------------------------------------------------------
/**
 * Class for creating a LayoutSwitch with the binded Nav on the top.
 */
export class LayoutSwitchWithNav {
    /**
     * Create a switch-based layout object with tab on the top.
     * @param {DOM} [parent] - The parent DOM to which this layout is attached.
     */
    constructor(parent) {
        const layout_row = new LayoutRow(parent);
        /**
         * The root div of this layout.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_switch_with_nav = new LayoutSwitchWithNav();
         * parent_div.appendChild(layout_switch_with_nav.root);
         */
        this.root = layout_row.root;

        const nav = new Nav();
        layout_row.addTop(nav.root)

        this._switch = new LayoutSwitch(layout_row.body, nav);
    }
}

//------------------------------------------------------------------------------
/**
 * Add a DOM to a new tab.
 * @param {DOM} dom - The DOM to be added.
 * @param {string} [label] - The label of tab of the Nav this switch is binded to.
 * @returns {function} The function to trigger the display of the added DOM.
 * @example
 * let layout_switch_with_nav = new LayoutSwitchWithNav(parent);
 * let display_fn = layout_switch_with_nav.add(div);
 * display_fn();
 */
LayoutSwitchWithNav.prototype.add = function(dom, label) {
    return this._switch.add(dom, label);
}
