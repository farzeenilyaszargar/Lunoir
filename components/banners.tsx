import Image from "next/image";
import Link from "next/link";

function Spark(){
  return <svg viewBox="0 0 20 20" className="h-5 w-5 mr-1" fill="currentColor"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>
}

export default function Banner()
{
    return(
        <div className="h-90 flex flex-col justify-center items-center overflow-hidden">
            <div className="flex flex-col justify-center items-center h-60">
                <Image src={'/hero.gif'} alt="quote" width={600} height={300}></Image>
            </div>   
            <div className="flex flex-row justify-around w-80">
                <Link href={'#shop-section'} className="bg-black  rounded-4xl font-medium p-2 pl-4 pr-4 text-white flex flex-row items-center justify-around border border-white
                                    hover:filter hover:invert transition duration-300 ease-in-out 
                                    
                                    ">
                    <Image src={'/icons/down-icon.png'} alt="down-arrow" width={20} height={20} className="filter invert"/>
                    Check Out
                </Link>
                <Link href={'#review-section'} className="bg-white border  rounded-4xl font-medium p-2 pl-4 pr-4 text-black flex flex-row items-center justify-around
                                    hover:filter hover:invert transition duration-300 ease-in-out 
                                    ">
                    <Spark/>
                    Read Reviews
                </Link>
               
            </div> 
            
        </div>
        
    );
}