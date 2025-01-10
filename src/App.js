import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./templates/Header";
import MobileNavbar from "./templates/MobileNavbar";
import Footer from "./templates/Footer"
function App() {
  return (
    <Router>
      <Header/>
      <MobileNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
