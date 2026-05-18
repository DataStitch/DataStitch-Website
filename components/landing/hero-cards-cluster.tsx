import Image from 'next/image';

export function HeroCardsCluster() {
    return (
        <div className='relative mx-auto mt-14 h-[300px] w-full max-w-[980px] sm:h-[340px] lg:mt-16 lg:h-[390px]'>
            <div className='hero-card-enter absolute left-1/2 top-0 z-10 w-[94%] max-w-[760px] -translate-x-1/2 [animation-delay:80ms]'>
                <Image
                    src='/hero_imgs/governance-health-trend.png'
                    alt='governance-health-trend'
                    width={580}
                    height={305}
                    className='w-full object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
                />
            </div>

            <div className='hero-card-enter absolute bottom-[-44px] right-[-4px] z-30 w-[34%] min-w-[210px] max-w-[340px] rotate-[3.5deg] [animation-delay:180ms] sm:bottom-[-58px] sm:right-[0px]'>
                <Image
                    src='/hero_imgs/compliance-verified.png'
                    alt='compliance-verified'
                    width={320}
                    height={600}
                    className='w-full object-cover drop-shadow-[0_16px_36px_rgba(0,0,0,0.26)]'
                />
            </div>

            <div className='hero-card-enter absolute bottom-[-58px] left-[-4px] z-20 w-[35%] min-w-[220px] max-w-[360px] -rotate-[8deg] [animation-delay:260ms] sm:bottom-[-70px] sm:left-[8px]'>
                <Image
                    src='/hero_imgs/real-time-audit.png'
                    alt='real-time-audit'
                    width={260}
                    height={300}
                    className='w-full object-cover drop-shadow-[0_16px_36px_rgba(0,0,0,0.26)]'
                />
            </div>

            <div className='hero-card-enter absolute right-[70px] top-[-34px] z-40 w-[19%] min-w-[145px] max-w-[210px] rotate-[4deg] [animation-delay:340ms] sm:right-[88px]'>
                <Image
                    src='/hero_imgs/quick-scan.png'
                    alt='quick-scan'
                    width={170}
                    height={90}
                    className='w-full object-cover drop-shadow-[0_14px_30px_rgba(0,0,0,0.22)]'
                />
            </div>
        </div>
    );
}
