import type { ReactNode } from "react";

interface OutlineLightButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit";
  className?: string;
}

const sizeStyles = {
  md: "px-5 py-2 text-[13px] rounded-[9px]",
  lg: "px-7 py-3.5 text-[15px] rounded-xl",
};

/**
 * OutlineLightButton — for use on dark/green backgrounds only.
 * Used in: Hero "Learn More", CTA Banner "Log In"
 */
const OutlineLightButton: React.FC<OutlineLightButtonProps> = ({
  children,
  onClick,
  size = "md",
  fullWidth = false,
  icon,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold text-white border border-white/20 cursor-pointer
        transition-all duration-200 hover:bg-white/[0.15]
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      style={{ background: "rgba(255,255,255,0.08)" }}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default OutlineLightButton;
