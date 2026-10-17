import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-around gap-8 bg-white px-5 py-12 text-black">
        <div className="flex flex-col items-center">
          <Link href="/" aria-label="Lunoir home"><Image src="/Logo.gif" alt="Lunoir" width={150} height={50} className="invert" unoptimized /></Link>
          <p className="mt-3 text-sm">designed for your comfort</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <Link href="/#shop-section" className="text-zinc-500 hover:text-black">shop shirts</Link>
          <Link href="/#review-section" className="text-zinc-500 hover:text-black">customer reviews</Link>
          <Link href="/#faq" className="text-zinc-500 hover:text-black">questions & care</Link>
        </nav>
      </div>
      <div className="bg-zinc-100 p-5 text-center text-xs">© Lunoir Co. {new Date().getFullYear()}. All Rights Reserved</div>
    </footer>
  );
}
