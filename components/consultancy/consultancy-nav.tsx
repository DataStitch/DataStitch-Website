import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const navLinks = [
  { href: '/academy', label: 'Academy' },
  { href: '/consultancy', label: 'Consultancy Service', active: true },
  { href: '#resources', label: 'Resources' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export function ConsultancyNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--datastitch-navy)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assetPath('/DataStitch_Grey_Logo_No_BG.svg')}
            alt="Suchure Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold text-white">Suchure</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                link.active
                  ? 'bg-white/10 font-semibold text-[var(--datastitch-accent)]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/academy" className="text-sm text-white/80 hover:text-white">
            Join Academy
          </Link>
          <Link
            href="/consultation"
            className="rounded-full bg-[var(--datastitch-accent)] px-5 py-2 text-sm font-semibold text-[var(--datastitch-accent-ink)] transition hover:brightness-110"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
