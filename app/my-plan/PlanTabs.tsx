interface PlanTabsProps {
    activeTab: "plan" | "saved";
    setActiveTab: (tab: "plan" | "saved") => void;
}

export default function PlanTabs({ activeTab, setActiveTab, }: PlanTabsProps) {


    return (
        <div className="inline-flex items-center rounded-xl border border-slate-700/60 bg-[#141824] p-1 shadow-inner">
            <button
                type="button"
                onClick={() => setActiveTab("plan")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none ${activeTab === "plan"
                    ? "border border-slate-700/50 bg-[#222938] px-5 font-semibold text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none ${activeTab === "saved"
                    ? "border border-slate-700/50 bg-[#222938] px-5 font-semibold text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
            >
                Saved
            </button>
        </div>
    );
}