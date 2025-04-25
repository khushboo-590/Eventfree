import React, { useState } from "react";
import logo1 from "../../assets/images/svg/logo-1.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    return (
        <nav className="flex items-center mx-auto">
            <div className="container max-w-[1320px] mx-auto">
                <div className="flex items-center justify-between w-full py-4">
                    <a href="/" className="z-10">
                        <img
                            src={logo1}
                            alt="logo"
                            className="w-[300px] h-auto object-contain"
                        />
                    </a>

                    <div onClick={toggleNavbar} className="lg:hidden cursor-pointer z-10 flex flex-col gap-1">
                        <span
                            className={`bg-white block w-6 h-1 transition-all duration-300  ${menuOpen && "rotate-45 translate-y-[8px]"}`}
                        ></span>
                        <span
                            className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "opacity-0"}`}
                        ></span>
                        <span
                            className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-[8px]"}`}
                        ></span>
                    </div>

                    <ul
                        className={`fixed top-0 left-0 h-screen w-full z-9 bg-black lg:static lg:h-auto lg:w-auto lg:bg-transparent flex flex-col lg:flex-row justify-center items-center gap-[60px] p-4  ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
                    >
                        {["HOME", "EVENTS", "FEED", "USER NAME"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="text-white font-semibold text-[16px] leading-[100%] hover:text-[#2C49FE] font-poppin"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className="bg-[#2C49FE] px-5 py-3 rounded-[23px] text-white font-semibold text-[16px] leading-[150%] hover:bg-white hover:text-[#2C49FE] font-poppin">
                                Log Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
