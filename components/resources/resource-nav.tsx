import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const navLinks = [
  { href: '/academy', label: 'Academy', hasArrow: true },
  { href: '/consultancy', label: 'Consultancy', hasArrow: false },
  { href: '/resources', label: 'Resources', hasArrow: false, active: true },
  { href: '#pricing', label: 'Pricing', hasArrow: false },
  { href: '#contact', label: 'Contact', hasArrow: false },
];

export function ResourceNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--datatriad-navy)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assetPath('/DataTriad_Grey_Logo_No_BG.svg')}
            alt="DataTriad Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold text-white">DataTriad</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition ${
                link.active
                  ? 'bg-white/10 font-semibold text-[var(--datatriad-accent)]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              {link.hasArrow && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/academy" className="text-sm text-white/80 hover:text-white">
            Join Academy
          </Link>
          <Link
            href="/consultation"
            className="rounded-full bg-[var(--datatriad-accent)] px-5 py-2 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
