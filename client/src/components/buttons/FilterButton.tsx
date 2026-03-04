import type{ ReactNode } from "react";

interface FilterButtonProps {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  icon?: ReactNode;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  onClick,
  active = false,
  icon,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-1.5
        px-[18px] py-[7px] rounded-full border
        text-[13px] font-medium cursor-pointer
        transition-all duration-200
        ${
          active
            ? "bg-[#1E7D6B] border-[#1E7D6B] text-white"
            : "bg-white dark:bg-[#122820] border-[#D9E0DF] dark:border-[#1E3D36] text-[#4A5552] dark:text-[#86CFC3] hover:border-[#2A9D87] hover:text-[#1E7D6B] dark:hover:text-[#4DB6A2] dark:hover:border-[#2A9D87]"
        }
        ${className}
      `}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default FilterButton;
