import Form from '../components/Form'
import EditForm from '../components/EditForm'
import { useContext } from 'react'
import ItemsContext from '../context/Items'

const Overlay = ({onClick, isEdit}) => {
  const { selectedItem } = useContext(ItemsContext)
  return (
    <div className="absolute top-0 left-0 rounded-md grid items-center w-full h-full bg-overlay bg-opacity-80">
      { isEdit ? <EditForm onClick={onClick} item={selectedItem}/> : <Form onClick={onClick}/> }
    </div>
  )
}

export default Overlay
