import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Employees from "./components/Employees";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  );
}

export default App;
