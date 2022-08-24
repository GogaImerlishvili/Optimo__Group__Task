import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Employees from "./components/Employees";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
