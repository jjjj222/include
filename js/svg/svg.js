import { SvgObj } from './base_obj.js';

//------------------------------------------------------------------------------
//   Svg
//------------------------------------------------------------------------------
export class Svg extends SvgObj {
    constructor(parent) {
        super('svg');

        if (parent) {
            parent.appendChild(this.root);
        }
    }
}
