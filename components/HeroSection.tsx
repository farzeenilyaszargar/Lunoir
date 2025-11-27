import Image from "next/image";
import Link from "next/link";


export default function Banner() {
    return (
        <div className="md:h-90 flex flex-col justify-center items-center overflow-hidden">
            <div className="flex flex-col justify-center items-center md:h-60 h-50 ">
                <Image src={'/hero.gif'} alt="quote" width={600} height={300} className=" "></Image>
            </div>
            <div className="flex flex-row justify-around  md:w-80 w-70">
                <Link href={'#shop-section'} className="bg-black  rounded-4xl font-medium p-2 pl-4 pr-4 text-white flex flex-row items-center justify-around border border-white
                                    hover:filter hover:invert transition duration-300 ease-in-out 
                                    
                                    ">
                    <Image src={'/icons/down-icon.png'} alt="down-arrow" width={20} height={20} className="filter invert md:w-5 md:h-5 w-4 h-4" />
                    <p className="text-sm md:text-base">Check Out</p>
                </Link>
                <Link href={'#review-section'} className="bg-white border  rounded-4xl font-medium p-2 pl-4 pr-4 text-black flex flex-row items-center justify-around
                                    hover:filter hover:invert transition duration-300 ease-in-out 
                                    ">
                    <svg viewBox="0 0 20 20" className="md:h-5 md:w-5 mr-1 h-4 w-4 " fill="currentColor"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" /></svg>
                    <p className="text-sm md:text-base">Read Reviews</p>
                </Link>

            </div>

        </div>

    );
}