import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navabar";
import Home from "./Layouts/Home";
import Privacy from "./Layouts/Privacy";
import TremsAndConditions from "./Layouts/T&C";
import Menu from "./Layouts/Menu";
import Story from "./Layouts/Story";
import Footer from "./Layouts/Footer";
import Contact from "./Layouts/Contact";
import { Navigate } from "react-router-dom";

const AppContainer = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsandconditions" element={<TremsAndConditions />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
};
export default App;
