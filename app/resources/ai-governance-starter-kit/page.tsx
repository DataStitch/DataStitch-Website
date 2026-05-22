import { ResourceNav } from '@/components/resources/resource-nav';
import { ResourceArticleHero } from '@/components/resources/resource-article-hero';
import { ResourceArticleContent } from '@/components/resources/resource-article-content';
import { ResourceRelatedPosts } from '@/components/resources/resource-related-posts';
import { ResourceNewsletterCta } from '@/components/resources/resource-newsletter-cta';
import { ConsultancyFooter } from '@/components/consultancy-footer';

export const metadata = {
  title: 'The AI Governance Starter Kit | DataTriad Resources',
  description:
    'A plain-English walkthrough of what responsible AI governance actually requires — from data lineage to model explainability.',
};

export default function AiGovernanceStarterKitPage() {
  return (
    <main>
      <ResourceNav />
      <ResourceArticleHero />
      <ResourceArticleContent />
      <ResourceRelatedPosts />
      <ResourceNewsletterCta />
      <ConsultancyFooter />
    </main>
  );
}
