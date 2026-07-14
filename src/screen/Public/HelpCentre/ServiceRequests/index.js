import React from "react";

import Item from "./Item";

export default (props) => {
    const renderItem = (item) => (<Item item={item} />)
    return props.list.map(renderItem)
}