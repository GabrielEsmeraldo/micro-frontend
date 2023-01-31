export function emitEvent(name, data) {
    dispatchEvent(new CustomEvent(name, data))
}

export function listenEvent(name, event) {
    window.addEventListener(name, event)
}
