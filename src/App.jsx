//npm init vite my_app(to create a project)
//cd msss-website-vite
//npm run dev
import React, { useRef } from "react";
import AppNavbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Gallerypage from "../src/pages/Gallerypage";
import appstyle from "../src/styles/modules/app.module.scss";
import AppFooter from "../src/components/Footer";
import Contactpage from "./pages/Contactpage";
import AdmissionPage from "./pages/AdmissionPage";
import "./styles/index.css";
function App() {
  const news = useRef(null);
  const aboutus = useRef(null);

  return (
    <div className="">
      {/* Navbar */}
      <AppNavbar ref={[news, aboutus]} />
      {/* ROUTES - the actual page/content */}
      <div className="bg-slate-50">
        <Routes>
          <Route path="/" element={<Homepage ref={[news, aboutus]} />} />
          <Route path="/Gallery" element={<Gallerypage />} />
          {/* <Route path="/Payments" /> */}
          <Route path="/Admissions" element={<AdmissionPage />} />
          <Route path="/Contact" element={<Contactpage />} />
        </Routes>
      </div>
      {/* Footer */}
      <div className={appstyle.divfooter}>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
