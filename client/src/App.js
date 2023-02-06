import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowAll from "./components/AllTodo/ShowAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename='/'>
        <Routes>
          <Route exact path="/" element={<ShowAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
