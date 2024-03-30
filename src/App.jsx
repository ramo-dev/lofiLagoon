import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import "./App.css";
import Player from "./Routes/Player";
import PageNotFound from "./Routes/PageNotFound";
import About from "./Routes/About"
import Contact from "./components/Contacts/Contacts";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/player" Component={Player}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
