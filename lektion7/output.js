let brElement = document.createElement('br')

function output() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "object") {
            let text = document.createTextNode(JSON.stringify(arguments[i]) + " ")
            document.body.append(text)
        }
        else {
            let text = document.createTextNode(arguments[i] + " ")
            document.body.append(text)
        }
    }
    document.body.append(brElement.cloneNode())
}
