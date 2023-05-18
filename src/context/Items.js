import { createContext, useState, useEffect } from 'react'
import { onSnapshot, doc, addDoc, setDoc, deleteDoc } from "firebase/firestore"
import { itemsCollection, db } from "../firebase"

const ItemsContext = createContext()

function Provider({children}) {
  const [itemsData, setItemsData] = useState([])
  const [filter, setFilter] = useState([])
  const [currentTab, setCurrentTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState([])

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

  const editItem = async (item) => {
    const docRef = doc(db, 'items', item.id)
    await setDoc(docRef, item, { merge: true})
  }

  const deleteItem = async(itemId) => {
    const docRef = doc(db, 'items', itemId)
    await deleteDoc(docRef)
  }

  const filterElements = (filterList) => {
    setFilter(filterList)
  }

  const elements = {
    itemsData: itemsData,
    filter: filter,
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    selectedItem: selectedItem,
    setSelectedItem: setSelectedItem,
    addItem: addItem,
    editItem: editItem,
    deleteItem: deleteItem,
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
