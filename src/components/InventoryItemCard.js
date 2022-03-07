import React from "react"

function InventoryItemCard({ item, onItemClick, onDelete }) {
  const { id, image, name, price } = item

 function handleDeleteClick(e) {
     e.stopPropagation()
     onDelete(id)
 }
  return (
    <div className="card" onClick={() => onItemClick(item)}>
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  )
}

export default InventoryItemCard
