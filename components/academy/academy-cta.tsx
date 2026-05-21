import Link from 'next/link';

export function AcademyCta() {
    return (
        <section className='px-6 py-14 sm:px-10 lg:px-16 flex items-center justify-center'>
            <div className='overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#6ca99c_0%,#2f5f6f_46%,#2a4e68_100%)] px-8 py-14 text-center text-white sm:px-12 sm:py-16 w-full'>
                <div className='mx-auto'>
                    <h2 className='text-3xl font-bold leading-tight sm:text-5xl'>
                        Not sure where to begin?
                    </h2>
                    <p className='mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-xl'>
                        Take a 2-minute assessment and get a path tailored to your current level and
                        goals.
                    </p>

                    <div className='mt-10'>
                        <Link
                            href='/consultation'
                            className='inline-flex items-center gap-2 rounded-full bg-[var(--datastitch-accent)] px-6 py-3 text-base font-semibold text-[var(--datastitch-accent-ink)]'
                        >
                            Start Assessment
                            <span aria-hidden='true'>↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
