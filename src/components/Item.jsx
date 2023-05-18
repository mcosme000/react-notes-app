import classnames from 'classnames'
import { useContext } from 'react'
import ItemsContext from '../context/Items'
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

const Item = ({data, onClick, onEdit}) => {

  const { itemsData, setSelectedItem, deleteItem } = useContext(ItemsContext)

  const cardClasses = classnames('mb-3 flex rounded-lg p-2 hover:cursor-pointer', {
    'bg-home-light hover:bg-home-medium': data.category.toLowerCase() === 'home',
    'bg-food-light hover:bg-food-medium': data.category.toLowerCase() === 'food',
    'bg-presents-light hover:bg-presents-medium': data.category.toLowerCase() === 'presents',
    'bg-fashion-light hover:bg-fashion-medium': data.category.toLowerCase() === 'fashion'
  })

  const tagClasses = classnames('flex items-center py-1 px-4 font-bold text-xs rounded-2xl', {
    'bg-home-dark': data.category.toLowerCase() === 'home',
    'bg-food-dark': data.category.toLowerCase() === 'food',
    'bg-presents-dark': data.category.toLowerCase() === 'presents',
    'bg-fashion-dark': data.category.toLowerCase() === 'fashion'
  })



  const handleClick = (e) => {
    e.stopPropagation()
    const clickedId = data.id
    const selectedItem = itemsData.filter(item => item.id === clickedId)
    setSelectedItem(selectedItem)
    onClick()
    onEdit("edit")
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you wish to delete this item?')) {
      deleteItem(data.id)
    }
  }

  return (
    <div className={cardClasses} onClick={() => window.open(data.link, "_blank")}>
      <div className="w-16 h-16 md:w-36 md:h-28">
        <img src={data.image || 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80'}
        alt="product"/>
      </div>
      <div className="w-full px-2 flex flex-col">
        <div className="flex-grow flex items-start">
          <div className="flex-grow">
            <h3 className="text-base lg:text-lg">{data.name}</h3>
            <p className="text-sm lg:text-base">{data.price} $</p>
          </div>
          {/* tag */}
          <div className={tagClasses}>
            <img
            src={require(`../media/${data.category}.png`)} alt="category icon"
            className="w-3 inline sm:mr-2"/>
            <p className="hidden sm:block">{data.category}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="inline-flex">
            <button className="bg-fashion-default flex align-center text-xs font-bold py-2 px-4 rounded-l"
            onClick={handleClick}>
              <span className="md:text-lg md:mr-1"><RiEdit2Fill /></span>
              {/* <p className="hidden lg:block">Edit</p> */}
            </button>
            <button className="bg-fashion-default flex align-center text-xs font-bold py-2 px-4 rounded-r" onClick={handleDelete}>
              <span className="md:text-lg md:mr-1"><RiDeleteBinFill /></span>
              {/* <p className="hidden lg:block">Delete</p> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
