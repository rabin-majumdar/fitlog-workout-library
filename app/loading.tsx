export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#C2F800] border-t-transparent"></div>

                <p className="text-sm font-medium text-[#9CA3AF]">
                    Loading workouts…
                </p>
            </div>
        </div>
    );
}