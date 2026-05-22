import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

export function PricingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--datatriad-navy)]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={assetPath('/DataTriad_Grey_Logo_No_BG.svg')}
            alt="DataTriad Logo"
            width={32}
            height={32}
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-white">DataTriad</span>
            <span className="text-[10px] text-white/45">AI, Data, and Consultation</span>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="rounded-full bg-[var(--datatriad-accent)] px-5 py-2 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110"
          >
            Book Consultation
          </Link>
          {/* Hamburger */}
          <button
            aria-label="Open menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg text-white"
          >
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
