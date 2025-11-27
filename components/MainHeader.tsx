
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Cart from "./CartSystem";
import ProfileBtn from './ProfileBtns';
import USPStrip from "./USP";





export default function Header()
{

    const isLoggedIn = true; // fix this ?

    return(
        <div className="sticky top-0 z-20">

          <div className="relative flex flex-row items-center min-w-screen justify-center sm:border-b h-20 bg-white text-black overflow-hidden " >
              <div className="absolute left-0  z-1">
                <Menu />
              </div>
              
              <Link href={'/'} className="w-screen flex justify-center z-0"><Image src={'/Logo.gif'} alt="menu" width={200} height={100} className="invert md:w-70 sm:w-45 w-40" unoptimized/></Link>
              <div className="flex flex-row justify-around items-center  absolute right-0 ">
                <ProfileBtn/>
                <Cart />
              
              </div>
              
          </div>
          <USPStrip/>
          
        </div>

    );

}