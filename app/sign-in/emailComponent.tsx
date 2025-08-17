'use client';

import { useState } from "react";


export default function EmailComp()
{
    const [ visible, setVisible ] = useState(true);
    return(
        <div className="w-full flex flex-col ">
            <div className="overflow-hidden relative mb-3">
                <svg className="w-5  text-black absolute left-0 pointer-none  flex items-center   h-full ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 7.5 7.81 5.207a2.25 2.25 0 0 0 2.38 0L21.75 7.5" />
                </svg>
                <input type="email" className="w-full border rounded-3xl p-2 pl-10 pb-2.5  outline-none text-base" placeholder="something@example.com"></input>
            </div>
            <div className="relative flex-row flex mb-3">

                <svg className="w-5 text-black absolute left-0 pointer-none flex items-center  h-full ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V8.25a4.5 4.5 0 1 0-9 0V10.5m-.75 0h10.5A1.5 1.5 0 0 1 18.75 12v6a1.5 1.5 0 0 1-1.5 1.5H6.75A1.5 1.5 0 0 1 5.25 18v-6a1.5 1.5 0 0 1 1.5-1.5Z" />
                </svg>                        
                <input type={visible ? 'text' : 'password'} className="w-full border rounded-3xl p-2 pb-2.5 pl-10  outline-none text-base" placeholder="password"></input>
                <button onClick={()=> setVisible(!visible)} className="w-5 text-gray-400 absolute right-0 pointer-none flex items-center  h-full mr-3">
                    {
                        visible? (
                            <svg className="text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c1.74 4.5 6.06 7.5 9.75 7.5s8.01-3 9.75-7.5C20.01 7.5 15.69 4.5 12 4.5S3.99 7.5 2.25 12Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12A2.25 2.25 0 1 1 9.75 12a2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        ) :
                        (
                            <svg className="text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M6.74 6.75C4.52 8.13 2.94 10.09 2.25 12c1.74 4.5 6.06 7.5 9.75 7.5 1.3 0 2.6-.32 3.81-.93M17.26 17.25c2.22-1.38 3.8-3.34 4.49-5.25-.93-2.41-3.05-4.49-5.55-5.79M12 6.75c.8 0 1.55.18 2.23.49" />
                            </svg>
                            
                        )
                    }
                </button>
            </div>
            <button type="submit" className="bg-black text-white rounded-3xl p-2 flex flex-row items-center justify-center w-full border border-white
                                            hover:invert transition-all duration-150
                                                ">
                Sign Up
            </button>
        </div>
    );
}