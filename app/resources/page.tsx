import { ResourcesHero } from '@/components/resources/resources-hero';
import { ResourcesGrid } from '@/components/resources/resources-grid';
import { ResourcesCta } from '@/components/resources/resources-cta';
import { ResourceNewsletterCta } from '@/components/resources/resource-newsletter-cta';
import { ConsultancyFooter } from '@/components/consultancy-footer';
import { TopNav } from '@/components/top-nav';

export const metadata = {
  title: 'Resources | DataTriad',
  description:
    'Practical guides, tools, and insights for data professionals and the organisations they serve.',
};

export default function ResourcesPage() {
  return (
    <main>
      <TopNav />
      <ResourcesHero />
      <ResourcesGrid />
      <ResourcesCta />
      <ResourceNewsletterCta />
      <ConsultancyFooter />
    </main>
  );
}
