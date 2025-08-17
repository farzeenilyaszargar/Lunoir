'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";
import Cart from "./cart";

function Truck(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 7h11v7h2l3-4h2v7h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3V7zm4 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 17 16z"/></svg>
}
function Shield(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l7 3v6c0 5-3.4 9.7-7 11-3.6-1.3-7-6-7-11V5l7-3z"/></svg>
}
function Leaf(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 21s9 1 14-4S21 3 21 3 3 7 3 21zm0 0s6-6 12-12" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
}
function Spark(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>
}


function USPStrip() {
  return (
    <div className=" border-b bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 py-2 text-xs text-zinc-700">
          <span className="inline-flex items-center gap-2"><Shield /> Pay On Delivery Availible</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Truck /> Free shipping</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Leaf /> 240 GSM, 100% cotton</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Spark /> Pre‑shrunk, no fade</span>
        </div>
      </div>
    </div>
  )
}


export default function Header()
{
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);



    return(
        <div className="sticky top-0 z-20">

          <div className=" flex flex-row items-center min-w-screen justify-center border-b h-20 bg-white text-black overflow-hidden" >
              
              <button onClick={()=>setOpenMenu(!openMenu)} className="w-1/8"><Image src={'/icons/menuu.gif'} alt="menu" width={40} height={40} className="ml-10 invert"></Image></button>
              <Link href={'/'} className="w-3/4 flex justify-center"><Image src={'/Logo.gif'} alt="menu" width={250} height={100} className="invert"/></Link>
              <div className="flex flex-row justify-between items-center w-1/8">
                <button><Image src={'/icons/profile.png'} width={40} height={40} alt="prof"/></button>
                <button onClick={()=>setOpenCart(!openCart)}><Image src={'/icons/cart.gif'} alt="menu" width={40} height={40} className="mr-10 invert"></Image></button>
              
              </div>
              
          </div>
          <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Cart openCart={openCart} setOpenCart={setOpenCart} />
          <USPStrip/>
        </div>

    );

}