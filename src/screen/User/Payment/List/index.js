import React from "react";

import Item from "./Item";

const List = ({ cart }) => {
    const renderItem = (item, index) => (<Item key={index} item={item} />)
    return cart.items.map(renderItem)
}

export default List
