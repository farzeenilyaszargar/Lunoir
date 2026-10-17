'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export default function Menu()
{
    const [openMenu, setOpenMenu] = useState(false);


    return(


    <div>
        <button aria-label="Open menu" aria-expanded={openMenu} onClick={()=>setOpenMenu(!openMenu)} className=""><Image src={'/icons/menuu.gif'} alt="menu" width={40} height={40} className=" invert md:ml-10 ml-5" unoptimized /></button>
        
        <div inert={!openMenu} className={`flex flex-col bg-white opacity-95 w-2/3 md:w-1/4 h-screen text-black fixed top-0 left-0 z-10 transition-all ease-in-out duration-500 ${openMenu?"translate-x-0" : "-translate-x-full"}`}>
            <button aria-label="Close menu" className={`flex h-20 justify-center items-center w-fit md:ml-10 ml-5 text-white text-4xl z-10`} onClick={()=>{setOpenMenu(!openMenu)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40} className="invert" unoptimized/>
            </button> 
            <div className="flex flex-col justify-around h-1/2 ml-10 ">
                <Link href="/#shop-section" onClick={() => setOpenMenu(false)} className="hover:font-black">shop shirts ☺️</Link>
                <Link href="/#review-section" onClick={() => setOpenMenu(false)} className="hover:font-black">customer reviews ✨</Link>
                <Link href="/#faq" onClick={() => setOpenMenu(false)} className="hover:font-black">questions & care 🙂</Link>
            </div>
            
        </div>
        <button aria-label="Close menu overlay" className={`fixed w-full bg-black opacity-20 h-screen top-0 right-0 z-5 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
        </button>
    </div>
    );
}