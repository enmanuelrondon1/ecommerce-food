import { FaCaretDown } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { RiTShirt2Fill } from "react-icons/ri";
import { GiArmoredPants } from "react-icons/gi";
import { useState } from "react";

import Logo from "../../assets/food-logo.png";
import { DarkMode } from ".//DarkMode";

const MenuLinks = [
  { name: "Wallet", href: "#", icon: FaShoppingBag },
  { name: "T-shirt", href: "#", icon: RiTShirt2Fill },
  { name: "Pants", href: "#", icon: GiArmoredPants },
];

export const Navbar = () => {
  
  const NAVBAR_CLASSES = {
    NAV: "bg-background fixed top-0 left-0 right-0 z-50 shadow-md",
    CONTAINER: "container mx-auto flex justify-between items-center p-4",
    LOGO: "text-2xl font-bold text-primary",
    LINKS: "hidden md:flex space-x-4",
    LINK: "text-muted-foreground hover:text-primary",
    DROPDOWN: "absolute hidden bg-white shadow-lg mt-2 rounded-md",
    DROPDOWN_LINK: "block px-4 py-2 text-muted-foreground hover:bg-zinc-200",
    ICON_BUTTON: "text-muted-foreground hover:text-primary",
    CART_COUNT:
      "absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1",
    TOGGLE_BUTTON: "bg-secondary text-secondary-foreground p-2 rounded-lg",
  };

  const [showDropwdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropwdown);
  };

  return (
    <>
      <nav className={NAVBAR_CLASSES.NAV}>
        <div className={NAVBAR_CLASSES.CONTAINER}>
          <div className={NAVBAR_CLASSES.LOGO}>
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </div>

          <div className={NAVBAR_CLASSES.LINKS}>
            <a href="#" className={NAVBAR_CLASSES.LINK}>
              Home
            </a>
            <a href="#" className={NAVBAR_CLASSES.LINK}>
              About
            </a>
            <a href="#" className={NAVBAR_CLASSES.LINK}>
              Contact
            </a>
            <div className="relative group">
              <button
                className={NAVBAR_CLASSES.ICON_BUTTON}
                onClick={toggleDropdown}
              >
                <div className="group relative cursor-pointer ">
                  <a href="#" className=" items-center gap-[2px] py-2">
                    Trending Products
                  </a>{" "}
                  <span className="absolute top-1 -right-5 text-black">
                    <FaCaretDown className="transition-all duration-200 group:hover:rotate-180 " />
                  </span>
                  <div className="absolute hidden z-[9999] group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md ">
                    <ul className="flex flex-col items-start gap-2 ">
                      {MenuLinks.map((link, index) => (
                        <li key={index} className="">
                          <a
                            href={link.href}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                          >
                            <link.icon className="mr-2 h-5 w-5" />
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className={NAVBAR_CLASSES.ICON_BUTTON}>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Sarch"
                  className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                />
                <img
                  src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
                  alt="Image lupa"
                  className="text-gray-400/70 group-hover:text-primary transition-all duration-300 sm:text-2xl absolute top-1/2 -translate-y-1/2 right-3  "
                />
              </div>
            </button>

            <button className={` ${NAVBAR_CLASSES.ICON_BUTTON} relative p-3`}>
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs "></div>

              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                alt="Image carrito"
              />
              <span className={NAVBAR_CLASSES.CART_COUNT}>4</span>
            </button>
            <button className={NAVBAR_CLASSES.TOGGLE_BUTTON}>
              <DarkMode />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};