import { createContext, useState, useEffect } from 'react'

const ItemsContext = createContext()

function Provider({children}) {
  const [items, setItems] = useState([])
  const [currentTab, setCurrentTab] = useState('all')


  useEffect(() => {

  }, [currentTab])

  const addItem = (newItem) => {
    console.log('From items context');
    console.log(newItem)
  }

  const elements = {
    items: items,
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
