import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Employees from "./components/Employees";
import Feedback from "./pages/Feedback";
import Employee from "./components/Employee";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
