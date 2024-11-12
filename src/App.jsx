import {Navbar} from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Banner } from "./components/Banner/Banner";
import { AppStore } from "./components/AppStore/AppStore";
import { Testimonial } from "./Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { Popup } from "./components/Popup/Popup";

export default function App() {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 400,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden " >
     <Navbar />
     <div className="mt-24 ">
      
     <Hero handleOrderPopup={handleOrderPopup} />
     <Services />
     <Banner />
     <AppStore />
     <Testimonial />
     <Footer />
     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
     </div>
 
    </div>
  )
}

