import {
  Recycle,
  Shield,
  Accessibility,
  Leaf,
  Facebook,
  Instagram,
  Megaphone,
} from "lucide-react";

interface FooterProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Footer: React.FC<FooterProps> = ({ onLoginClick, onSignupClick }) => {
  return (
    <footer
      className="pt-16 pb-7"
      style={{ background: "#0D2B26", marginTop: "0" }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2A9D87, #4DB6A2)",
                }}
              >
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-[18px] text-white leading-none">
                  GreenWay
                </div>
                <div className="text-[10px] text-[#4DB6A2] font-light">
                  Waste Management Portal
                </div>
              </div>
            </div>
            <p className="text-[13px] text-[#86CFC3] leading-[1.7] font-light mb-5">
              Your official digital platform for waste management services in
              Candelaria, Quezon Province. Building a cleaner future together.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                {
                  icon: <Megaphone className="w-4 h-4" />,
                  label: "Announcements",
                },
              ].map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#86CFC3] border border-white/10 bg-white/[0.04] cursor-pointer hover:bg-white/[0.1] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">
              Services
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Report Waste", action: onLoginClick },
                { label: "View Schedule", action: onLoginClick },
                { label: "Educational Hub", action: () => scrollTo("flyers") },
                {
                  label: "Announcements",
                  action: () => scrollTo("announcements"),
                },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-left text-[13px] text-[#86CFC3] bg-transparent border-none cursor-pointer hover:text-[#4DB6A2] transition-colors duration-200 p-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">
              Support
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                "FAQs",
                "Contact Us",
                "Report an Issue",
                "Barangay Directory",
              ].map((l) => (
                <button
                  key={l}
                  className="text-left text-[13px] text-[#86CFC3] bg-transparent border-none cursor-pointer hover:text-[#4DB6A2] transition-colors duration-200 p-0"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">
              Legal
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Accessibility",
                "Data Policy",
              ].map((l) => (
                <button
                  key={l}
                  className="text-left text-[13px] text-[#86CFC3] bg-transparent border-none cursor-pointer hover:text-[#4DB6A2] transition-colors duration-200 p-0"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="text-[12px] text-[#4DB6A2]">
            © 2026 GreenWay — LGU Candelaria, Quezon Province. All rights reserved.
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {[
              { icon: <Shield className="w-3 h-3" />, label: "Secure" },
              {
                icon: <Accessibility className="w-3 h-3" />,
                label: "Accessible",
              },
              { icon: <Leaf className="w-3 h-3" />, label: "Green Certified" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.08] rounded-md px-2.5 py-1 text-[11px] text-[#86CFC3]"
              >
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
