import type { ReactNode } from 'react';

interface AccentButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
}

const sizeStyles = {
  md: 'px-5 py-2 text-[13px] rounded-[9px]',
  lg: 'px-7 py-3.5 text-[15px] rounded-xl',
};

const AccentButton: React.FC<AccentButtonProps> = ({
  children,
  onClick,
  size = 'md',
  fullWidth = false,
  icon,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold text-white border-none cursor-pointer
        transition-all duration-200 hover:-translate-y-px
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{ background: '#D4A84B' }}
      onMouseEnter={e => (e.currentTarget.style.background = '#E2C07A')}
      onMouseLeave={e => (e.currentTarget.style.background = '#D4A84B')}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default AccentButton;
