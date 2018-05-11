import { Node } from "../graph/node.js";

//------------------------------------------------------------------------------
//   UINode
//------------------------------------------------------------------------------
export class UINode extends Node {
    constructor(id) {
        super(id);

        this.is_selected = false;
        this.near_selected_count = 0;
    }

    isNearSelected() {
        return this.near_selected_count > 0;
    }
}

//------------------------------------------------------------------------------
UINode.prototype.select = function(val = true) {
    if (val == this.is_selected) {
        return;
    }

    const inc_val = val ? 1 : -1;

    this.is_selected = val;

    this.inputs.forEach(e => {
        e.near_selected_count += inc_val;
        e.source.near_selected_count += inc_val;
    })

    this.outputs.forEach(e => {
        e.near_selected_count += inc_val;
        e.target.near_selected_count += inc_val;
    })
}

//------------------------------------------------------------------------------
UINode.prototype.resetSelect = function() {
    this.is_selected = false;
    this.near_selected_count = 0;
}
