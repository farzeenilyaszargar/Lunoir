
import { signIn } from "@/auth"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import EmailComp from "./emailComponent";


export default function SignIn()
{
    return(
        <div>
            <Header/>
            <div className="h-140 w-screen flex justify-center items-center flex-col">
                <div className="flex items-center justify-center p-10 pb-15 rounded-2xl flex-col w-1/3 border">
                    <h1 className="text-2xl mb-5 font-bold">Sign Up</h1>

                    <form className="w-full"
                        action={async () => {
                        "use server"
                        return signIn("google", { callbackUrl: "/" });
                        }}
                    >
                        <button type="submit" className="border rounded-3xl p-2 flex flex-row items-center justify-center w-full
                                                        hover:bg-black hover:text-white transition-all duration-150
                                                        ">
                            <Image src={'/icons/google.png'} alt="google" width={25} height={25} className="mr-3"/>
                            Continue with Google
                        </button>
                    </form>
                    <p className="mb-5 mt-5 w-full text-center border-b leading-1"><span className="bg-white pl-3 pr-3 ">or</span></p>
                    <EmailComp />
                </div>
                
            </div>
            

        
        </div>
        
        
    );
}