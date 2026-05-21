import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/academy', label: 'Academy' },
    { href: '/consultancy', label: 'Consultancy' },
    { href: '/bootcamps', label: 'Bootcamps' },
    { href: '/faqs', label: 'FAQs' },
];

export function TopNav() {
    return (
        <header className='sticky top-0 z-50 border-b border-white/10 bg-[var(--datastitch-navy)]/95 backdrop-blur'>
            <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16'>
                <a href='#home' className='text-lg font-bold text-white'>
                    <Image
                        src={assetPath('/DataStitch_Grey_Logo_No_BG.svg')}
                        alt='DataStitch Logo'
                        width={32}
                        height={32}
                        className='mr-2 inline-block'
                    />
                    DataStitch
                </a>

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
                
                <Link
                    href='/consultation'
                    className='w-full rounded-full bg-[var(--datastitch-accent)] px-6 py-3 text-center text-sm font-semibold text-[var(--datastitch-accent-ink)] sm:w-auto'
                >
                    Book Consultation
                </Link>
                
            </div>
        </header>
    );
}
