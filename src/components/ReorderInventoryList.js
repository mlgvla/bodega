import React from "react"
import InventoryItemCard from "./InventoryItemCard"

function ReorderInventoryList({ reOrderItems, onItemClick, onDelete }) {
  const reOrderList = reOrderItems.map(item => (
    <InventoryItemCard
      key={item.id}
      item={item}
      onItemClick={onItemClick}
      onDelete={onDelete}
    />
  ))
  return (
    <div id="reorder-container">
      <h2>Reorder</h2>
      <div>{reOrderList}</div>
    </div>
  )
}

export default ReorderInventoryList
