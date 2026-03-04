import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { X } from "lucide-react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
  hint?: string;
  clearable?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  leftIcon,
  rightElement,
  hint,
  clearable = false,
  className = "",
  value,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");

  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    const syntheticEvent = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const showClearButton =
    clearable && inputValue !== undefined && String(inputValue).length > 0;

  const baseInput =
    "w-full py-[11px] rounded-[10px] border-[1.5px] bg-[#F7FAF9] dark:bg-[#0D2B26] text-[14px] text-[#1E2423] dark:text-[#E8F5F3] outline-none transition-colors duration-200 focus:bg-white dark:focus:bg-[#122820] placeholder:text-[#8E9B99] dark:placeholder:text-[#4DB6A2] font-[inherit]";

  const borderColor = error
    ? "border-[#C0392B] focus:border-[#C0392B]"
    : "border-[#D9E0DF] dark:border-[#2A4A44] focus:border-[#2A9D87] dark:focus:border-[#2A9D87]";

  const paddingLeft = leftIcon ? "pl-10" : "px-3.5";
  const paddingRight = rightElement || clearable ? "pr-9" : "px-3.5";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[12px] font-semibold text-[#4A5552] dark:text-[#86CFC3] mb-1.5">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E9B99] dark:text-[#4DB6A2] pointer-events-none">
            {leftIcon}
          </div>
        )}

        <input
          className={`${baseInput} ${borderColor} ${paddingLeft} ${paddingRight} ${className}`}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />

        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B8C3C1] dark:text-[#4DB6A2] hover:text-[#2A9D87] transition-colors p-0.5 border-none bg-transparent cursor-pointer"
            aria-label="Clear input"
          >
            <X size={10} strokeWidth={3} />
          </button>
        )}

        {rightElement && !showClearButton && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>

      {hint && !error && (
        <p className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] mt-1.5">
          {hint}
        </p>
      )}

      {error && <p className="text-[11px] text-[#C0392B] mt-1.5">{error}</p>}
    </div>
  );
};

export default FormInput;
