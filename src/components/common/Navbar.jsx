import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/images/svg/logo-1.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='flex items-center mx-auto'>
            <div className='container max-w-[1320px] mx-auto '>
                <div className="flex items-center justify-between w-full py-4">
                    <a className="z-10" href="/">
                        <img src={logo1} alt="logo" className="w-[300px] h-auto object-contain" />
                    </a>

                    <div onClick={toggleNavbar} className="z-10 lg:hidden cursor-pointer flex flex-col gap-1">
                        <span className={`menu-lines ${menuOpen ? "rotate-35 translate-y-[5px]" : ""}`}></span>
                        <span className={`menu-lines ${menuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`menu-lines ${menuOpen ? "-rotate-35 -translate-y-[5px]" : ""}`}></span>
                    </div>

                    <ul className={`fixed top-0 left-0 h-screen w-full bg-black lg:static lg:h-auto lg:w-auto lg:bg-transparent flex flex-col lg:flex-row justify-center items-center gap-[60px]  p-4   z-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                        <li><a className="text-white font-semibold text-[16px] leading-[100%] hover:text-[#2C49FE]" href="/">HOME</a></li>
                        <li><a className="text-white font-semibold text-[16px] leading-[100%] hover:text-[#2C49FE]" href="/">EVENT</a></li>
                        <li><a className="text-white font-semibold text-[16px] leading-[100%] hover:text-[#2C49FE]" href="/">FEED</a></li>
                        <li><a className="text-white font-semibold text-[16px] leading-[100%] hover:text-[#2C49FE]" href="/">USER NAME</a></li>

                        <li>
                            <button className='bg-[#2C49FE] px-4 py-2 rounded-[23px] text-white font-semibold text-[16px] leading-[150%] hover:bg-white hover:text-[#2C49FE]'>log Out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

