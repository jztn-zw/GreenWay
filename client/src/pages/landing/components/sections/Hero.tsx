import {
  Leaf,
  BookOpen,
  MapPin,
  CalendarDays,
  Recycle,
  Trash2,
  Package,
} from "lucide-react";
import {
  PrimaryButton,
  OutlineLightButton,
} from "../../../../components/buttons";

interface HeroProps {
  onSignupClick: () => void;
  onLearnMoreClick: () => void;
}

// Fixed weekly schedule data — as confirmed by MENRO Candelaria
const schedule: {
  day: string;
  short: string;
  type: string;
  color: string;
  icon: React.ReactNode;
}[] = [
  {
    day: "Monday",
    short: "Mon",
    type: "Biodegradable",
    color: "#2A9D87",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    day: "Tuesday",
    short: "Tue",
    type: "Non-Biodegradable",
    color: "#D4A84B",
    icon: <Package className="w-4 h-4" />,
  },
  {
    day: "Wednesday",
    short: "Wed",
    type: "Residual",
    color: "#8E9B99",
    icon: <Trash2 className="w-4 h-4" />,
  },
  {
    day: "Thursday",
    short: "Thu",
    type: "Biodegradable",
    color: "#2A9D87",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    day: "Friday",
    short: "Fri",
    type: "Non-Biodegradable",
    color: "#D4A84B",
    icon: <Package className="w-4 h-4" />,
  },
  {
    day: "Saturday",
    short: "Sat",
    type: "Residual",
    color: "#8E9B99",
    icon: <Trash2 className="w-4 h-4" />,
  },
];

// Get today's schedule entry
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayName = days[new Date().getDay()];

const Hero: React.FC<HeroProps> = ({ onSignupClick, onLearnMoreClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0D2B26 0%, #113D36 45%, #165247 100%)",
      }}
    >
      {/* Orbs */}
      <div
        className="absolute -top-30 -right-30 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(42,157,135,0.2) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[100px] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,75,0.1) 0%, transparent 65%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-[1140px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* ── Left ── */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/[0.12] text-[12px] font-medium text-[#86CFC3] tracking-[0.04em]"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#D4A84B] animate-pulse" />
            <MapPin className="w-3 h-3" />
            Candelaria, Quezon Province
          </div>

          {/* Title */}
          <h1 className="font-bold text-[52px] leading-[1.1] text-white mb-5 max-md:text-[40px] max-sm:text-[32px]">
            Keeping Our
            <br />
            Community{" "}
            <em
              className="italic text-[#86CFC3]"
              style={{ fontStyle: "italic" }}
            >
              Clean
            </em>
            <br />
            Together
          </h1>

          <p className="text-[16px] text-[#C2E8E2] font-light leading-[1.7] max-w-[440px] mb-9">
            GreenWay is your official digital portal for waste management
            services — report waste, track collections, access educational
            resources, and stay informed.
          </p>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mb-12">
            <PrimaryButton
              size="lg"
              icon={<Leaf className="w-4 h-4" />}
              onClick={onSignupClick}
            >
              Get Started
            </PrimaryButton>
            <OutlineLightButton
              size="lg"
              icon={<BookOpen className="w-4 h-4" />}
              onClick={onLearnMoreClick}
            >
              Learn More
            </OutlineLightButton>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { val: "2,840+", lbl: "Registered Residents" },
              { val: "97%", lbl: "Collection Rate" },
              { val: "25", lbl: "Barangays Covered" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-bold text-[28px] text-white leading-none">
                  {s.val}
                </div>
                <div className="text-[12px] text-[#86CFC3] mt-1 font-light">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Weekly Collection Schedule ── */}
        <div className="hidden md:flex flex-col gap-3">
          {/* Card */}
          <div
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Card header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#4DB6A2]" />
                <span className="text-[13px] font-semibold text-white">
                  Weekly Collection Schedule
                </span>
              </div>
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.06em]"
                style={{
                  background: "rgba(42,157,135,0.25)",
                  color: "#4DB6A2",
                }}
              >
                Fixed
              </span>
            </div>

            {/* Schedule rows */}
            <div className="px-5 pt-3 pb-2 flex flex-col gap-1.5">
              {schedule.map((item) => {
                const isToday = item.day === todayName;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-all duration-200 ${
                      isToday
                        ? "border border-white/20"
                        : "border border-transparent hover:border-white/10"
                    }`}
                    style={{
                      background: isToday
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Day */}
                      <span
                        className={`text-[12px] font-semibold w-8 ${
                          isToday ? "text-white" : "text-[#86CFC3]"
                        }`}
                      >
                        {item.short}
                      </span>
                      {/* Dot divider */}
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      {/* Type with icon */}
                      <div className="flex items-center gap-1.5">
                        <span style={{ color: item.color }}>{item.icon}</span>
                        <span
                          className={`text-[13px] font-medium ${
                            isToday ? "text-white" : "text-[#C2E8E2]"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Today badge */}
                    {isToday && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-[0.06em]"
                        style={{
                          background: "rgba(42,157,135,0.3)",
                          color: "#4DB6A2",
                        }}
                      >
                        Today
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Card footer */}
            <div className="px-5 py-4 mt-1 border-t border-white/10 flex items-center gap-2">
              <Recycle className="w-3.5 h-3.5 text-[#4DB6A2] flex-shrink-0" />
              <span className="text-[11px] text-[#86CFC3] leading-[1.4]">
                Schedule is fixed weekly.{" "}
                <span
                  className="text-[#4DB6A2] cursor-pointer hover:underline"
                  onClick={onSignupClick}
                >
                  Sign up
                </span>{" "}
                to get notified of any changes.
              </span>
            </div>
          </div>

          {/* Waste type legend */}
          <div
            className="rounded-xl border border-white/10 px-5 py-3.5 flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-[11px] text-[#86CFC3] font-medium">
              Waste Types
            </span>
            <div className="flex items-center gap-4">
              {[
                { label: "Biodegradable", color: "#2A9D87" },
                { label: "Non-Biodegradable", color: "#D4A84B" },
                { label: "Residual", color: "#8E9B99" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: t.color }}
                  />
                  <span className="text-[11px] text-[#C2E8E2]">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
