import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import Buscar from "./components/Buscar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Info />}></Route>
          <Route path="/Buscar" element={<Buscar />}></Route>
          {/*<Route path="/vertodos" element={<Vertodos />}>
  </Route>*/}
        </Routes>

        {/* <li> <Link to={'/'}> info </Link> </li> */}
      </BrowserRouter>
    </div>
  );
}
