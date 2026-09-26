import Link from "next/link";

interface EmptyStateProps {
    activeTab: "plan" | "saved";
}

export default function EmptyState({
    activeTab,
}: EmptyStateProps) {
    return (
        <div className="mt-8 rounded-lg border border-dashed border-[#374151] bg-[#15171D] py-16 text-center">
            <h2 className="text-xl font-bold uppercase text-white">
                {activeTab === "plan"
                    ? "NOTHING HERE YET"
                    : "NO SAVED WORKOUTS"}
            </h2>

            <p className="mt-2 text-sm text-[#9CA3AF]">
                {activeTab === "plan"
                    ? "Browse the library and add a lift to get today moving."
                    : "Save workouts for later and they will appear here."}
            </p>

            <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
            >
                Go to workouts
            </Link>
        </div>
    );
}