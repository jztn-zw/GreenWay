import { useState } from "react";
import {
  ArrowRight,
  Lightbulb,
  CalendarDays,
  AlertTriangle,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FlyerData {
  id: number;
  bg: string;
  tag: string;
  tagClass: string;
  title: string;
  desc: string;
  author: string;
  authorInitials: string;
  date: string;
  category: "tip" | "schedule" | "alert" | "community";
  readLabel: string;
}

const flyers: FlyerData[] = [
  {
    id: 0,
    bg: "linear-gradient(135deg,#1B6A5C,#2A9D87)",
    tag: "Waste Tip",
    tagClass: "tip",
    title: "The Complete Guide to Waste Segregation in Sariaya",
    desc: "Proper waste segregation is the first and most important step in effective waste management. This guide covers biodegradable, non-biodegradable, residual, and special wastes.",
    author: "LGU Sariaya Admin",
    authorInitials: "LG",
    date: "Feb 20, 2026",
    category: "tip",
    readLabel: "Read Full Guide",
  },
  {
    id: 1,
    bg: "linear-gradient(135deg,#A07B2A,#D4A84B)",
    tag: "Schedule",
    tagClass: "schedule",
    title: "March 2026 Collection Schedule",
    desc: "Updated pickup times and routes for all 18 barangays. Check your area's assigned days and prepare your waste accordingly.",
    author: "GreenWay Team",
    authorInitials: "GW",
    date: "Feb 18, 2026",
    category: "schedule",
    readLabel: "View Schedule",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg,#7B2D2A,#C0392B)",
    tag: "Alert",
    tagClass: "alert",
    title: "Holiday Schedule Adjustment — Feb 25",
    desc: "Due to the upcoming national holiday, collection schedules will be adjusted. Affected barangays are listed inside. Please prepare waste a day earlier.",
    author: "LGU Sariaya Admin",
    authorInitials: "LG",
    date: "Feb 17, 2026",
    category: "alert",
    readLabel: "View Alert",
  },
  {
    id: 3,
    bg: "linear-gradient(135deg,#1A5C8A,#2980B9)",
    tag: "Waste Tip",
    tagClass: "tip",
    title: "Hazardous Household Waste: Do's and Don'ts",
    desc: "Batteries, paint, chemicals, and medicines require special handling. Never throw these in regular bins — here's the proper way to dispose of them safely.",
    author: "GreenWay Team",
    authorInitials: "GW",
    date: "Feb 15, 2026",
    category: "tip",
    readLabel: "Read More",
  },
  {
    id: 4,
    bg: "linear-gradient(135deg,#165247,#4DB6A2)",
    tag: "Event",
    tagClass: "community",
    title: "Barangay Clean-up Drive — March 8",
    desc: "Join your neighbors for a community clean-up drive across all covered barangays. Volunteers are needed — sign up to participate and make a difference!",
    author: "LGU Sariaya Admin",
    authorInitials: "LG",
    date: "Feb 12, 2026",
    category: "community",
    readLabel: "Join Now",
  },
  {
    id: 5,
    bg: "linear-gradient(135deg,#2D6A1A,#5A9E3B)",
    tag: "Waste Tip",
    tagClass: "tip",
    title: "Composting at Home: Turn Waste into Gold",
    desc: "Learn how kitchen scraps and yard waste can become rich compost for your garden. Simple, free, and great for the environment.",
    author: "GreenWay Team",
    authorInitials: "GW",
    date: "Feb 10, 2026",
    category: "tip",
    readLabel: "Read More",
  },
  {
    id: 6,
    bg: "linear-gradient(135deg,#5C3D1A,#A0692A)",
    tag: "Alert",
    tagClass: "alert",
    title: "New Drop-off Points for Special Waste",
    desc: "Three new drop-off locations have been added across Sariaya for electronics, batteries, and other special waste items. Find the nearest one to you.",
    author: "LGU Sariaya Admin",
    authorInitials: "LG",
    date: "Feb 8, 2026",
    category: "alert",
    readLabel: "View Locations",
  },
  {
    id: 7,
    bg: "linear-gradient(135deg,#1A3D5C,#2960A0)",
    tag: "Schedule",
    tagClass: "schedule",
    title: "Q2 2026 Bulk Waste Collection Dates",
    desc: "Large items like furniture and appliances will be collected on designated dates per barangay. Check if your area is included in the first wave.",
    author: "GreenWay Team",
    authorInitials: "GW",
    date: "Feb 5, 2026",
    category: "schedule",
    readLabel: "View Schedule",
  },
  {
    id: 8,
    bg: "linear-gradient(135deg,#3D1A5C,#8060B0)",
    tag: "Event",
    tagClass: "community",
    title: "Eco-Fair 2026: Zero Waste Living Workshop",
    desc: "A full-day event featuring hands-on workshops about zero-waste lifestyle, upcycling, and sustainable living. Free admission for all Sariaya residents.",
    author: "LGU Sariaya Admin",
    authorInitials: "LG",
    date: "Feb 2, 2026",
    category: "community",
    readLabel: "Learn More",
  },
];

type FilterType = "all" | "tip" | "schedule" | "alert" | "community";

const POSTS_PER_PAGE = 6;

const filterButtons: {
  label: string;
  value: FilterType;
  icon?: React.ReactNode;
}[] = [
  { label: "All", value: "all" },
  {
    label: "Waste Tips",
    value: "tip",
    icon: <Lightbulb className="w-3.5 h-3.5" />,
  },
  {
    label: "Schedules",
    value: "schedule",
    icon: <CalendarDays className="w-3.5 h-3.5" />,
  },
  {
    label: "Alerts",
    value: "alert",
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
  {
    label: "Events",
    value: "community",
    icon: <Users className="w-3.5 h-3.5" />,
  },
];

const tagStyles: Record<string, string> = {
  tip: "bg-[#EAF6F4] text-[#1B6A5C]",
  schedule: "bg-[#F6EDD4] text-[#8a6010]",
  alert: "bg-[#FCECEA] text-[#C0392B]",
  community: "bg-[#E3EFF8] text-[#1A5C8A]",
};

const tagIcon: Record<string, React.ReactNode> = {
  tip: <Lightbulb className="w-3 h-3" />,
  schedule: <CalendarDays className="w-3 h-3" />,
  alert: <AlertTriangle className="w-3 h-3" />,
  community: <Users className="w-3 h-3" />,
};

const Features: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = flyers.filter(
    (f) => activeFilter === "all" || f.category === activeFilter,
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handleFilter = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1); // reset to page 1 on filter change
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to section top
    document
      .getElementById("flyers")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="flyers" className="py-20 bg-white dark:bg-[#0D1F1C]">
      <div className="max-w-[1140px] mx-auto px-8">
        {/* Section head */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1E7D6B] dark:text-[#4DB6A2] mb-3.5
            before:content-[''] before:w-6 before:h-px before:bg-[#4DB6A2]
            after:content-['']  after:w-6  after:h-px  after:bg-[#4DB6A2]"
          >
            Educational Hub
          </div>
          <h2 className="font-bold text-[36px] text-[#0D2B26] dark:text-white leading-[1.2] mb-3.5">
            News, Tips & Community Posts
          </h2>
          <p className="text-[15px] text-[#6B7775] dark:text-[#86CFC3] font-light leading-[1.7] max-w-[520px] mx-auto">
            Official posts from the MENRO Office and LGU Candelaria — schedules,
            alerts, educational materials, and community events.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-9 flex-wrap">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => handleFilter(btn.value)}
              className={`inline-flex items-center gap-1.5 px-[18px] py-[7px] rounded-full border text-[13px] font-medium cursor-pointer transition-all duration-200 ${
                activeFilter === btn.value
                  ? "bg-[#1E7D6B] border-[#1E7D6B] text-white"
                  : "bg-white dark:bg-[#122820] border-[#D9E0DF] dark:border-[#1E3D36] text-[#4A5552] dark:text-[#86CFC3] hover:border-[#2A9D87] hover:text-[#1E7D6B] dark:hover:text-[#4DB6A2]"
              }`}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {paginated.map((flyer) => (
              <div
                key={flyer.id}
                className="bg-white dark:bg-[#122820] rounded-2xl border border-[#EDF1F0] dark:border-[#1E3D36] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:border-[#86CFC3] dark:hover:border-[#2A9D87] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Cover */}
                <div
                  className="relative h-[180px] flex items-center justify-center overflow-hidden"
                  style={{ background: flyer.bg }}
                >
                  {/* Background icon */}
                  <div className="opacity-20 scale-[2.5]">
                    {tagIcon[flyer.tagClass]}
                  </div>

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
                    }}
                  />

                  {/* Tag badge */}
                  <span
                    className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.06em] uppercase ${tagStyles[flyer.tagClass]}`}
                  >
                    {tagIcon[flyer.tagClass]}
                    {flyer.tag}
                  </span>

                  {/* Date */}
                  <span className="absolute bottom-2.5 right-3 z-10 text-[11px] text-white/80 font-medium">
                    {flyer.date}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="font-semibold text-[15px] text-[#1E2423] dark:text-[#E8F5F3] leading-[1.4] mb-1.5">
                    {flyer.title}
                  </div>
                  <div className="text-[13px] text-[#6B7775] dark:text-[#86CFC3] leading-[1.6] mb-4 line-clamp-2">
                    {flyer.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-[26px] h-[26px] rounded-full bg-[#1E7D6B] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {flyer.authorInitials}
                      </div>
                      <span className="text-[11px] text-[#8E9B99] dark:text-[#4DB6A2] font-medium">
                        {flyer.author}
                      </span>
                    </div>
                    <span className="text-[12px] font-semibold text-[#1E7D6B] dark:text-[#4DB6A2] flex items-center gap-1 group">
                      {flyer.readLabel}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#8E9B99] dark:text-[#4DB6A2] text-[14px]">
            No posts found for this category.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Prev */}
            <button
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-xl border border-[#D9E0DF] dark:border-[#1E3D36] bg-white dark:bg-[#122820] flex items-center justify-center text-[#4A5552] dark:text-[#86CFC3] hover:border-[#2A9D87] hover:text-[#1E7D6B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePage(page)}
                className={`w-9 h-9 rounded-xl border text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  currentPage === page
                    ? "bg-[#1E7D6B] border-[#1E7D6B] text-white"
                    : "bg-white dark:bg-[#122820] border-[#D9E0DF] dark:border-[#1E3D36] text-[#4A5552] dark:text-[#86CFC3] hover:border-[#2A9D87] hover:text-[#1E7D6B] dark:hover:text-[#4DB6A2]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-xl border border-[#D9E0DF] dark:border-[#1E3D36] bg-white dark:bg-[#122820] flex items-center justify-center text-[#4A5552] dark:text-[#86CFC3] hover:border-[#2A9D87] hover:text-[#1E7D6B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Post count info */}
        {filtered.length > 0 && (
          <p className="text-center text-[12px] text-[#8E9B99] dark:text-[#4DB6A2] mt-4">
            Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–
            {Math.min(currentPage * POSTS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} posts
          </p>
        )}
      </div>
    </section>
  );
};

export default Features;
