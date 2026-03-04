import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const sizeStyles = {
  md: "px-5 py-2 text-[13px] rounded-[9px]",
  lg: "px-7 py-3.5 text-[15px] rounded-xl",
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  size = "md",
  fullWidth = false,
  icon,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold text-white border-none cursor-pointer
        transition-all duration-200 hover:-translate-y-px
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      style={{ background: "#2A9D87" }}
      onMouseEnter={(e) =>
        !disabled &&
        (e.currentTarget.style.boxShadow = "0 6px 20px rgba(42,157,135,0.35)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default PrimaryButton;
