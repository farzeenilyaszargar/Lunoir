import { auth } from "@/auth";
import Image from "next/image";
import Header from "@/components/MainHeader";
import { LogoutButton } from "./logoutBtn";

export default async function Profile() {
    const session = await auth(); // null if not signed in
    const user = session?.user;

    return (
        <div className="">
            <Header/>
            <div className="w-screen flex flex-col justify-center items-center mt-10">
                <div
                className=" border rounded-2xl flex items-center flex-col md:w-1/2 p-5">
                    {user ? (
                        <>
                            <Image src={user.image ?? "/icons/profile.png"} alt={user.name ?? "User"} className="h-20 w-20 rounded-full" width={100} height={100} />
                            <p className="font-bold text-2xl mt-2">{user.name}</p>
                            <p>{user.email}</p>
                        </>
                    ) : (
                        <a href="/login">Sign in</a>
                    )}
                    <p>Order History Stuff Maybe</p>
                    <LogoutButton/>
                </div>


            </div>
            
        </div>
    );
}
