type ConsultationStepTwoProps = {
  selectedDate: string;
  selectedTime: string;
  timezone: string;
  minimumDate: string;
  timezoneOptions: string[];
  timeSlotOptions: string[];
  onDateChange: (value: string) => void;
  onTimezoneChange: (value: string) => void;
  onTimeSelect: (value: string) => void;
};

export function ConsultationStepTwo({
  selectedDate,
  selectedTime,
  timezone,
  minimumDate,
  timezoneOptions,
  timeSlotOptions,
  onDateChange,
  onTimezoneChange,
  onTimeSelect,
}: ConsultationStepTwoProps) {
  return (
    <>
      <div className="space-y-5">
        <div className="rounded-[20px] bg-[rgba(222,222,222,0.2)] px-3 py-2 text-xs text-[#1a1a1a] w-fit">
          2/3 steps
        </div>
        <p className="max-w-xl text-base leading-7 text-[#1a1a1a] sm:text-lg">
          Choose a time &amp; date that works for you
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3 sm:col-span-1">
          <label htmlFor="date" className="text-sm font-medium text-[#4b4b4b]">
            Date
          </label>
          <input
            id="date"
            type="date"
            min={minimumDate}
            value={selectedDate}
            onChange={(event) => onDateChange(event.target.value)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] focus:border-[#00428a] focus:outline-none"
            required
          />
        </div>

        <div className="space-y-3 sm:col-span-1">
          <label htmlFor="timezone" className="text-sm font-medium text-[#4b4b4b]">
            Time zone
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={(event) => onTimezoneChange(event.target.value)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] focus:border-[#00428a] focus:outline-none"
            required
          >
            {timezoneOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-[#4b4b4b]">Available time slots</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {timeSlotOptions.map((slot) => {
            const selected = selectedTime === slot;

            return (
              <button
                key={slot}
                type="button"
                onClick={() => onTimeSelect(slot)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selected
                    ? "border-[#00428a] bg-[#eaf2fb] text-[#00366f]"
                    : "border-[#e5e5e5] bg-white text-[#3a3a3a] hover:border-[#b8cde8]"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
