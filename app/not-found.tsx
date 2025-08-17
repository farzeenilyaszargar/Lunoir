import Link from "next/link";

export default function NotFound()
{
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-black text-5xl">404</h1>
            <h1 className="font-black text-2xl mb-2">Page Not Found</h1>

            <p>The page seems to be missing ...</p>
            <Link href={'/'} className="w-auto h-auto"><button className="border border-black hover:bg-black hover:text-white p-2 mt-3">Return Back</button></Link>
        </div>
    );
}