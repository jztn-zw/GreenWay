import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface GreenWaySelectProps {
  label?: string;
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormSelector: React.FC<GreenWaySelectProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative mb-4" ref={containerRef}>
      {label && (
        <label className="block text-[12px] font-semibold text-[#4A5552] dark:text-[#86CFC3] mb-1.5">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-3.5 py-[11px] rounded-[10px] border-[1.5px] text-[14px] outline-none transition-colors duration-200 text-left font-[inherit]
          ${
            isOpen
              ? "border-[#2A9D87] bg-white dark:bg-[#122820]"
              : "border-[#D9E0DF] dark:border-[#2A4A44] bg-[#F7FAF9] dark:bg-[#0D2B26] hover:border-[#BFC7C6] dark:hover:border-[#2A9D87]"
          }
        `}
      >
        <span
          className={
            !value
              ? "text-[#8E9B99] dark:text-[#4DB6A2]"
              : "text-[#1E2423] dark:text-[#E8F5F3]"
          }
        >
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#8E9B99] dark:text-[#4DB6A2] transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2A9D87]" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-[210] w-full mt-1 bg-white dark:bg-[#122820] rounded-[10px] border-[1.5px] border-[#D9E0DF] dark:border-[#2A4A44] shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] overflow-hidden animate-in fade-in duration-100">
          <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-3.5 py-2.5 text-[14px] text-left transition-colors
                  ${
                    value === option
                      ? "bg-[#EAF6F4] dark:bg-[#0D2B26] text-[#165247] dark:text-[#4DB6A2] font-semibold"
                      : "text-[#4A5552] dark:text-[#86CFC3] hover:bg-[#F7FAF9] dark:hover:bg-[#0D2B26] hover:text-[#2A9D87] dark:hover:text-[#4DB6A2]"
                  }
                `}
              >
                {option}
                {value === option && (
                  <Check className="w-4 h-4 text-[#2A9D87]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
