import { Smartphone, Bell, BarChart2, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-5 h-5 text-[#2A9D87]" />,
    title: "Easy Reporting",
    text: "Report waste issues from anywhere, anytime",
  },
  {
    icon: <Bell className="w-5 h-5 text-[#2A9D87]" />,
    title: "Real-time Alerts",
    text: "Get notified about schedules and announcements",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-[#2A9D87]" />,
    title: "Track Status",
    text: "Monitor your reports and requests live",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#2A9D87]" />,
    title: "Learn & Educate",
    text: "Access guides and educational materials",
  },
];

const stats = [
  { val: "18", lbl: "Barangays Covered", accent: false },
  { val: "97%", lbl: "Collection Rate", accent: true },
  { val: "2.8k", lbl: "Registered Residents", accent: true },
  { val: "340+", lbl: "Reports Resolved", accent: false },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        background: "linear-gradient(160deg, #113D36 0%, #165247 100%)",
      }}
    >
      <div className="max-w-285 mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#4DB6A2] mb-3.5">
              About GreenWay
            </div>
            <h2 className="font-bold text-[36px] text-white leading-[1.2] mb-5">
              A Smarter Way to
              <br />
              Manage Our <em className="italic text-[#86CFC3]">Waste</em>
            </h2>
            <p className="text-[15px] text-[#C2E8E2] font-light leading-[1.7] mb-8">
              GreenWay is Candeleria's official digital platform connecting
              residents, barangay officials, and waste management personnel —
              making waste management services accessible, transparent, and
              efficient for everyone.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl p-4 border border-white/10 dark:border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div className="mb-2.5">{f.icon}</div>
                  <div className="font-semibold text-[14px] text-white mb-1">
                    {f.title}
                  </div>
                  <div className="text-[12px] text-[#86CFC3] font-light leading-normal">
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.lbl}
                className="rounded-2xl p-6 flex flex-col items-center justify-center text-center border"
                style={
                  s.accent
                    ? {
                        background: "rgba(42,157,135,0.15)",
                        borderColor: "rgba(42,157,135,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.1)",
                      }
                }
              >
                <div className="font-bold text-[40px] text-white leading-none mb-2">
                  {s.val}
                </div>
                <div className="text-[13px] text-[#86CFC3] font-light">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
