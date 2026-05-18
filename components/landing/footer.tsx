export function FooterSection() {
  return (
    <footer className="bg-[var(--suchure-navy)] px-6 py-14 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">Suchure</h3>
          <p className="mt-3 max-w-md text-sm text-white/75">
            Governance-first AI training and advisory for professionals and regulated organisations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>Academy</li>
            <li>Consultancy</li>
            <li>Bootcamps</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>hello@suchure.com</li>
            <li>+44 20 0000 0000</li>
            <li>London · Lagos</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-xs text-white/60">
        © {new Date().getFullYear()} Suchure. All rights reserved.
      </div>
    </footer>
  );
}
