import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="text-center">
                <p className="text-7xl font-black text-[#C2F800]">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold uppercase text-white">
                    Workout Not Found
                </h1>

                <p className="mt-2 text-sm text-[#9CA3AF]">
                    The workout or page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-md bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
                >
                    Back to Workouts
                </Link>
            </div>
        </main>
    );
}