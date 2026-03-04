import { useState } from "react";
import { X } from "lucide-react";

interface PhoneInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label = "Phone Number",
  value,
  onChange,
  error,
  hint,
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-digits
    const digits = e.target.value.replace(/\D/g, "");
    // Max 10 digits, must start with 9
    if (digits.length <= 10) {
      onChange(digits);
    }
  };

  const handleClear = () => onChange("");

  // Inline validation
  const validationError =
    value.length > 0 && !value.startsWith("9")
      ? "Philippine numbers must start with 9"
      : value.length > 0 && value.length < 10
        ? `${10 - value.length} more digit${10 - value.length !== 1 ? "s" : ""} needed`
        : null;

  const activeError = error ?? validationError;

  const borderColor = activeError
    ? "border-[#C0392B] focus-within:border-[#C0392B]"
    : focused
      ? "border-[#2A9D87]"
      : "border-[#D9E0DF] dark:border-[#2A4A44]";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[12px] font-semibold text-[#4A5552] dark:text-[#86CFC3] mb-1.5">
          {label}
        </label>
      )}

      {/* Input row */}
      <div
        className={`flex gap-2 rounded-[10px] border-[1.5px] transition-colors duration-200 ${borderColor} bg-[#F7FAF9] dark:bg-[#0D2B26] ${focused ? "bg-white dark:bg-[#122820]" : ""}`}
      >
        {/* +63 prefix */}
        <div className="flex items-center gap-1.5 pl-3.5 pr-2 border-r border-[#D9E0DF] dark:border-[#2A4A44] text-[13px] text-[#4A5552] dark:text-[#86CFC3] font-medium flex-shrink-0 select-none">
          🇵🇭 +63
        </div>

        {/* Number input */}
        <div className="relative flex-1">
          <input
            type="tel"
            inputMode="numeric"
            placeholder="9XX XXX XXXX"
            value={value}
            maxLength={10}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full py-[11px] pr-9 bg-transparent text-[14px] text-[#1E2423] dark:text-[#E8F5F3] outline-none placeholder:text-[#8E9B99] dark:placeholder:text-[#4DB6A2] font-[inherit]"
          />

          {/* Clear button */}
          {value.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B8C3C1] dark:text-[#4DB6A2] hover:text-[#2A9D87] transition-colors p-0.5 border-none bg-transparent cursor-pointer"
              aria-label="Clear phone number"
            >
              <X size={10} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>

      {/* Hint or validation message */}
      {activeError && (
        <p className="text-[11px] text-[#C0392B] mt-1.5">{activeError}</p>
      )}
      {!activeError && hint && (
        <p className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] mt-1.5">
          {hint}
        </p>
      )}
      {!activeError && !hint && value.length === 10 && (
        <p className="text-[11px] text-[#2A9D87] mt-1.5">
          ✓ Valid phone number
        </p>
      )}
    </div>
  );
};

export default PhoneInput;
