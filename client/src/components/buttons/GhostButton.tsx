import type{ ReactNode } from 'react';

interface GhostButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  /** Use 'dark' on white backgrounds, 'light' on dark/green backgrounds */
  tone?: 'light' | 'dark';
}

const sizeStyles = {
  md: 'px-5 py-2 text-[13px] rounded-[9px]',
  lg: 'px-7 py-3.5 text-[15px] rounded-xl',
};

const toneStyles = {
  light: 'text-[#C2E8E2] border-white/[0.15] hover:bg-white/[0.08] hover:text-white',
  dark:  'text-[#4A5552] border-[#D9E0DF] hover:bg-[#F7FAF9] hover:text-[#1E2423]',
};

const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  onClick,
  size = 'md',
  fullWidth = false,
  icon,
  type = 'button',
  className = '',
  tone = 'light',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium bg-transparent border cursor-pointer
        transition-all duration-200
        ${sizeStyles[size]}
        ${toneStyles[tone]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default GhostButton;
