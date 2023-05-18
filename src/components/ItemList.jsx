import { useContext } from 'react'
import Item from "./Item"
import ItemsContext from "../context/Items"

const ItemList = ({onClick, onEdit}) => {
  const { filter } = useContext(ItemsContext)

  const renderItems = filter.map((item) => {
    return <Item data={item} key={item.id} onClick={onClick} onEdit={onEdit}/>
  })

  const handleClick = () => {
    onClick()
    onEdit()
  }

  return (
    <div className="p-2 md:p-5 h-full">
     {renderItems.length === 0 &&
      <div className="h-full flex flex-col md:items-center justify-center">
        <p>You don't have any items saved yet</p>
        <p>Why don't you add some for this category?</p>
        <button className="btn btn-big mt-2 bg-green-default hover:bg-green-hover" onClick={handleClick}>Add item</button>
      </div>}

      <div>
        {renderItems.length > 0 && <button className="btn btn-big bg-green-default hover:bg-green-hover" onClick={handleClick}>Add item</button>}
        <div className="mt-4 md:grid md:grid-cols-2 md:gap-4 overflow-auto">
          {renderItems}
        </div>
      </div>
    </div>


  )
}

export default ItemList
