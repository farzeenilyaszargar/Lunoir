import Link from "next/link";
import Image from "next/image";

const footerLink = "w-fit py-1 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-12 sm:grid-cols-[1fr_auto] sm:gap-16 sm:py-16">
          <div>
            <Link href="/" aria-label="Lunoir home" className="flex h-16 w-52 items-center overflow-hidden focus-visible:outline-white">
              <Image src="/Logo.gif" alt="Lunoir" width={1080} height={1080} className="h-52 w-52 shrink-0 object-contain" unoptimized />
            </Link>
            <p className="mt-3 text-sm text-zinc-500">Designed for your comfort. Worn your way.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 pt-2 sm:gap-16 lg:gap-24">
            <div>
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Explore</h2>
              <ul className="flex flex-col gap-2">
                <li><Link href="/#shop-section" className={footerLink}>Shop the shirts <span aria-hidden="true">↗</span></Link></li>
                <li><Link href="/#review-section" className={footerLink}>Customer reviews</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">The details</h2>
              <ul className="flex flex-col gap-2">
                <li><Link href="/#faq" className={footerLink}>Questions & care</Link></li>
                <li><Link href="/profile" className={footerLink}>Your account</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lunoir. All rights reserved.</p>
          <a href="#" className="group flex w-fit items-center gap-3 py-1 text-zinc-400 transition-colors hover:text-white focus-visible:outline-white">
            Back to top
            <span aria-hidden="true" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-base transition-transform group-hover:-translate-y-1 motion-reduce:transform-none">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
