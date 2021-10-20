import { getMetals, setMetal } from "./database.js"
import { Orders } from "./Orders.js"

const metals = getMetals()
const order = Orders()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// const foundMetal = metals.find((metal) => {
//         return metal.id === order.metalId
//     }
// )

// const totalCost = foundMetal.price

// const costString = totalCost.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD"
// })


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

