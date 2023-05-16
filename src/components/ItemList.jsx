import { useContext } from 'react'
import Item from "./Item"
import ItemsContext from "../context/Items"

const ItemList = () => {
  const { itemsData } = useContext(ItemsContext)
  const renderedItems = itemsData.map((item) => {
    return <Item data={item} key={item.id}/>
  })

  return (
    <div className="p-5 md:grid md:grid-cols-2 lg:gap-4">
      {renderedItems}
    </div>
  )
}

export default ItemList
