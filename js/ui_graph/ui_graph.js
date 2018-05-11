import { Graph } from "../graph/graph.js";

//------------------------------------------------------------------------------
//   UIGraph
//------------------------------------------------------------------------------
export class UIGraph extends Graph {
    constructor() {
        super();
    }
}

//------------------------------------------------------------------------------
UIGraph.prototype.resetSelect = function() {
    this.nodes.forEach(n => {
        n.resetSelect();
        //n.is_selected = false;
        //n.near_selected_count = 0;
    })

    this.edges.forEach(e => {
        e.resetSelect();
        //e.is_selected = false;
        //e.near_selected_count = 0;
    })
}

//------------------------------------------------------------------------------
UIGraph.prototype.getSelectedNodes = function() {
    return this.nodes.filter(n => {
        return n.is_selected;
    })
}

