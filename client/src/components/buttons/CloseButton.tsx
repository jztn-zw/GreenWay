import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close"
      className={`
        w-8 h-8 rounded-full flex items-center justify-center
        bg-[#EDF1F0] dark:bg-[#1E3D36]
        text-[#6B7775] dark:text-[#86CFC3]
        border-none cursor-pointer
        hover:bg-[#D9E0DF] dark:hover:bg-[#2A4A44]
        transition-colors duration-200
        ${className}
      `}
    >
      <X className="w-4 h-4" />
    </button>
  );
};

export default CloseButton;
