import "./css/App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import Vision from "./vision";
import Services from "./services";
import Why from "./why";
import Facts from "./facts";
import Industry from "./industry";
import Careers from "./careers";
import Footer from "./footer";
import Technology from "./technology";
import AnimatedPage from "./AnimatedPage";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <ScrollToTop>
      <AnimatedPage>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Vision />
                  <Services />
                  <Why />
                  <Facts />
                  <Industry />
                  <Careers />
                  <Footer />
                </>
              }
            />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </AnimatedPage>
    </ScrollToTop>
  );
}

export default App;
