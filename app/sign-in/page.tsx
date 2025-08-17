import { signIn } from "@/auth"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function sign()
{
    return(
        <div>
            <Header/>
            <div className="h-140 w-screen flex justify-center items-center">
                <div className="flex items-center justify-center p-10 pb-15 rounded-2xl flex-col bg-zinc-100 w-1/3 shadow-xl">
                    <h1 className="text-2xl mb-5 font-bold">Sign Up</h1>
                    <form className="w-full"
                        action={async () => {
                        "use server"
                        return signIn("google")
                        }}
                    >
                        <button type="submit" className="border rounded-2xl p-3 flex flex-row items-center justify-center hover:bg-black hover:text-white w-full">
                            <Image src={'/icons/google.png'} alt="google" width={30} height={30} className="mr-3"/>
                            Continue with Google
                        </button>
                    </form>
                </div>
            </div>
            

        
        </div>
        
        
    );
}