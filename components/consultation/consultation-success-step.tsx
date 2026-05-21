type ConsultationSuccessStepProps = {
  message: string;
  onDone: () => void;
};

export function ConsultationSuccessStep({ message, onDone }: ConsultationSuccessStepProps) {
  return (
    <div className="space-y-5 rounded-xl border border-[#e3efe9] bg-[#f7fffb] p-5">
      <h2 className="text-2xl font-semibold text-[#1a1a1a]">Your call has been scheduled</h2>
      <p className="text-sm leading-6 text-[#375851]">{message}</p>
      <button
        type="button"
        onClick={onDone}
        className="rounded-full bg-[#00428a] px-7 py-3 text-base font-semibold text-[#fafafa] transition hover:bg-[#00366f]"
      >
        Done
      </button>
    </div>
  );
}
