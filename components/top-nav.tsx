import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/academy', label: 'Academy' },
    { href: '/consultancy', label: 'Consultancy Service' },
    { href: '/resources', label: 'Resources' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
];

export function TopNav() {
    return (
        <header className='sticky top-0 z-50 border-b border-white/10 bg-[var(--datatriad-navy)]/95 backdrop-blur'>
            <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16'>
                <Link href='/' className='text-lg font-bold text-white'>
                    <Image
                        src={assetPath('/DataTriad_Grey_Logo_No_BG.svg')}
                        alt='DataTriad Logo'
                        width={32}
                        height={32}
                        className='mr-2 inline-block'
                    />
                    DataTriad
                </Link>

                <nav className='hidden items-center gap-6 md:flex'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className='text-sm text-white/80 transition hover:text-white'
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className='hidden items-center gap-3 md:flex'>
                    <Link href='/academy' className='text-sm text-white/80 hover:text-white'>
                        Join Academy
                    </Link>
                    <Link
                        href='/consultation'
                        className='rounded-full bg-[var(--datatriad-accent)] px-5 py-2 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110'
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}
