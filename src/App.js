import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Create from "./views/Create";
import data from "./data/product.json";
import Update from "./views/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/create" element={<Create data={data} />} />
        <Route path="/update/:id" element={<Update data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
