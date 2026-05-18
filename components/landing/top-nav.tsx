import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#academy", label: "Academy" },
  { href: "#consultancy", label: "Consultancy" },
  { href: "#bootcamps", label: "Bootcamps" },
  { href: "#faqs", label: "FAQs" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--suchure-navy)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#home" className="text-lg font-bold text-white">
          <Image src="/DataStitch_Grey_Logo_No_BG.svg" alt="DataStitch Logo" width={32} height={32} className="mr-2 inline-block" /> 
          DataStitch
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/80 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#consultancy"
          className="rounded-full bg-[var(--suchure-accent)] px-4 py-2 text-xs font-semibold text-[var(--suchure-accent-ink)] sm:text-sm"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
