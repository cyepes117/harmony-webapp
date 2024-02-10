import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const goToPage = () => {
    const encodedMessage = encodeURIComponent(JsonData.Whatsapp.message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${JsonData.Whatsapp.phone}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <Navigation goToPage={goToPage} />
      <Header data={landingPageData.Header} goToPage={goToPage} />
      <About data={landingPageData.About} goToPage={goToPage} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} goToPage={goToPage} />
    </div>
  );
};

export default App;
