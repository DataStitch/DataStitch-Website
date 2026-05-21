"use client";

import { FormEvent, useMemo, useState } from "react";
import { ConsultationStepOne } from "@/components/consultation/consultation-step-one";
import { ConsultationStepTwo } from "@/components/consultation/consultation-step-two";
import { ConsultationStepThree } from "@/components/consultation/consultation-step-three";
import { ConsultationSuccessStep } from "@/components/consultation/consultation-success-step";

type SubmitStatus =
  | { type: "idle" }
  | { type: "error"; message: string }
  | { type: "success"; message: string };

type Step = 1 | 2 | 3 | 4;

const DISCUSSION_TOPICS = [
  "AI governance framework design",
  "Model risk and controls",
  "Data strategy and readiness",
  "Policy, compliance, and auditability",
  "Team training and capability uplift",
  "Other",
];

const COUNTRIES = [
  "United Kingdom",
  "United States",
  "Nigeria",
  "Kenya",
  "South Africa",
  "United Arab Emirates",
  "India",
  "Singapore",
  "Other",
];

const TIMEZONE_OPTIONS = [
  "UTC",
  "Europe/London",
  "America/New_York",
  "Africa/Lagos",
  "Asia/Dubai",
  "Asia/Singapore",
];

const TIME_SLOT_OPTIONS = [
  "09:00 AM - 09:30 AM",
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "02:00 PM - 02:30 PM",
  "03:00 PM - 03:30 PM",
  "04:00 PM - 04:30 PM",
];

function getEndpoint() {
  return process.env.NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT?.trim() ?? "";
}

export function ConsultationBookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [country, setCountry] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("UTC");
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });

  const endpointConfigured = useMemo(() => Boolean(getEndpoint()), []);

  const minimumDate = useMemo(() => {
    return new Date().toISOString().split("T")[0] ?? "";
  }, []);

  const canContinueFromStep = useMemo(() => {
    if (step === 1) {
      return Boolean(country && discussionTopic);
    }

    if (step === 2) {
      return Boolean(selectedDate && selectedTime && timezone);
    }

    return true;
  }, [country, discussionTopic, selectedDate, selectedTime, step, timezone]);

  function handleBack() {
    if (step <= 1 || step === 4 || isSubmitting) {
      return;
    }

    setStatus({ type: "idle" });
    setStep((previous) => (previous > 1 ? ((previous - 1) as Step) : previous));
  }

  function handleAdvance() {
    if (step === 1) {
      if (!country || !discussionTopic) {
        setStatus({
          type: "error",
          message: "Please select your country and discussion topic.",
        });
        return;
      }

      setStatus({ type: "idle" });
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!selectedDate || !selectedTime || !timezone) {
        setStatus({
          type: "error",
          message: "Please choose a date, time slot, and timezone.",
        });
        return;
      }

      setStatus({ type: "idle" });
      setStep(3);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (step < 3) {
      handleAdvance();
      return;
    }

    if (!fullName.trim() || !workEmail.trim() || !organizationName.trim() || !role.trim()) {
      setStatus({
        type: "error",
        message: "Please complete your full name, work email, organization name, and role.",
      });
      return;
    }

    const endpoint = getEndpoint();

    if (!endpoint) {
      setStatus({
        type: "error",
        message:
          "Submission endpoint is not configured yet. Add NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT when your URL is ready.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          workEmail: workEmail.trim(),
          organizationName: organizationName.trim(),
          role: role.trim(),
          country,
          discussionTopic,
          message: message.trim(),
          selectedDate,
          selectedTime,
          timezone,
          submittedAt: new Date().toISOString(),
          source: "suchure-consultation-page",
        }),
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          message: `Could not submit your request (status ${response.status}).`,
        });
        return;
      }

      setCountry("");
      setDiscussionTopic("");
      setMessage("");
      setSelectedDate("");
      setSelectedTime("");
      setFullName("");
      setWorkEmail("");
      setOrganizationName("");
      setRole("");
      setStep(4);
      setStatus({
        type: "success",
        message: "A calendar invite with the meeting link has been sent to your email.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error while submitting. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
      {step <= 3 ? (
        <>
          {step === 1 ? (
            <ConsultationStepOne
              country={country}
              discussionTopic={discussionTopic}
              message={message}
              countries={COUNTRIES}
              discussionTopics={DISCUSSION_TOPICS}
              onCountryChange={setCountry}
              onDiscussionTopicChange={setDiscussionTopic}
              onMessageChange={setMessage}
            />
          ) : null}

          {step === 2 ? (
            <ConsultationStepTwo
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timezone={timezone}
              minimumDate={minimumDate}
              timezoneOptions={TIMEZONE_OPTIONS}
              timeSlotOptions={TIME_SLOT_OPTIONS}
              onDateChange={setSelectedDate}
              onTimezoneChange={setTimezone}
              onTimeSelect={setSelectedTime}
            />
          ) : null}

          {step === 3 ? (
            <ConsultationStepThree
              fullName={fullName}
              workEmail={workEmail}
              organizationName={organizationName}
              role={role}
              message={message}
              onFullNameChange={setFullName}
              onWorkEmailChange={setWorkEmail}
              onOrganizationNameChange={setOrganizationName}
              onRoleChange={setRole}
              onMessageChange={setMessage}
            />
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="rounded-full border border-[#d8d8d8] bg-white px-6 py-3 text-base font-medium text-[#3d3d3d] transition hover:border-[#b8b8b8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                Back
              </button>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting || !canContinueFromStep}
              className="rounded-full bg-[#00428a] px-7 py-3 text-base font-semibold text-[#fafafa] transition hover:bg-[#00366f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : step === 3 ? "Submit" : "Next"}
            </button>

            {!endpointConfigured ? (
              <p className="text-xs text-[#777777]">
                Configure NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT to enable submissions.
              </p>
            ) : null}
          </div>
        </>
      ) : (
        <ConsultationSuccessStep
          message={
            status.type === "success"
              ? status.message
              : "A calendar invite with the meeting link has been sent to your email."
          }
          onDone={() => {
            setStep(1);
            setTimezone("UTC");
            setStatus({ type: "idle" });
          }}
        />
      )}

      {status.type === "error" ? (
        <p className="rounded-lg border border-[#f3b8b8] bg-[#fff6f6] px-3 py-2 text-sm text-[#9f2222]">
          {status.message}
        </p>
      ) : null}

      {status.type === "success" && step <= 3 ? (
        <p className="rounded-lg border border-[#bbe8dc] bg-[#f2fffb] px-3 py-2 text-sm text-[#155f4f]">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
