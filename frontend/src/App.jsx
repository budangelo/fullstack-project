import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomNavBar from "./components/CustomNavBar.jsx";
import CustomFooter from "./components/CustomFooter.jsx";
import HomePage from "./pages/HomePage.jsx";
import ImparaPage from "./pages/ImparaPage.jsx";
import StoriePage from "./pages/StoriePage.jsx"
import RisorsePage from "./pages/RisorsePage.jsx"
import CalcolatricePage from "./pages/CalcolatricePage.jsx"
import MercatiPage from "./pages/MercatiPage.jsx"
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <CustomNavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/impara" element={<ImparaPage/>}/>
          <Route path="/Storie-dei-Mercati" element={<StoriePage/>}/>
          <Route path="/Risorse" element={<RisorsePage/>}/>
          <Route path="/Mercati" element={<MercatiPage/>}/>
          <Route path="/Calcolatrice" element={<CalcolatricePage/>}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      <CustomFooter />
    </div>
  );
};

export default App;


