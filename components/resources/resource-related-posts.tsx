import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const relatedPosts = [
  {
    slug: '/resources/microsoft-fabric-data-engineers',
    image: '/resources/ai-governance-hero.png',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    title: 'What Is Microsoft Fabric — and Why It Matters for Data Engineers',
    description:
      "A clear breakdown of Fabric's architecture, components, and where it fits in your stack.",
    imageBg: 'bg-[rgba(61,223,208,0.1)]',
  },
  {
    slug: '/resources/quickscan-readiness-checklist',
    image: '/resources/resource-card-quickscan.png',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    title: 'QuickScan Readiness Checklist',
    description:
      'A ready-to-use framework for mapping your AI systems to their regulatory and reputational risk profile.',
    imageBg: 'bg-[rgba(255,237,195,0.3)]',
  },
  {
    slug: '/resources/eu-ai-act-uk-organisations-2025',
    image: '/resources/resource-card-eu-ai-act-1d574b.png',
    date: 'May 9, 2025',
    readTime: '37 mins read',
    title: 'EU AI Act: What Changes for UK Organisations in 2025',
    description:
      "A practical breakdown of the obligations that apply — even if you're based outside the EU.",
    imageBg: 'bg-[rgba(0,66,138,0.15)]',
  },
];

export function ResourceRelatedPosts() {
  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading row */}
        <div className="mb-12 flex items-center justify-between">
          <h2
            className="text-[32px] font-bold leading-none text-[#1A1A1A]"
            style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
          >
            Discover More Popular Insights
          </h2>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-full border border-[#00428A] bg-white px-5 py-3 text-sm font-medium text-[#00428A] shadow-sm transition hover:bg-[#00428A] hover:text-white"
          >
            Browse More
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 21 6" />
              <polyline points="15 6 21 6 21 12" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group flex flex-col gap-3.5 transition hover:opacity-90"
            >
              {/* Image */}
              <div className={`relative h-[220px] w-full overflow-hidden rounded-2xl ${post.imageBg}`}>
                <Image
                  src={assetPath(post.image)}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-1.5 text-xs text-[#555555]">
                <span>{post.date}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#DEDEDE]" />
                <span>{post.readTime}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3
                  className="text-[20px] font-bold leading-[1.302] text-[#1A1A1A]"
                  style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#555555]">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
