import { createContext, useState, useEffect } from 'react'

const ItemsContext = createContext()

function Provider({children}) {
  const [items, setItems] = useState([])
  const [currentTab, setCurrentTab] = useState('')

  useEffect(() => {
    console.log("Started app")
    console.log(currentTab)
  }, [currentTab])

  const elements = {
    items: items,
    currentTab: currentTab,
    setCurrentTab: setCurrentTab
  }

  return (
    <ItemsContext.Provider value={elements}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContext
export { Provider }
