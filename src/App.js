import { useState } from 'react'
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import ItemList from './components/ItemList';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleClick = () => {
    setShowOverlay(!showOverlay)
  }
  return (
    <div className="w-11/12 lg:w-4/5 h-4/5 m-auto flex flex-col rounded-lg bg-slate-300 shadow-md">
      <BrowserRouter>
        <Header />
        <main className="grow relative">
          <button onClick={handleClick}>Add item</button>
          <ItemList />
          { showOverlay && <Overlay onClick={handleClick}/> }
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
