import { GraphBaseObj } from "./graph_base_obj.js";

//------------------------------------------------------------------------------
//   Group
//------------------------------------------------------------------------------
export class Group extends GraphBaseObj {
    constructor(id) {
        super(id);

        this.objs = new Set();
    }

    isGroup() {
        return true;
    }
}

//------------------------------------------------------------------------------
Group.prototype.add = function(obj) {
    this.objs.add(obj);
}

Group.prototype.remove = function(obj) {
    return this.objs.delete(obj);
}

Group.prototype.clear = function() {
    this.objs.clear();
}

//------------------------------------------------------------------------------
Group.prototype.has = function(obj) {
    return this.objs.has(obj);
}

Group.prototype.empty = function() {
    return this.objs.size == 0;
}

//------------------------------------------------------------------------------
Group.prototype.size = function() {
    return this.objs.size;
}

//------------------------------------------------------------------------------
Group.prototype.forEach = function(callback) {
    this.objs.forEach(callback);
}
