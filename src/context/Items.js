import { createContext, useState, useEffect } from 'react'

const ItemsContext = createContext()

function Provider({children}) {
  const [itemsData, setItemsData] = useState([])
  const [currentTab, setCurrentTab] = useState('all')


  useEffect(() => {
    console.log("We added a new element")
  }, [itemsData])

  const addItem = (newItem) => {
    const updatedItems = [
      ...itemsData,
      newItem
    ]
    setItemsData(updatedItems)
  }

  const elements = {
    itemsData: itemsData,
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    addItem: addItem
  }


  return (
    <ItemsContext.Provider value={elements}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContext
export { Provider }
