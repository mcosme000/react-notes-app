import { createContext, useState, useEffect } from 'react'
import { onSnapshot, addDoc } from "firebase/firestore"
import { itemsCollection } from "../firebase"

const ItemsContext = createContext()

function Provider({children}) {
  const [itemsData, setItemsData] = useState([])
  const [filter, setFilter] = useState([])
  const [currentTab, setCurrentTab] = useState('all')


  useEffect(() => {
   const unsubscribe = onSnapshot(itemsCollection, (snapshot) => {
      const itemsArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setItemsData(itemsArr)
      setFilter(itemsArr)
    })
    return unsubscribe
  }, [])

  const addItem = (newItem) => {
    addDoc(itemsCollection, newItem)
  }

  const filterElements = (filterList) => {
    setFilter(filterList)
  }

  const elements = {
    itemsData: itemsData,
    filter: filter,
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    addItem: addItem,
    filterElements: filterElements
  }


  return (
    <ItemsContext.Provider value={elements}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContext
export { Provider }
