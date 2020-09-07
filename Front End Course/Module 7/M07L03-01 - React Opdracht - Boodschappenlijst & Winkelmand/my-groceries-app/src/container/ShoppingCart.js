import React from "react"
import List from "../components/List/List.js"

const ShoppingCart = ({ shoppingListItems }) => {
    return (
        <List 
            items={shoppingListItems}
        />
    )
}

export default ShoppingCart