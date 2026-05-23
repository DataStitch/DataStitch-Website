'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const INTEREST_OPTIONS = [
  'Academy & Training',
  'Consultancy Services',
  'Enterprise Partnership',
  'Pricing & Plans',
  'Technical Support',
  'General Inquiry',
];

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M2 3.5C2 2.67 2.67 2 3.5 2H6.28a1 1 0 0 1 .96.72l1.1 3.87a1 1 0 0 1-.29 1.02L6.5 8.97a11.04 11.04 0 0 0 4.53 4.53l1.36-1.57a1 1 0 0 1 1.02-.29l3.87 1.1c.44.13.72.54.72.96V16.5c0 .83-.67 1.5-1.5 1.5C7.56 18 2 12.44 2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDoubleRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 4L6 20M6 4l12 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function ContactGetInTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setStatus('submitting');
    try {
      const action = 'https://script.google.com/macros/s/AKfycbyjMgKEVOs7OUTdVLg76tsfapwYdNtUvGFJksOmKTS9ejWCRa1Wq-eG1WIk8gGewfy8/exec';
      const payload = new URLSearchParams({
        Location: typeof window !== 'undefined' ? window.location.pathname : 'contact',
        sheetName: 'Contact Form Entries',
        Name: name,
        Email: email,
        Interest: interest,
        Message: message,
      });

      const response = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setInterest('');
      setMessage('');
      setAgreed(false);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-[var(--datatriad-ink)] sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--datatriad-muted)]">
          Have a question or need support? DataTriad team is here to help. Reach out and
          we&apos;ll get back to you shortly.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Left — contact info */}
          <div>
            <a
              href="tel:+2341234567890"
              className="flex items-center justify-between rounded-2xl border border-[var(--datatriad-border)] p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--datatriad-soft)] text-[var(--datatriad-accent)]">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--datatriad-ink)]">Give Us a Call</p>
                  <p className="text-sm text-[var(--datatriad-muted)]">(234) 123 4567 890</p>
                </div>
              </div>
              <span className="text-[var(--datatriad-muted)]">
                <ChevronDoubleRight />
              </span>
            </a>

            <a
              href="mailto:support@datatriad.email.uk"
              className="mt-3 flex items-center justify-between rounded-2xl border border-[var(--datatriad-border)] p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--datatriad-soft)] text-[var(--datatriad-accent)]">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--datatriad-ink)]">Let&apos;s Talk</p>
                  <p className="text-sm text-[var(--datatriad-muted)]">support@datatriad.emial.uk</p>
                </div>
              </div>
              <span className="text-[var(--datatriad-muted)]">
                <ChevronDoubleRight />
              </span>
            </a>

            <div className="mt-8 flex items-center gap-5 text-[var(--datatriad-ink)]">
              <a href="#" aria-label="Instagram" className="transition hover:text-[var(--datatriad-accent)]">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="transition hover:text-[var(--datatriad-accent)]">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-[var(--datatriad-accent)]">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Facebook" className="transition hover:text-[var(--datatriad-accent)]">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="X / Twitter" className="transition hover:text-[var(--datatriad-accent)]">
                <XIcon />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-[var(--datatriad-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--datatriad-accent)] focus:ring-2 focus:ring-[var(--datatriad-accent)]/20"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]"
              >
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Enter your name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[var(--datatriad-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--datatriad-accent)] focus:ring-2 focus:ring-[var(--datatriad-accent)]/20"
              />
            </div>

            <div>
              <label
                htmlFor="contact-interest"
                className="mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]"
              >
                Interest<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-interest"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-[var(--datatriad-border)] bg-white px-4 py-3 text-sm text-[var(--datatriad-muted)] outline-none transition focus:border-[var(--datatriad-accent)] focus:ring-2 focus:ring-[var(--datatriad-accent)]/20"
                >
                  <option value="" disabled>
                    choose interest
                  </option>
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--datatriad-muted)]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-[var(--datatriad-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--datatriad-accent)] focus:ring-2 focus:ring-[var(--datatriad-accent)]/20"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 text-sm text-[var(--datatriad-muted)]">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 shrink-0 accent-[var(--datatriad-accent)]"
              />
              I agree to the{' '}
              <Link
                href="/privacy"
                className="text-[var(--datatriad-accent)] underline underline-offset-2"
              >
                privacy policy
              </Link>
            </label>

            {status === 'success' ? (
              <p className="rounded-xl bg-[var(--datatriad-soft)] p-4 text-sm font-medium text-[var(--datatriad-accent-ink)]">
                Thank you! We&apos;ll get back to you shortly.
              </p>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting' || !agreed}
                className="rounded-xl bg-[var(--datatriad-navy)] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Message'}
              </button>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
