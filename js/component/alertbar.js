//------------------------------------------------------------------------------
//   Alertbar
//------------------------------------------------------------------------------
export function Alertbar(parent) {
    this.root = document.createElement("div");
    if (parent) {
        parent.appendChild(this.root);
    }

    this.root.classList.add('alertbar');
}

//------------------------------------------------------------------------------
Alertbar.prototype.reset = function() {
    this.root.innerHTML = "";
}

//------------------------------------------------------------------------------
Alertbar.prototype.addWarning = function(text, title="Warning!") {
    return this._addMessage("alert-warning", title, text);
}

//------------------------------------------------------------------------------
Alertbar.prototype.addError = function(text, title="Error!") {
    return this._addMessage("alert-danger", title, text);
}

//------------------------------------------------------------------------------
Alertbar.prototype.addInfo = function(text, title="Info!") {
    return this._addMessage("alert-info", title, text);
}

//------------------------------------------------------------------------------
Alertbar.prototype._addMessage = function(type, title, text) {
    const {message_bar, close_fn} = this._createMessageBar();
    message_bar.classList.add(type);
    this.root.appendChild(message_bar);

    const strong = document.createElement("strong");
    strong.textContent = title;
    message_bar.appendChild(strong);

    const textNode = document.createTextNode(" " + text);
    message_bar.appendChild(textNode);

    return close_fn;
}

//------------------------------------------------------------------------------
Alertbar.prototype._createMessageBar = function() {
    const message_bar = document.createElement("div");

    message_bar.classList.add("alert");
    message_bar.classList.add("mb-0");
    message_bar.setAttribute("role", "alert");
    message_bar.style.borderRadius = "0";

    const button = document.createElement("button");
    button.classList.add("close");
    button.type = "button";
    message_bar.appendChild(button);

    const x = document.createElement("span");
    x.setAttribute("aria-hidden", true);
    x.innerHTML = "&times;";
    button.appendChild(x);

    const close_fn = () => {
        this.root.removeChild(message_bar);
    }

    x.addEventListener("click", close_fn)

    return {message_bar, close_fn};
}
