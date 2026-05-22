import { TopNav } from '@/components/top-nav';
import { FooterSection } from '@/components/footer';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactGetInTouch } from '@/components/contact/contact-get-in-touch';
import { ContactFaq } from '@/components/contact/contact-faq';
import { ContactCta } from '@/components/contact/contact-cta';

export default function ContactPage() {
  return (
    <main>
      <TopNav />
      <ContactHero />
      <ContactGetInTouch />
      <ContactFaq />
      <ContactCta />
      <FooterSection />
    </main>
  );
}
