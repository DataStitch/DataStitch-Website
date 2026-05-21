type ConsultationStepOneProps = {
  country: string;
  discussionTopic: string;
  message: string;
  countries: string[];
  discussionTopics: string[];
  onCountryChange: (value: string) => void;
  onDiscussionTopicChange: (value: string) => void;
  onMessageChange: (value: string) => void;
};

export function ConsultationStepOne({
  country,
  discussionTopic,
  message,
  countries,
  discussionTopics,
  onCountryChange,
  onDiscussionTopicChange,
  onMessageChange,
}: ConsultationStepOneProps) {
  return (
    <>
      <div className="space-y-5">
        <div className="rounded-[20px] bg-[rgba(222,222,222,0.2)] px-3 py-2 text-xs text-[#1a1a1a] w-fit">
          1/3 steps
        </div>
        <p className="max-w-xl text-base leading-7 text-[#1a1a1a] sm:text-lg">
          Tell us where you&apos;re joining from and what you&apos;d like to discuss.
        </p>
      </div>

      <div className="space-y-3">
        <label htmlFor="country" className="text-sm font-medium text-[#4b4b4b]">
          Where are you joining from?
        </label>
        <select
          id="country"
          value={country}
          onChange={(event) => onCountryChange(event.target.value)}
          className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] focus:border-[#00428a] focus:outline-none"
          required
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="topic" className="text-sm font-medium text-[#4b4b4b]">
          What would you like to discuss?
        </label>
        <select
          id="topic"
          value={discussionTopic}
          onChange={(event) => onDiscussionTopicChange(event.target.value)}
          className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] focus:border-[#00428a] focus:outline-none"
          required
        >
          <option value="" disabled>
            Select a topic
          </option>
          {discussionTopics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-sm font-medium text-[#4b4b4b]">
          Additional context (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => onMessageChange(event.target.value)}
          placeholder="Share any context that will help us prepare for the call."
          rows={4}
          className="w-full resize-y rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
        />
      </div>
    </>
  );
}
