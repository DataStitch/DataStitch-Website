type ConsultationStepThreeProps = {
  fullName: string;
  workEmail: string;
  organizationName: string;
  role: string;
  message: string;
  onFullNameChange: (value: string) => void;
  onWorkEmailChange: (value: string) => void;
  onOrganizationNameChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onMessageChange: (value: string) => void;
};

export function ConsultationStepThree({
  fullName,
  workEmail,
  organizationName,
  role,
  message,
  onFullNameChange,
  onWorkEmailChange,
  onOrganizationNameChange,
  onRoleChange,
  onMessageChange,
}: ConsultationStepThreeProps) {
  return (
    <>
      <div className="space-y-5">
        <div className="rounded-[20px] bg-[rgba(222,222,222,0.2)] px-3 py-2 text-xs text-[#1a1a1a] w-fit">
          3/3 steps
        </div>
        <p className="max-w-xl text-base leading-7 text-[#1a1a1a] sm:text-lg">
          Share your details so we can confirm your booking
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <label htmlFor="full-name" className="text-sm font-medium text-[#4b4b4b]">
            Full name
          </label>
          <input
            id="full-name"
            type="text"
            value={fullName}
            onChange={(event) => onFullNameChange(event.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
            required
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="work-email" className="text-sm font-medium text-[#4b4b4b]">
            Work email
          </label>
          <input
            id="work-email"
            type="email"
            value={workEmail}
            onChange={(event) => onWorkEmailChange(event.target.value)}
            placeholder="Enter your work email"
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <label htmlFor="organization-name" className="text-sm font-medium text-[#4b4b4b]">
            Organization name
          </label>
          <input
            id="organization-name"
            type="text"
            value={organizationName}
            onChange={(event) => onOrganizationNameChange(event.target.value)}
            placeholder="Enter organization name"
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
            required
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="role" className="text-sm font-medium text-[#4b4b4b]">
            Role
          </label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
            placeholder="Enter your role"
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="final-message" className="text-sm font-medium text-[#4b4b4b]">
          Message
        </label>
        <textarea
          id="final-message"
          value={message}
          onChange={(event) => onMessageChange(event.target.value)}
          placeholder="Type your message here."
          rows={4}
          className="w-full resize-y rounded-lg border border-[#e5e5e5] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-[#959595] focus:border-[#00428a] focus:outline-none"
        />
      </div>
    </>
  );
}
