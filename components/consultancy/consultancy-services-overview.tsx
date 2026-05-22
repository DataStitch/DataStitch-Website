import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';

const services = [
  {
    id: 'quickscan',
    image: '/consultancy/consultancy_4.jpg',
    name: 'QuickScan Diagnostic',
    description:
      'Rapid AI risk heatmap across your live systems. Leave with a clear, prioritised remediation plan.',
  },
  {
    id: 'retainer',
    image: '/consultancy/consultancy_5.jpg',
    name: 'AI Ethics Retainer',
    description:
      'Continuous monitoring of bias, drift, and risk — with a live dashboard and dedicated senior oversight.',
  },
  {
    id: 'projects',
    image: '/consultancy/consultancy_6.jpg',
    name: 'Consulting Projects',
    description:
      'End-to-end delivery of governance-first AI systems — from framework design to production rollout.',
  },
  {
    id: 'fractional',
    image: '/consultancy/consultancy_7.jpg',
    name: 'Fractional Support',
    description:
      'Embed senior governance expertise into your team — when and where you need it most.',
  },
];

export function ConsultancyServicesOverview() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={assetPath(s.image)}
                  alt={s.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm font-bold text-[var(--datatriad-accent)]">{s.name}</p>
                <p className="mt-1.5 text-sm leading-snug text-gray-500">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
