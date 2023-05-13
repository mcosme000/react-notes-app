import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App m-auto rounded-lg bg-slate-300 w-4/5 h-4/5 shadow-md">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

    </div>
  );
}

export default App;
