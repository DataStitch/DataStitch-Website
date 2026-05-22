import { SectionHeading } from './section-heading';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';

const ecosystemItems = [
    {
        title: 'Deep Learning Mastery',
        description:
            'Structured curriculum covering ethical AI, regulatory compliance, and governance frameworks.',
        image: '/academy_imgs/deep-learning.png',
    },
    {
        title: 'Practical Lab Environments',
        description:
            'Risk-free sandboxes to stress-test AI models against governance scenarios and adversarial attacks.',
        image: '/academy_imgs/practical-env.png',
    },
    {
        title: 'Career Pathway Mapping',
        description:
            'Direct alignment with global job roles in AI audit, risk management, and ethics leadership.',
        image: '/academy_imgs/career-pathway.png',
    },
];

export function AcademyEcosystemSection() {
    return (
        <section className='bg-[var(--datatriad-cream)] px-6 py-20 sm:px-10 lg:px-16'>
            <div className='mx-auto max-w-6xl'>
                <SectionHeading
                    title='The Academy Ecosystem'
                    description='Bridging the theoretical gap with hands-on labs and strategic mastery.'
                    centered={true}
                />

                <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
                    {ecosystemItems.map((item) => (
                        <article
                            key={item.title}
                            className='rounded-2xl border border-2 border-[var(--datatriad-border)] bg-white'
                        >
                            <Image
                                src={assetPath(item.image)}
                                alt={item.title}
                                width={375}
                                height={185}
                                className='h-40 w-full rounded-xl object-cover'
                            />
                            <div className='p-6 border-t-2 border-[var(--datatriad-border)]'>
                                <h3 className='text-xl font-bold text-[var(--datatriad-ink)]'>
                                    {item.title}
                                </h3>
                                <p className='mt-2 text-sm text-[var(--datatriad-muted)]'>
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
