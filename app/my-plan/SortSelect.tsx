interface SortSelectProps {
    sortBy: "duration" | "calories" | "rating";
    setSortBy: (
        value: "duration" | "calories" | "rating"
    ) => void;
}

export default function SortSelect({ sortBy, setSortBy, }: SortSelectProps) {


    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#9CA3AF]">
                Sort By
            </span>

            <div className="relative">
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as
                            | "duration"
                            | "calories"
                            | "rating"
                        )
                    }
                    className="appearance-none rounded-lg border border-[#222630] bg-[#15171D] py-2.5 pl-4 pr-10 text-sm font-medium text-white outline-none transition hover:border-[#374151] focus:border-[#C2F800]"
                >
                    <option value="duration">
                        Duration
                    </option>

                    <option value="calories">
                        Calories
                    </option>

                    <option value="rating">
                        Rating
                    </option>
                </select>

                <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                    />
                </svg>
            </div>
        </div>
    );
}