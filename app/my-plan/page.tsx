import Link from "next/link";

export default function MyPlan() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold uppercase text-white">
                MY PLAN
            </h1>

            <p className="mt-2 text-[#9CA3AF]">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <div className="mt-8 grid grid-cols-3 rounded-lg border border-[#222630] bg-[#15171D]">
                <div className="p-4 text-center">
                    <p className="text-xs font-bold text-[#9CA3AF]">Exercises</p>
                    <p className="mt-2 text-2xl font-bold text-white">0</p>
                </div>

                <div className="relative p-4 text-center">
                    <div className="absolute left-0 top-3 bottom-3 border-l border-[#222630]"></div>

                    <p className="text-xs font-bold text-[#9CA3AF]">Minutes</p>
                    <p className="mt-2 text-2xl font-bold text-white">0</p>
                </div>

                <div className="relative p-4 text-center">
                    <div className="absolute left-0 top-3 bottom-3 border-l border-[#222630]"></div>

                    <p className="text-xs font-bold text-[#9CA3AF]">Calories</p>
                    <p className="mt-2 text-2xl font-bold text-white">0</p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
                <div className="inline-flex items-center rounded-xl border border-slate-700/60 bg-[#141824] p-1 shadow-inner">
                    <button
                        type="button"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:text-slate-200 focus:outline-none"
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-slate-700/50 bg-[#222938] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 focus:outline-none"
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[#9CA3AF]">
                        Sort By
                    </span>

                    <div className="relative">
                        <select
                            defaultValue="duration"
                            className="appearance-none rounded-lg border border-[#222630] bg-[#15171D] py-2.5 pl-4 pr-10 text-sm font-medium text-white outline-none transition hover:border-[#374151] focus:border-[#C2F800]"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
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
            </div>

            <div className="mt-8 rounded-lg border border-dashed border-[#374151] bg-[#15171D] py-16 text-center">
                <h2 className="text-xl font-bold uppercase text-white">
                    NOTHING HERE YET
                </h2>

                <p className="mt-2 text-sm text-[#9CA3AF]">
                    Browse the library and add a lift to get today moving.
                </p>

                <Link href="/"
                    className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300">
                    Go to workouts
                </Link>
            </div>
        </main>
    );
}