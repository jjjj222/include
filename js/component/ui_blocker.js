//------------------------------------------------------------------------------
//   UIBlocker
//------------------------------------------------------------------------------
export class UIBlocker {
    constructor() {
        this.root = document.createElement('div');
        this.root.style.position = 'absolute';
        this.root.style.top = '0';
        this.root.style.left = '0';
        this.root.style.width = '100%';
        this.root.style.height = '100%';
        this.root.style.zIndex = '1000';
        //this.root.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.root.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

        this.root.style.display = 'flex';
        this.root.style.flexDirection = 'column';
        //this.root.style.alignItems = 'center';
        this.root.style.justifyContent = 'space-around';

        this.root.dataset.testId = 'ui-blocker';

        this._text = undefined;
    }

    set text(val) {
        if (! this._text) {
            this._text = document.createElement('div');
        }

        this._text.textContent = val;
        this._text.style.textAlign = 'center';
        this._text.style.verticalAlign = 'middle';
        this._text.style.fontSize = '10vw';
        this._text.style.userSelect = 'none';

        this.root.appendChild(this._text);
    }
}

//------------------------------------------------------------------------------
UIBlocker.prototype.block = function(text) {
    if (text) {
        this.text = text;
    }

    document.body.appendChild(this.root);
}

//------------------------------------------------------------------------------
UIBlocker.prototype.stop = function() {
    document.body.removeChild(this.root);
}
