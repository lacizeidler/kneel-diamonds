import { getMetals, getOrders, getSizes, getStyles, getTypes } from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getTypes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSizes= sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundTypes = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    const initialCost = foundMetal.price + foundSizes.price + foundStyles.price
    const totalCost = initialCost * foundTypes.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

