import * as layout_style from './style.js';
import * as dom_util from '../util/dom.js';

//------------------------------------------------------------------------------
//   LayoutSwitch
//------------------------------------------------------------------------------
/**
 * Class for creating a display which can switch between tabs.
 */
export class LayoutSwitch {
    /**
     * Create a switch-based layout object.
     * @param {DOM} [parent] - The parent DOM to which this layout is attached.
     * @param {Nav} [binded_nav] - The Nav object that works with this layout.
     */
    constructor(parent, binded_nav) {
        /**
         * The root div of this layout.
         * @constant
         * @type {DOM}
         *
         * @example
         * let layout_switch = new LayoutSwitch();
         * parent_div.appendChild(layout_switch.root);
         */
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.className = "layout-switch";
        layout_style.set_fullsize_container(this.root);

        /**
         * The binded Nav object if specified.
         * @constant
         * @private
         * @type {Nav}
         */
        this._binded_nav = binded_nav;
    }
}

//------------------------------------------------------------------------------
/**
 * Add a DOM to a new tab.
 * @param {DOM} dom - The DOM to be added.
 * @param {string} [label] - The label of tab of the Nav this switch is binded to.
 * @returns {function} The function to trigger the display of the added DOM.
 * @example
 * let layout_switch = new LayoutSwitch(parent);
 * let display_fn = layout_switch.add(div);
 * display_fn();
 */
LayoutSwitch.prototype.add = function(dom, label) {
    const div = this._createNewTab(dom);

    const display_tab_fn = () => {
        this._displayTab(div);
    }

    const display_tab_and_active_nav_fn = (nav_item) => {
        display_tab_fn();
        nav_item.setSingleActive();
    }

    const remove_tab_fn = () => {
        this.root.removeChild(div);
    }

    if (this._binded_nav) {
        const item = this._binded_nav.add(label, display_tab_and_active_nav_fn, remove_tab_fn);

        if (this.root.childNodes.length == 1) {
            item.setActive();
        }

        return display_tab_and_active_nav_fn.bind(this, item);
    } else {
        return display_tab_fn; // TODO: not tested yet.
    }
}

//------------------------------------------------------------------------------
LayoutSwitch.prototype.clear = function() {
    dom_util.remove_all_child(this.root);
    if (this._binded_nav) {
        this._binded_nav.reset();
    }
}

//------------------------------------------------------------------------------
/**
 * Create a new div to host the added DOM.
 * @private
 * @param {DOM} dom - The DOM to be added.
 * @returns {DOM} The newly created div.
 */
LayoutSwitch.prototype._createNewTab = function(dom) {
    const div = document.createElement("div");
    layout_style.set_fullsize_container(div);
    div.appendChild(dom);

    this.root.appendChild(div);
    return div;
}

//------------------------------------------------------------------------------
/**
 * Display the specified div (and hide others).
 * @private
 * @param {DOM} div - The DOM to be displayed.
 */
LayoutSwitch.prototype._displayTab = function(div) {
    this.root.childNodes.forEach(n => {
        n.style.display = "none";
    });
    div.style.display = "";
}
