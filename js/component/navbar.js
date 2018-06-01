//------------------------------------------------------------------------------
//   Navbar
//------------------------------------------------------------------------------
export function Navbar(parent) {
    this.root = document.createElement("nav");
    if (parent) {
        parent.appendChild(this.root);
    }

    this.root.classList.add("navbar");
    this.root.classList.add("navbar-expand-sm");
    this.root.classList.add("navbar-dark");
    this.root.classList.add("navbar-custom");

    this.root.dataset.testId = "navbar";

    this.left = document.createElement("div");
    this.root.appendChild(this.left);

    this.center = document.createElement("div");
    this.center.classList.add("mx-auto");
    this.root.appendChild(this.center);

    this.right = document.createElement("div");
    this.right.classList.add("ml-auto");
    this.root.appendChild(this.right);
}

//------------------------------------------------------------------------------
Navbar.prototype.appendRight = function(dom) {
   this.right.appendChild(dom);
}

Navbar.prototype.appendLeft = function(dom) {
   this.left.appendChild(dom);
}

//------------------------------------------------------------------------------
Navbar.prototype.addBrand = function(text, href) {
    const brand = new NavbarBrand(text, href);
    this.root.insertBefore(brand.root, this.root.firstChild);
}

//------------------------------------------------------------------------------
Navbar.prototype.appendFileInputBtn = function(text, callback) {
    const file_input_form = new FileInputForm("Browse", callback);
    this.appendRight(file_input_form.root);
}

//------------------------------------------------------------------------------
//   NavbarBrand
//------------------------------------------------------------------------------
function NavbarBrand(text, href) {
    this.root = document.createElement("a");

    this.root.classList.add("navbar-brand")
    this.root.href = href
    this.root.textContent = text
    this.root.style.userSelect = "none";

    this.root.dataset.testId = "navbar-brand";
}

//------------------------------------------------------------------------------
//   FileInputForm
//------------------------------------------------------------------------------
function FileInputForm(text, callback) {
    this.root = document.createElement("form");
    this.root.className = "form-inline";

    this.root.dataset.testId = "browse-file-input";

    const label = document.createElement("label");
    label.classList.add("navbar-text");
    label.textContent = "No file chosen";
    label.style.marginRight = "10px";
    label.dataset.testId = "browse-file-input-label";
    this.root.appendChild(label);

    const btn = document.createElement("span");
    btn.classList.add("btn");
    btn.classList.add("btn-outline-light");
    btn.textContent = text;
    btn.style.overflow = "hidden";
    btn.style.position = "relative";
    btn.dataset.testId = "browse-file-input-button";
    this.root.appendChild(btn);


    const input = document.createElement("input");
    input.type = "file"
    btn.appendChild(input);

    const onchange_fn = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        label.textContent = file.name;
        callback(file);
    }

    input.addEventListener('change', onchange_fn);
    input.addEventListener('click', () => {
        input.value = null;
    })

    input.title = " ";
    input.style.position = "absolute";
    input.style.top = "0px";
    input.style.right = "0px";
    input.style.minWidth = "100%";
    input.style.minHeight = "100%";
    input.style.outline = "none";
    input.style.opacity = "0";
}
