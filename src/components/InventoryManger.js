import React, { useState, useEffect } from "react"
import CurrentInventoryList from "./CurrentInventoryList"
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/inventory")
      .then(res => res.json())
      .then(items => {
        let modifiedItems = items.map(item => {
          return { ...item, reOrder: false }
        })
        setInventory(modifiedItems)
      })
  }, [])

  function handleItemClick(item) {
    let updatedItem = { ...item, reOrder: !item.reOrder }

    let itemIdx = inventory.findIndex(element => {
      return element.id === item.id
    })
    let updatedInventory = [
      ...inventory.slice(0, itemIdx),
      updatedItem,
      ...inventory.slice(itemIdx + 1),
    ]
    setInventory(updatedInventory)
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:8001/inventory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedInventory = inventory.filter(item => item.id !== id)
      setInventory(updatedInventory)
    })
  }

  const reOrderItems = inventory.filter(item => item.reOrder)

  return (
    <div className="container">
      <CurrentInventoryList
        inventory={inventory}
        onItemClick={handleItemClick}
        onDelete={handleDeleteClick}
      />
      <ReorderInventoryList
        reOrderItems={reOrderItems}
        onItemClick={handleItemClick}
        onDelete={handleDeleteClick}
      />
    </div>
  )
}

export default InventoryManager
