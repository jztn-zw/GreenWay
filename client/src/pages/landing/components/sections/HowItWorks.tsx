import { UserPlus, LayoutDashboard, Leaf } from "lucide-react";
import { PrimaryButton, GhostButton } from "../../../../components/buttons";
interface HowItWorksProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

const steps = [
  {
    num: 1,
    icon: <UserPlus className="w-8 h-8 text-[#2A9D87]" />,
    title: "Create Your Account",
    text: "Create an account with your basic info — name, email, phone, and barangay. It's free and only takes a minute.",
  },
  {
    num: 2,
    icon: <LayoutDashboard className="w-8 h-8 text-[#2A9D87]" />,
    title: "Access Your Dashboard",
    text: "View your personal dashboard with schedules, reports, and community updates.",
  },
  {
    num: 3,
    icon: <Leaf className="w-8 h-8 text-[#2A9D87]" />,
    title: "Participate & Contribute",
    text: "Submit reports, join community drives, and help keep Candelaria clean and green.",
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({
  onSignupClick,
  onLoginClick,
}) => {
  return (
    <>
      {/* How it Works */}
      <section id="how" className="py-20 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1E7D6B] dark:text-[#4DB6A2] mb-3.5
              before:content-[''] before:w-6 before:h-px before:bg-[#4DB6A2]
              after:content-['']  after:w-6  after:h-px  after:bg-[#4DB6A2]"
            >
              How it Works
            </div>
            <h2 className="font-bold text-[36px] text-[#0D2B26] dark:text-white leading-[1.2] mb-3.5">
              Simple Steps to Get Started
            </h2>
            <p className="text-[15px] text-[#6B7775] dark:text-[#86CFC3] font-light leading-[1.7] max-w-[520px] mx-auto">
              Join Candelaria residents already using GreenWay to keep their
              community clean.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative bg-white dark:bg-[#122820] rounded-2xl p-7 border border-[#EDF1F0] dark:border-[#1E3D36] shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] text-center
                  transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                {/* Step number badge */}
                <div className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full bg-[#1E7D6B] text-white text-[13px] font-bold flex items-center justify-center shadow-sm">
                  {step.num}
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 text-center text-[#4DB6A2] text-lg z-10">
                    →
                  </div>
                )}

                <div className="flex justify-center mb-4">{step.icon}</div>
                <div className="font-semibold text-[16px] text-[#1E2423] dark:text-[#E8F5F3] mb-2">
                  {step.title}
                </div>
                <div className="text-[13px] text-[#6B7775] dark:text-[#86CFC3] leading-[1.6]">
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#F7FAF9] dark:bg-[#0A1A17]">
        <div className="max-w-[1140px] mx-auto px-8">
          <div
            className="flex items-center justify-between gap-8 rounded-3xl p-12 max-sm:flex-col max-sm:text-center max-sm:px-7 max-sm:py-10"
            style={{
              background: "linear-gradient(135deg, #0D2B26 0%, #1B6A5C 100%)",
            }}
          >
            <div>
              <h2 className="font-bold text-[30px] text-white leading-[1.2] mb-2">
                Ready to Join GreenWay?
              </h2>
              <p className="text-[15px] text-[#86CFC3] font-light">
                Be part of Candelaria's cleaner, greener future. Sign up today —
                it's completely free.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 max-sm:flex-col max-sm:w-full">
              <PrimaryButton size="lg" onClick={onSignupClick}>
                <Leaf className="w-4 h-4" /> Create Free Account
              </PrimaryButton>
              <GhostButton size="lg" onClick={onLoginClick}>
                Log In
              </GhostButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
