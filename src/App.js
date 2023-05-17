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
    <div className="App lg:w-4/5 md:h-4/5 shadow-md bg-white">
      <BrowserRouter>
        <Header />
        <main className="h-full grow relative p-3 overflow-auto">
          <div className="overflow-auto h-full">
            <ItemList onClick={handleClick}/>
            { showOverlay && <Overlay onClick={handleClick}/> }
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
