import {
  Megaphone,
  CheckCircle2,
  ClipboardList,
  Trophy,
  MapPin,
  Clock,
  Phone,
  CalendarDays,
  Recycle,
  Leaf,
  AlertTriangle,
  Info,
  XCircle,
} from "lucide-react";

interface AnnouncementItem {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  badge: string;
  badgeStyle: string;
}

const announcements: AnnouncementItem[] = [
  {
    icon: <AlertTriangle className="w-5 h-5 text-[#C0392B]" />,
    iconBg: "#FCECEA",
    title: "Collection suspended — Brgy. Poblacion today",
    desc: "Due to road clearing operations, garbage collection in Poblacion is suspended. Reschedule on Feb 26.",
    date: "Feb 25, 2026",
    time: "6:00 AM",
    badge: "Urgent",
    badgeStyle: "bg-[#FCECEA] text-[#C0392B]",
  },
  {
    icon: <XCircle className="w-5 h-5 text-[#C0392B]" />,
    iconBg: "#FCECEA",
    title: "Office closed tomorrow — EDSA Holiday",
    desc: "The MENRO office will be closed on Feb 26 in observance of the national holiday. Regular operations resume Feb 27.",
    date: "Feb 25, 2026",
    time: "8:00 AM",
    badge: "Notice",
    badgeStyle: "bg-[#E3EFF8] text-[#1A5C8A]",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#1B7A4A]" />,
    iconBg: "#E4F5EE",
    title: "New drop-off point open near Candelaria Plaza",
    desc: "A new recyclables drop-off bin is now available beside the municipal plaza. Open daily, 6AM–6PM.",
    date: "Feb 24, 2026",
    time: "9:00 AM",
    badge: "New",
    badgeStyle: "bg-[#E4F5EE] text-[#1B7A4A]",
  },
  {
    icon: <Info className="w-5 h-5 text-[#1A5C8A]" />,
    iconBg: "#E3EFF8",
    title: "Biodegradable collection moved to Feb 28",
    desc: "This week's biodegradable pickup for Zone 3 barangays has been moved from Feb 27 to Feb 28 due to truck maintenance.",
    date: "Feb 23, 2026",
    time: "7:30 AM",
    badge: "Update",
    badgeStyle: "bg-[#E3EFF8] text-[#1A5C8A]",
  },
  {
    icon: <Megaphone className="w-5 h-5 text-[#C47A1E]" />,
    iconBg: "#F6EDD4",
    title: "Reminder: Separate your waste before collection day",
    desc: "Collectors will not pick up unsegregated waste starting March 1. Please use the correct color-coded bins.",
    date: "Feb 22, 2026",
    time: "8:00 AM",
    badge: "Reminder",
    badgeStyle: "bg-[#F6EDD4] text-[#8a6010]",
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-[#1A5C8A]" />,
    iconBg: "#E3EFF8",
    title: "System maintenance — Feb 28, 11PM–2AM",
    desc: "The GreenWay online portal will be temporarily offline for scheduled maintenance. Please plan accordingly.",
    date: "Feb 21, 2026",
    time: "3:00 PM",
    badge: "Notice",
    badgeStyle: "bg-[#E3EFF8] text-[#1A5C8A]",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#1B7A4A]" />,
    iconBg: "#E4F5EE",
    title: "E-waste drive collection completed",
    desc: "Thank you to all residents who participated. Over 200kg of e-waste was collected across 8 barangays last Saturday.",
    date: "Feb 20, 2026",
    time: "10:00 AM",
    badge: "Done",
    badgeStyle: "bg-[#E4F5EE] text-[#1B7A4A]",
  },
  {
    icon: <Trophy className="w-5 h-5 text-[#C47A1E]" />,
    iconBg: "#F6EDD4",
    title: "Candelaria recognized for waste management excellence",
    desc: "Our municipality received a provincial award for solid waste management. Thank you to all participating residents!",
    date: "Feb 15, 2026",
    time: "2:00 PM",
    badge: "News",
    badgeStyle: "bg-[#E4F5EE] text-[#1B7A4A]",
  },
];

interface AnnouncementsProps {
  onSignupClick: () => void;
}

const Announcements: React.FC<AnnouncementsProps> = ({ onSignupClick }) => {
  return (
    <section
      id="announcements"
      className="py-20 bg-[#F7FAF9] dark:bg-[#0A1A17]"
    >
      <div className="max-w-[1140px] mx-auto px-8">
        {/* Section head */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1E7D6B] dark:text-[#4DB6A2] mb-3.5
            before:content-[''] before:w-6 before:h-px before:bg-[#4DB6A2]
            after:content-['']  after:w-6  after:h-px  after:bg-[#4DB6A2]"
          >
            Latest Updates
          </div>
          <h2 className="font-bold text-[36px] text-[#0D2B26] dark:text-white leading-[1.2] mb-3.5">
            Official Announcements
          </h2>
          <p className="text-[15px] text-[#6B7775] dark:text-[#86CFC3] font-light leading-[1.7] max-w-[520px] mx-auto">
            Quick bulletins and real-time notices from the MENRO Office of
            Candelaria, Quezon.
          </p>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-7 items-start max-lg:grid-cols-1">
          {/* Scrollable Feed */}
          <div className="bg-white dark:bg-[#122820] border border-[#EDF1F0] dark:border-[#1E3D36] rounded-2xl overflow-hidden">
            {/* Feed header */}
            <div className="px-5 py-4 border-b border-[#EDF1F0] dark:border-[#1E3D36] flex items-center justify-between">
              <span className="text-[13px] font-semibold text-[#1E2423] dark:text-[#E8F5F3]">
                Bulletins
              </span>
              <span className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2]">
                {announcements.length} bulletins
              </span>
            </div>

            {/* Scrollable list */}
            <div className="overflow-y-auto max-h-[480px] custom-scrollbar divide-y divide-[#EDF1F0] dark:divide-[#1E3D36]">
              {announcements.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start px-5 py-4 cursor-pointer transition-all duration-200 hover:bg-[#F7FAF9] dark:hover:bg-[#0D2B26] group"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: item.iconBg }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-[13px] font-semibold text-[#1E2423] dark:text-[#E8F5F3] leading-[1.4] group-hover:text-[#1E7D6B] dark:group-hover:text-[#4DB6A2] transition-colors duration-200">
                        {item.title}
                      </div>
                      <span
                        className={`text-[10px] font-bold tracking-[0.04em] px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeStyle}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-[12px] text-[#6B7775] dark:text-[#86CFC3] leading-[1.5] mb-1.5">
                      {item.desc}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#8E9B99] dark:text-[#4DB6A2]">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feed footer */}
            <div className="px-5 py-3 border-t border-[#EDF1F0] dark:border-[#1E3D36] bg-[#F7FAF9] dark:bg-[#0D2B26]">
              <span className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2]">
                Scroll to see older bulletins
              </span>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="bg-white dark:bg-[#122820] border border-[#EDF1F0] dark:border-[#1E3D36] rounded-2xl overflow-hidden sticky top-20">
            <div className="px-[22px] py-5 bg-[#113D36] dark:bg-[#0A2820]">
              <h3 className="font-bold text-[16px] text-white mb-1">
                Candelaria, Quezon
              </h3>
              <p className="text-[12px] text-[#86CFC3]">
                Municipal Environment & Natural Resources Office
              </p>
            </div>

            <div className="p-[18px] flex flex-col gap-3">
              {[
                {
                  icon: <MapPin className="w-[18px] h-[18px] text-[#2A9D87]" />,
                  label: "Coverage Area",
                  val: "25 Barangays",
                },
                {
                  icon: <Clock className="w-[18px] h-[18px] text-[#2A9D87]" />,
                  label: "Office Hours",
                  val: "Mon–Fri, 8AM–5PM",
                },
                {
                  icon: <Phone className="w-[18px] h-[18px] text-[#2A9D87]" />,
                  label: "Hotline",
                  val: "(042) 831-0000",
                },
                {
                  icon: (
                    <CalendarDays className="w-[18px] h-[18px] text-[#2A9D87]" />
                  ),
                  label: "Next Collection",
                  val: "Feb 28 — Biodegradable",
                },
                {
                  icon: (
                    <Recycle className="w-[18px] h-[18px] text-[#1B7A4A]" />
                  ),
                  label: "This Month's Rate",
                  val: "97% Collection",
                  valClass: "text-[#1B7A4A] dark:text-[#4DB6A2] font-semibold",
                },
              ].map((row, i, arr) => (
                <div key={row.label}>
                  <div className="flex items-start gap-3 p-2.5 rounded-[10px] hover:bg-[#F7FAF9] dark:hover:bg-[#0D2B26] transition-colors duration-200">
                    <div className="flex-shrink-0 mt-0.5">{row.icon}</div>
                    <div>
                      <div className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] font-medium uppercase tracking-[0.05em]">
                        {row.label}
                      </div>
                      <div
                        className={`text-[13px] text-[#2E3533] dark:text-[#E8F5F3] font-medium mt-0.5 ${row.valClass ?? ""}`}
                      >
                        {row.val}
                      </div>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-px bg-[#EDF1F0] dark:bg-[#1E3D36] my-1" />
                  )}
                </div>
              ))}

              <button
                onClick={onSignupClick}
                className="w-full py-3 mt-2 rounded-xl text-[14px] font-semibold text-white border-none cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-px"
                style={{ background: "#2A9D87" }}
              >
                <Leaf className="w-4 h-4" /> Join the Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
