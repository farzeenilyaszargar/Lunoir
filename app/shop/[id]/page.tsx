import Header from "@/components/MainHeader";
import { products } from "@/lib/products";
import Image from "next/image";

export default function ShopPage({ params }: { params: { id: string } }) {
    const prodId = Number(params.id)
    const item = products.find(i => i.id == prodId);

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center w-screen py-10 px-5">
                <div className="sm:w-1/3 w-screen  group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square ">
                        <div className="absolute inset-0 grid place-items-center bg-zinc-100 overflow-hidden ">
                            <Image src={item?.image ?? "/" } alt={item?.name ?? "alt"} width={200} height={200} className="w-full" />
                        </div>
                        <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">{item?.badge}</span>
                    </div>
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-black line-clamp-1">{item?.name}</h3>
                            <span className="text-sm font-semibold hidden md:block text-green-800">₹{item?.price}</span>

                        </div>
                        <span className="text-sm font-semibold md:hidden text-green-800">₹{item?.price}</span>

                        <div className="  mt-2 flex flex-row md:justify-center justify-start md:gap-2 gap-1 ">
                            {
                                item?.sizes.map((item, key) => (
                                    <button key={key} className="border pl-1 pr-1 rounded" >
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                        <button className="mt-3 w-full border rounded-xl bg-black py-2 text-white text-sm font-medium hover:bg-white hover:text-black">Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
}