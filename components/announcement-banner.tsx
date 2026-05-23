'use client';

import { useEffect, useState } from 'react';
import { CohortSignupModal } from './cohort-signup-modal';

const DISMISSED_KEY = 'announcement_banner_dismissed';

export function AnnouncementBanner() {
    const [visible, setVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem(DISMISSED_KEY);
        if (!dismissed) setVisible(true);
    }, []);

    function dismiss() {
        sessionStorage.setItem(DISMISSED_KEY, '1');
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <>
            <div
                role='banner'
                className='relative z-50 flex items-center justify-center gap-2 bg-[var(--datatriad-navy)] px-10 py-2.5 text-sm text-white'
            >
                <p className='text-center leading-snug'>
                    <span className='font-semibold'>Limited-time access:</span>{' '}
                    Join the next cohort of AI professionals.{' '}
                    <button
                        onClick={() => setModalOpen(true)}
                        className='font-semibold text-[var(--datatriad-accent)] underline-offset-2 hover:underline focus:outline-none'
                    >
                        Save Your Spot
                    </button>
                </p>

                <button
                    onClick={dismiss}
                    aria-label='Dismiss announcement'
                    className='absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 text-white/60 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='h-4 w-4'
                        aria-hidden='true'
                    >
                        <path d='M2.22 2.22a.75.75 0 0 1 1.06 0L8 6.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L9.06 8l4.72 4.72a.75.75 0 1 1-1.06 1.06L8 9.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L6.94 8 2.22 3.28a.75.75 0 0 1 0-1.06Z' />
                    </svg>
                </button>
            </div>

            <CohortSignupModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
