import { Edge } from "../graph/edge.js";

//------------------------------------------------------------------------------
//   UIEdge
//------------------------------------------------------------------------------
export class UIEdge extends Edge {
    constructor(id, source, target) {
        super(id, source, target);

        this.is_selected = false;
        this.near_selected_count = 0;
    }

    isNearSelected() {
        return this.near_selected_count > 0;
    }
}

//------------------------------------------------------------------------------
UIEdge.prototype.select = function(val = true) {
    if (val == this.is_selected) {
        return;
    }

    const inc_val = val ? 1 : -1;

    this.is_selected = val;

    this.source.near_selected_count += inc_val;
    this.target.near_selected_count += inc_val;
}

//------------------------------------------------------------------------------
UIEdge.prototype.resetSelect = function() {
    this.is_selected = false;
    this.near_selected_count = 0;
}
