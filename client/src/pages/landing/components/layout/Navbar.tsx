import { Recycle, Menu, Sun, Moon } from "lucide-react";
import { GhostButton, PrimaryButton } from "../../../../components/buttons";
import { useTheme } from "../../../../context/ThemeContext";

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Educational Hub", target: "flyers" },
  { label: "Announcements", target: "announcements" },
  { label: "About", target: "about" },
  { label: "How it Works", target: "how" },
];

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const { isDark, toggle } = useTheme();

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 gap-0 border-b border-white/[0.06] dark:border-white/[0.04]"
      style={{
        background: "rgba(17, 61, 54, 0.96)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 no-underline mr-10">
        <div
          className="w-9 h-9 rounded-[10px] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #2A9D87, #4DB6A2)" }}
        >
          <Recycle className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-[20px] text-white leading-none tracking-tight">
            GreenWay
          </div>
          <div className="text-[10px] text-[#86CFC3] font-light tracking-[0.05em]">
            Waste Management
          </div>
        </div>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 flex-1">
        {navLinks.map((link) => (
          <button
            key={link.target}
            onClick={() => scrollTo(link.target)}
            className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-[#86CFC3] hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer border-none bg-transparent"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5 ml-auto">
        {/* Dark/Light toggle */}
        <button
          onClick={toggle}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#86CFC3] border border-white/[0.15] bg-transparent hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <GhostButton tone="light" size="md" onClick={onLoginClick}>
          Log In
        </GhostButton>

        <PrimaryButton size="md" onClick={onSignupClick}>
          Sign Up
        </PrimaryButton>

        {/* Mobile Menu */}
        <button className="md:hidden text-[#86CFC3] bg-transparent border-none cursor-pointer">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
