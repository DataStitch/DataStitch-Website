import { PricingPlans } from '@/components/pricing/pricing-plans';
import { PricingFaq } from '@/components/pricing/pricing-faq';
import { PricingCta } from '@/components/pricing/pricing-cta';
import { TopNav } from '@/components/top-nav';
import { FooterSection } from '@/components/footer';

export default function PricingPage() {
  return (
    <main>
      <TopNav />
      <PricingPlans />
      <PricingFaq />
      <PricingCta />
      <FooterSection />
    </main>
  );
}
