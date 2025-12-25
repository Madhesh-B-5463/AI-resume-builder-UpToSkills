import Filenotfound from "./pages/Other/Filenotfound";
import Login from "./pages/Other/Login";
import Signup from "./pages/Other/Signup";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Filenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
