import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const footerLinks = {
  Solutions: ['Courses', 'Consultancy', 'Book a Call', 'Labs'],
  Company: ['About Us', 'Resources', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export function ConsultancyFooter() {
  return (
    <footer className="bg-[var(--datatriad-navy)] px-6 pb-10 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Newsletter bar */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 sm:flex-row sm:items-center">
          <span className="text-sm text-white/60">Join our monthly newsletter</span>
          <button className="inline-flex items-center gap-2 rounded-full bg-[var(--datatriad-accent)] px-5 py-2 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110">
            Subscribe
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Main links area */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src={assetPath('/DataTriad_Grey_Logo_No_BG.svg')}
                alt="DataTriad"
                width={28}
                height={28}
              />
              <span className="text-base font-bold">DataTriad</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              The Digital Curator for Governance &amp; Education. Empowering the next generation of
              responsible AI leaders.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="mb-4 text-sm font-semibold text-white/40 uppercase tracking-wide">{section}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-white/65 transition hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © 2026 DataTriad AI &amp; Data. All rights reserved. Registered in the United Kingdom.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {['X', 'GitHub', 'LinkedIn'].map((s) => (
              <Link key={s} href="#" className="text-xs text-white/40 transition hover:text-white">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
