'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const CATEGORIES = ['All Categories', 'Guide', 'Insights', 'Tools', 'Governance'] as const;
type Category = (typeof CATEGORIES)[number];

const resources = [
  {
    slug: '/resources/ai-governance-starter-kit',
    image: '/resources/ai-governance-hero.png',
    imageBg: 'bg-[rgba(61,223,208,0.1)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Guide' as Category,
    title: 'The AI Governance Starter Kit',
    description:
      'A plain-English walkthrough of what governance actually requires — from data lineage to model explainability. N...',
  },
  {
    slug: '/resources/quickscan-readiness-checklist',
    image: '/resources/resource-card-quickscan.png',
    imageBg: 'bg-[rgba(255,237,195,0.3)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Tools' as Category,
    title: 'QuickScan Readiness Checklist',
    description:
      'Assess how audit-ready your AI systems are before a formal review. 15 questions. Instant score. Actionable n...',
  },
  {
    slug: '/resources/bi-developer-to-ai-architect',
    image: '/resources/resource-card-eu-ai-act-1d574b.png',
    imageBg: 'bg-[rgba(0,66,138,0.15)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Insights' as Category,
    title: 'From BI Developer to AI Architect in 9 Months',
    description:
      'How one data professional used a structured learning pathway to break into a senior AI role at a top UK firm.',
  },
  {
    slug: '/resources/microsoft-fabric-data-engineers',
    image: '/resources/ai-governance-hero.png',
    imageBg: 'bg-[rgba(61,223,208,0.1)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Insights' as Category,
    title: 'What Is Microsoft Fabric — and Why It Matters for Data Engineers',
    description: "A clear breakdown of Fabric's architecture, components, and where it fits in your stack.",
  },
  {
    slug: '/resources/quickscan-readiness-checklist-2',
    image: '/resources/resource-card-quickscan.png',
    imageBg: 'bg-[rgba(255,237,195,0.3)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Tools' as Category,
    title: 'QuickScan Readiness Checklist',
    description:
      'A ready-to-use framework for mapping your AI systems to their regulatory and reputational risk profile.',
  },
  {
    slug: '/resources/eu-ai-act-uk-organisations-2025',
    image: '/resources/resource-card-eu-ai-act-1d574b.png',
    imageBg: 'bg-[rgba(0,66,138,0.15)]',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    category: 'Governance' as Category,
    title: 'EU AI Act: What Changes for UK Organisations in 2025',
    description:
      "A practical breakdown of the obligations that apply — even if you're based outside the EU.",
  },
  {
    slug: '/resources/responsible-ai-checklist',
    image: '/resources/resources_2.jpg',
    imageBg: 'bg-[rgba(61,223,208,0.1)]',
    date: 'May 9, 2025',
    readTime: '22 mins read',
    category: 'Guide' as Category,
    title: 'Responsible AI: A Practical Checklist for Teams',
    description:
      'Step-by-step guidance for embedding responsible AI practices across your data and engineering teams.',
  },
  {
    slug: '/resources/data-governance-101',
    image: '/resources/resources_3.png',
    imageBg: 'bg-[rgba(255,237,195,0.3)]',
    date: 'May 9, 2025',
    readTime: '18 mins read',
    category: 'Governance' as Category,
    title: 'Data Governance 101: What Every Data Professional Should Know',
    description: 'The essential concepts, frameworks, and tooling behind modern data governance programmes.',
  },
  {
    slug: '/resources/model-explainability-guide',
    image: '/resources/resources_4.png',
    imageBg: 'bg-[rgba(0,66,138,0.15)]',
    date: 'May 9, 2025',
    readTime: '30 mins read',
    category: 'Tools' as Category,
    title: 'Model Explainability: Tools and Techniques for 2025',
    description:
      'A hands-on overview of SHAP, LIME, and emerging XAI tooling for production ML systems.',
  },
];

const PAGE_SIZE = 6;

export function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Categories');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    activeCategory === 'All Categories'
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleCategoryChange(cat: Category) {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <h2
          className="mb-8 text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl"
          style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
        >
          Discover Our Latest Insight
        </h2>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white'
                  : 'border border-[#D1D5DB] bg-white text-[#374151] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((resource) => (
            <Link
              key={resource.slug}
              href={resource.slug}
              className="group flex flex-col gap-3.5 transition hover:opacity-90"
            >
              {/* Image */}
              <div
                className={`relative h-[220px] w-full overflow-hidden rounded-2xl ${resource.imageBg}`}
              >
                <Image
                  src={assetPath(resource.image)}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <span>{resource.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#6B7280]" />
                <span>{resource.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold leading-snug text-[#1A1A1A] group-hover:text-[#006ADD]">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#4B5563]">{resource.description}</p>
            </Link>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-full border border-[#1A1A1A] bg-white px-8 py-3 text-sm font-medium text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
