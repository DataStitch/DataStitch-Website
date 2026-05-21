import Image from "next/image";
import Link from "next/link";
import { ConsultationBookingForm } from "@/components/consultation/consultation-booking-form";
import { assetPath } from "@/lib/asset-path";

export default function ConsultationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f2f2f2] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto w-full max-w-5xl rounded-[20px] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-[10px] sm:p-9 lg:p-11">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <section className="w-full lg:max-w-[320px]">
            <div className="flex h-full flex-col gap-10">
              <Image
                src={assetPath("/consultation/consultation-badge-2072f0.png")}
                alt="Suchure consultation"
                width={150}
                height={46}
                className="h-auto w-[150px]"
                priority
              />

              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl">
                  Book a discovery call
                </h1>
                <p className="text-sm leading-6 text-[#555555]">
                  Discuss your AI governance challenges, model risk exposure, or data strategy
                  with a Suchure specialist. No sales pitch, just a focused conversation.
                </p>
              </div>
            </div>
          </section>

          <Image
            src={assetPath("/consultation/consultation-separator.svg")}
            alt=""
            width={5}
            height={433}
            aria-hidden
            className="hidden h-[433px] w-[5px] shrink-0 lg:block"
          />

          <section className="w-full lg:flex-1">
            <div className="mb-9 flex items-center justify-end">
              <Link
                href="/"
                aria-label="Close consultation form"
                className="flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#525252] transition hover:bg-[#f2f2f2]"
              >
                ×
              </Link>
            </div>

            <div>
              <ConsultationBookingForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
