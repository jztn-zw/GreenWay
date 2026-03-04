import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showIcon?: boolean;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  showIcon = false,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      {label && (
        <label className="block text-[12px] font-semibold text-[#4A5552] dark:text-[#86CFC3] mb-1.5">
          {label}
        </label>
      )}

      <div className="relative">
        {showIcon && (
          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B99] dark:text-[#4DB6A2]" />
        )}

        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`
            w-full px-3.5 py-2.75 rounded-[10px] border-[1.5px]
            border-[#D9E0DF] dark:border-[#2A4A44]
            bg-[#F7FAF9] dark:bg-[#0D2B26]
            text-[14px] text-[#1E2423] dark:text-[#E8F5F3]
            outline-none transition-colors duration-200
            focus:border-[#2A9D87] focus:bg-white dark:focus:bg-[#122820]
            placeholder:text-[#8E9B99] dark:placeholder:text-[#4DB6A2]
            font-[inherit]
            ${showIcon ? "pl-10" : ""}
            pr-10
            ${className ?? ""}
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8E9B99] dark:text-[#4DB6A2] bg-transparent border-none cursor-pointer hover:text-[#2A9D87] transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};
