'use client';

import { FormEvent, useState } from 'react';

interface Props {
    open: boolean;
    onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

function getEndpoint() {
    return process.env.NEXT_PUBLIC_COHORT_SIGNUP_ENDPOINT?.trim() ?? '';
}

export function CohortSignupModal({ open, onClose }: Props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    if (!open) return null;

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const endpoint = getEndpoint();

        if (!endpoint) {
            await new Promise((r) => setTimeout(r, 800));
            setStatus('success');
            return;
        }

        try {
            const action =
                'https://script.google.com/macros/s/AKfycbyjMgKEVOs7OUTdVLg76tsfapwYdNtUvGFJksOmKTS9ejWCRa1Wq-eG1WIk8gGewfy8/exec';
            const payload = new URLSearchParams({
                sheetName: 'Cohort Signup Entries',
                Location: '',
                Name: fullName,
                Email: email,
                Organization: organization,
                Role: role,
            });

            const response = await fetch(action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                body: payload.toString(),
            });

            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            setStatus('success');
        } catch {
            setErrorMessage('Something went wrong. Please try again.');
            setStatus('error');
        }
    }

    function handleClose() {
        if (status === 'submitting') return;
        setFullName('');
        setEmail('');
        setOrganization('');
        setRole('');
        setStatus('idle');
        setErrorMessage('');
        onClose();
    }

    return (
        <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='cohort-modal-title'
            className='fixed inset-0 z-[100] flex items-center justify-center p-4'
        >
            {/* Backdrop */}
            <div
                className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                onClick={handleClose}
                aria-hidden='true'
            />

            {/* Panel */}
            <div className='relative w-full max-w-md rounded-2xl bg-[var(--datatriad-cream)] p-8 shadow-2xl'>
                {/* Close button */}
                <button
                    onClick={handleClose}
                    disabled={status === 'submitting'}
                    aria-label='Close modal'
                    className='absolute right-4 top-4 rounded-full p-1.5 text-[var(--datatriad-muted)] transition hover:bg-black/5 hover:text-[var(--datatriad-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--datatriad-accent)]'
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

                {status === 'success' ? (
                    <div className='py-4 text-center'>
                        <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--datatriad-soft)]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-7 w-7 text-[var(--datatriad-accent)]'
                                aria-hidden='true'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <h2 className='mb-2 text-xl font-bold text-[var(--datatriad-ink)]'>
                            You&apos;re on the list!
                        </h2>
                        <p className='mb-6 text-sm text-[var(--datatriad-muted)]'>
                            Thanks, {fullName.split(' ')[0]}. We&apos;ll be in touch with cohort
                            details shortly.
                        </p>
                        <button
                            onClick={handleClose}
                            className='rounded-full bg-[var(--datatriad-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110'
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='mb-6'>
                            <span className='mb-3 inline-block rounded-full bg-[var(--datatriad-soft)] px-3 py-1 text-xs font-semibold text-[var(--datatriad-accent-ink)]'>
                                Limited-time access
                            </span>
                            <h2
                                id='cohort-modal-title'
                                className='text-2xl font-bold text-[var(--datatriad-ink)]'
                            >
                                Save Your Spot
                            </h2>
                            <p className='mt-1 text-sm text-[var(--datatriad-muted)]'>
                                Join the next cohort of AI professionals and build governance-first
                                AI capabilities.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className='space-y-4'>
                            <div>
                                <label
                                    htmlFor='cohort-full-name'
                                    className='mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]'
                                >
                                    Full name{' '}
                                    <span aria-hidden='true' className='text-red-500'>
                                        *
                                    </span>
                                </label>
                                <input
                                    id='cohort-full-name'
                                    type='text'
                                    required
                                    autoComplete='name'
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder='Jane Smith'
                                    className='w-full rounded-xl border border-[var(--datatriad-border)] bg-white px-4 py-2.5 text-sm text-[var(--datatriad-ink)] placeholder:text-[var(--datatriad-muted)]/50 focus:border-[var(--datatriad-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--datatriad-accent)]/20'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='cohort-email'
                                    className='mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]'
                                >
                                    Work email{' '}
                                    <span aria-hidden='true' className='text-red-500'>
                                        *
                                    </span>
                                </label>
                                <input
                                    id='cohort-email'
                                    type='email'
                                    required
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='jane@company.com'
                                    className='w-full rounded-xl border border-[var(--datatriad-border)] bg-white px-4 py-2.5 text-sm text-[var(--datatriad-ink)] placeholder:text-[var(--datatriad-muted)]/50 focus:border-[var(--datatriad-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--datatriad-accent)]/20'
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <label
                                        htmlFor='cohort-organization'
                                        className='mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]'
                                    >
                                        Organization
                                    </label>
                                    <input
                                        id='cohort-organization'
                                        type='text'
                                        autoComplete='organization'
                                        value={organization}
                                        onChange={(e) => setOrganization(e.target.value)}
                                        placeholder='Acme Corp'
                                        className='w-full rounded-xl border border-[var(--datatriad-border)] bg-white px-4 py-2.5 text-sm text-[var(--datatriad-ink)] placeholder:text-[var(--datatriad-muted)]/50 focus:border-[var(--datatriad-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--datatriad-accent)]/20'
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='cohort-role'
                                        className='mb-1.5 block text-sm font-medium text-[var(--datatriad-ink)]'
                                    >
                                        Role
                                    </label>
                                    <input
                                        id='cohort-role'
                                        type='text'
                                        autoComplete='organization-title'
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        placeholder='Data Lead'
                                        className='w-full rounded-xl border border-[var(--datatriad-border)] bg-white px-4 py-2.5 text-sm text-[var(--datatriad-ink)] placeholder:text-[var(--datatriad-muted)]/50 focus:border-[var(--datatriad-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--datatriad-accent)]/20'
                                    />
                                </div>
                            </div>

                            {status === 'error' && (
                                <p
                                    role='alert'
                                    className='rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600'
                                >
                                    {errorMessage}
                                </p>
                            )}

                            <button
                                type='submit'
                                disabled={
                                    status === 'submitting' || !fullName.trim() || !email.trim()
                                }
                                className='mt-1 w-full rounded-full bg-[var(--datatriad-accent)] py-3 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {status === 'submitting' ? 'Submitting…' : 'Reserve My Spot'}
                            </button>

                            <p className='text-center text-xs text-[var(--datatriad-muted)]'>
                                No spam. Unsubscribe at any time.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
