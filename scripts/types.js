import { getTypes, setTypes } from "./dataAccess.js";

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setTypes(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const typeObj of types) {
        html += `<li>
            <input type="radio" checked ="checked" name="type" value="${typeObj.id}" /> ${typeObj.type}
        </li>`
    }

    html += "</ul>"
    return html
}