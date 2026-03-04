import { useState, useEffect, useMemo } from "react";
import { Recycle, Mail, Phone, User } from "lucide-react";
import { CloseButton, PrimaryButton } from "../../../../components/buttons";
import { PasswordField } from "../../../../components/inputs/PasswordField";
import FormInput from "../../../../components/inputs/FormInput";
import { useAuth } from "../../../../hooks/useAuth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

// Detects what the user is typing
function detectIdentifierType(value: string): "email" | "phone" | "username" {
  if (value.includes("@")) return "email";
  if (/^(\+63|09)\d*/.test(value)) return "phone";
  return "username";
}

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToSignup,
}) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, clearError } = useAuth();

  // Auto-detects type as user types
  const identifierType = useMemo(
    () => detectIdentifierType(identifier),
    [identifier],
  );

  const labelMap = {
    email: "Email Address",
    phone: "Phone Number",
    username: "Username",
  };

  const placeholderMap = {
    email: "you@example.com",
    phone: "09XX XXX XXXX",
    username: "Email, phone, or username",
  };

  const iconMap = {
    email: <Mail className="w-4 h-4" />,
    phone: <Phone className="w-4 h-4" />,
    username: <User className="w-4 h-4" />,
  };

  useEffect(() => {
    setIdentifier("");
    setPassword("");
    clearError();
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async () => {
    if (!identifier || !password) return;
    const user = await login({ identifier, password });
    if (user) {
      onClose();
      // TODO: redirect based on user.role
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center transition-opacity duration-[250ms] ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(13,43,38,0.75)", backdropFilter: "blur(6px)" }}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white dark:bg-[#122820] rounded-3xl w-full max-w-[440px] mx-4 p-10 relative shadow-[0_32px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.6)] transition-transform duration-[250ms] overflow-y-auto max-h-[90vh] custom-scrollbar ${
          isOpen ? "translate-y-0" : "translate-y-5"
        }`}
      >
        <CloseButton onClick={onClose} className="absolute top-4 right-4" />

        {/* Logo */}
        <div className="text-center mb-7">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
            style={{ background: "linear-gradient(135deg, #2A9D87, #1B6A5C)" }}
          >
            <Recycle className="w-7 h-7 text-white" />
          </div>
          <div className="font-bold text-[24px] text-[#0D2B26] dark:text-white mb-1">
            Welcome Back
          </div>
          <div className="text-[13px] text-[#8E9B99] dark:text-[#86CFC3]">
            Log in to your GreenWay account
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-[#F7FAF9] dark:bg-[#0D2B26] rounded-xl p-1 mb-6">
          <button className="flex-1 py-2 rounded-[9px] text-[13px] font-medium border-none cursor-pointer bg-white dark:bg-[#1E3D36] text-[#165247] dark:text-[#4DB6A2] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            Log In
          </button>
          <button
            onClick={onSwitchToSignup}
            className="flex-1 py-2 rounded-[9px] text-[13px] font-medium border-none cursor-pointer bg-transparent text-[#6B7775] dark:text-[#86CFC3] hover:text-[#1E2423] dark:hover:text-white transition-all duration-200"
          >
            Sign Up
          </button>
        </div>

        {/* Smart single identifier input */}
        <div className="mb-4">
          <FormInput
            label="Email, Phone, or Username"
            type={
              identifierType === "email"
                ? "email"
                : identifierType === "phone"
                  ? "tel"
                  : "text"
            }
            placeholder={placeholderMap[identifierType]}
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              clearError();
            }}
            leftIcon={
              <span className="transition-all duration-200">
                {iconMap[identifierType]}
              </span>
            }
            clearable
          />
          {/* Subtle type hint */}
          {identifier && (
            <p className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] mt-1 ml-1">
              Signing in with{" "}
              <span className="text-[#1E7D6B] dark:text-[#4DB6A2] font-medium">
                {identifierType}
              </span>
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="block text-[12px] font-semibold text-[#4A5552] dark:text-[#86CFC3]">
              Password
            </span>
            <button className="text-[11px] text-[#1E7D6B] dark:text-[#4DB6A2] font-medium bg-transparent border-none cursor-pointer hover:underline">
              Forgot password?
            </button>
          </div>
          <PasswordField
            label=""
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError();
            }}
            required
          />
        </div>

        {/* API Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-[13px]">
            {error}
          </div>
        )}

        <PrimaryButton
          size="lg"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Logging in…" : "Log In to GreenWay"}
        </PrimaryButton>

        {/* Divider */}
        <div
          className="relative text-center text-[12px] text-[#8E9B99] dark:text-[#4DB6A2] my-4
          before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[calc(50%-28px)] before:h-px before:bg-[#D9E0DF] dark:before:bg-[#1E3D36]
          after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[calc(50%-28px)] after:h-px after:bg-[#D9E0DF] dark:after:bg-[#1E3D36]"
        >
          or continue with
        </div>

        {/* Google */}
        <button className="w-full py-3 rounded-xl text-[14px] font-medium text-[#2E3533] dark:text-[#C2E8E2] border border-[#D9E0DF] dark:border-[#1E3D36] bg-white dark:bg-[#0D2B26] cursor-pointer hover:bg-[#F7FAF9] dark:hover:bg-[#122820] transition-all duration-200 flex items-center justify-center gap-2.5">
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="text-center text-[13px] text-[#6B7775] dark:text-[#86CFC3] mt-4">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-[#1E7D6B] dark:text-[#4DB6A2] font-semibold bg-transparent border-none cursor-pointer hover:underline"
          >
            Sign Up Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
