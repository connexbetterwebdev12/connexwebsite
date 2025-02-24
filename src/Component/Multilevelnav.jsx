import React from 'react'
import { useState } from "react";
import logo from "/Logo.svg";
import { menuItemsData } from "../Constant/menuItemsData";
import MenuItems from "./MenuItems";
import { NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import Sidebar from './Sidebar';
import { Button } from '../CommonComponent/Button';
export default function Multilevelnav() {
     const [mobiletoggle, setmobiletoggle] = useState(false);
    const depthLevel = 0;
const CloseNavbar=()=>{
      setmobiletoggle(false)
    }
   
    return(
        <>
        <header className="text-lg pt-2 border-b-2 sticky top-0 z-50 h-20 bg-white" >
             <section className="flex items-center justify-between h-14 z-10">
          {/* Logo Section */}
          <NavLink to="/">
          <div id="logo" className="flex items-center gap-2">
            <img src={logo} alt="logo" loading="lazy" className="h-10 w-10" />
            <div className="text-3xl font-medium md:text-2xl">Connex Better</div>
          </div>
          </NavLink>
          {/* nav mid item */}
          <nav className="main-nav hidden lg:flex">
            <ul className="menus flex gap-4">
                {menuItemsData.map((menu,index)=>{
                    return(
                        <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                    );
                })}
            </ul>
        </nav>
          {/* Secondary Navigation */}
                  <div className="hidden lg:flex gap-5 items-center text-xl">
                  <Button name="Try for Free" link="/Contact" btnstyle="change"></Button>
                  <Button name="📞+91-9220696606" link="tel:+919220696606"></Button>

                  </div>

     {/* Mobile Navigation Toggle */}
     <div className=" cursor-pointer text-3xl lg:hidden" onClick={()=>setmobiletoggle((pre)=>!pre)}>
            {mobiletoggle ? "X" : <FaBars />}
          </div>


        </section>
        </header>

        {/* Mobile View Navbar */}
              {mobiletoggle && (
                <div className="fixed flex flex-col gap-5 h-full lg:hidden container text-xl z-30 top-8 bg-secondary">
                  
             <Sidebar onButtonClick={CloseNavbar}></Sidebar>
             <div className="flex flex-col gap-10 lg:hidden text-xl">
             <div onClick={CloseNavbar}>   <Button name="Try for Free" link="/Contact" btnstyle="change" ></Button></div>
               
                  <Button name="📞+91-9220696606" link="tel:+919220696606" ></Button>

                  </div>
                </div>
              )}


        </>    
    );
}
