import { useState, useEffect } from "react";
import { Recycle, Mail } from "lucide-react";
import { CloseButton, PrimaryButton } from "../../../../components/buttons";
import barangayData from "../../../../data/barangays.json";
import { FormSelector } from "../../../../components/inputs/FormSelector";
import { PasswordField } from "../../../../components/inputs/PasswordField";
import FormInput from "../../../../components/inputs/FormInput";
import PhoneInput from "../../../../components/inputs/PhoneInput";
import { useAuth } from "../../../../hooks/useAuth";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
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

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    barangay: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const { register, loading, error, clearError } = useAuth();

  const set =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      clearError();
    };

  useEffect(() => {
    setForm({
      full_name: "",
      username: "",
      email: "",
      phone: "",
      barangay: "",
      password: "",
    });
    setSuccess(false);
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
    const { full_name, username, email, phone, barangay, password } = form;
    if (!full_name || !username || !email || !phone || !barangay || !password)
      return;

    const ok = await register({
      full_name,
      username,
      email,
      phone: `+63${phone}`,
      barangay,
      password,
    });
    if (ok) {
      setSuccess(true);
      setTimeout(() => {
        onClose();
        onSwitchToLogin();
      }, 2000);
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
            Join GreenWay
          </div>
          <div className="text-[13px] text-[#8E9B99] dark:text-[#86CFC3]">
            Create your free resident account
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-[#F7FAF9] dark:bg-[#0D2B26] rounded-xl p-1 mb-6">
          <button
            onClick={onSwitchToLogin}
            className="flex-1 py-2 rounded-[9px] text-[13px] font-medium border-none cursor-pointer bg-transparent text-[#6B7775] dark:text-[#86CFC3] hover:text-[#1E2423] dark:hover:text-white transition-all duration-200"
          >
            Log In
          </button>
          <button className="flex-1 py-2 rounded-[9px] text-[13px] font-medium border-none cursor-pointer bg-white dark:bg-[#1E3D36] text-[#165247] dark:text-[#4DB6A2] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            Sign Up
          </button>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <FormInput
            label="Full Name"
            type="text"
            placeholder="Juan dela Cruz"
            value={form.full_name}
            onChange={set("full_name")}
            clearable
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <FormInput
            label="Username"
            type="text"
            placeholder="juandelacruz"
            value={form.username}
            onChange={set("username")}
            clearable
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            leftIcon={<Mail className="w-4 h-4" />}
            clearable
          />
        </div>

        {/* Phone */}
        {/* Phone */}
        <div className="mb-4">
          <PhoneInput
            value={form.phone}
            onChange={(val) => {
              setForm((prev) => ({ ...prev, phone: val }));
              clearError();
            }}
          />
        </div>

        {/* Barangay */}
        <div className="mb-4">
          <FormSelector
            label="Barangay"
            placeholder="Select your barangay"
            options={barangayData.barangays}
            value={form.barangay}
            onChange={(val) => {
              setForm((prev) => ({ ...prev, barangay: val }));
              clearError();
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-0">
          <PasswordField
            label="Password"
            placeholder="Create a strong password"
            value={form.password}
            onChange={set("password")}
            showIcon={false}
            required
          />
        </div>
        <p className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] -mt-3 mb-4">
          Password must be at least 8 characters.
        </p>

        {/* API Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-[13px]">
            {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-[13px]">
            Account created! Redirecting to login…
          </div>
        )}

        <PrimaryButton
          size="lg"
          fullWidth
          onClick={handleSubmit}
          disabled={loading || success}
        >
          {loading ? "Creating account…" : "Create My Account"}
        </PrimaryButton>

        {/* Divider */}
        <div
          className="relative text-center text-[12px] text-[#8E9B99] dark:text-[#4DB6A2] my-4
          before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[calc(50%-28px)] before:h-px before:bg-[#D9E0DF] dark:before:bg-[#1E3D36]
          after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[calc(50%-28px)] after:h-px after:bg-[#D9E0DF] dark:after:bg-[#1E3D36]"
        >
          or sign up with
        </div>

        {/* Google */}
        <button className="w-full py-3 rounded-xl text-[14px] font-medium text-[#2E3533] dark:text-[#C2E8E2] border border-[#D9E0DF] dark:border-[#1E3D36] bg-white dark:bg-[#0D2B26] cursor-pointer hover:bg-[#F7FAF9] dark:hover:bg-[#122820] transition-all duration-200 flex items-center justify-center gap-2.5">
          <GoogleIcon />
          Continue with Google
        </button>

        <p className="text-center text-[11px] text-[#8E9B99] dark:text-[#86CFC3] mt-4 leading-relaxed">
          By creating an account, you agree to our{" "}
          <button className="text-[#1E7D6B] dark:text-[#4DB6A2] font-medium bg-transparent border-none cursor-pointer hover:underline">
            Terms of Use
          </button>{" "}
          and{" "}
          <button className="text-[#1E7D6B] dark:text-[#4DB6A2] font-medium bg-transparent border-none cursor-pointer hover:underline">
            Privacy Policy
          </button>
          .
        </p>

        <div className="text-center text-[13px] text-[#6B7775] dark:text-[#86CFC3] mt-3">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-[#1E7D6B] dark:text-[#4DB6A2] font-semibold bg-transparent border-none cursor-pointer hover:underline"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
