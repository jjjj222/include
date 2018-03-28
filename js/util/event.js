//------------------------------------------------------------------------------
export function on(event_name, callback) {
    this.root.addEventListener(event_name, (event) => {
        callback(event, this);
    });
}
