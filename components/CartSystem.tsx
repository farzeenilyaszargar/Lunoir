'use client';

import Image from "next/image";
import { useState, useEffect } from "react";


type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
};


export default function Cart() {
    const [openCart, setOpenCart] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage when component mounts
    useEffect(() => {
        const stored = localStorage.getItem("cartItems");
        if (stored) {
            setCart(JSON.parse(stored));
        }
    }, []);

    // Remove item
    const handleRemove = (index: number) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price, 0);



    return (

        <div className="md:ml-5">
            <button onClick={() => setOpenCart(!openCart)} className=""><Image src={'/icons/cart.gif'} alt="menu" width={40} height={40} className="md:mr-10 mr-5 invert"></Image></button>

            <div className={`flex flex-col items-end bg-white opacity-95 w-2/3 md:w-1/3 h-screen text-black fixed top-0 right-0 z-10 transition-all ease-in-out duration-500 ${openCart ? "translate-x-0" : "translate-x-full"}`}>
                <button className={`flex h-20 justify-center items-center w-fit  md:mr-10  mr-5 text-white text-4xl z-10`} onClick={() => { setOpenCart(!openCart) }}>
                    <Image src={'/icons/cross.png'} alt='cross' width={40} height={40} className="invert" />
                </button>
                <div className="flex flex-col items-center min-w-full">
                    <div className="w-3/4 border rounded ">
                        {
                            (cart.length === 0) ?
                                (<div className="p-6 text-center text-gray-500">🛒 Your cart is empty</div>)
                                :
                                cart.map((item, key) => (
                                    <div key={key}>
                                        <p>{item.name}</p>
                                        <Image src={item.image} alt="img" width={100} height={100} />
                                        <p>₹{item.price}</p>
                                        <p>Size Selected: {item.size}</p>
                                        <button
                                            onClick={() => handleRemove(key)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>

                                    </div>
                                ))
                        }

                    </div>
                    <div className="mt-6 text-right font-bold text-lg">
                        Total: ₹{total}
                    </div>

                </div>

            </div>
            <button className={`fixed w-full bg-black opacity-20 h-screen top-0 right-0 z-5 ${openCart ? '' : 'hidden'}`} onClick={() => { setOpenCart(!openCart) }}></button>
        </div>

    );
}