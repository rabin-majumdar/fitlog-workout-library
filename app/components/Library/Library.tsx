import { getWorkoutsData } from "@/app/services/getWorkoutsData";
import WorkoutCard from "./WorkoutCard";

export default async function Library() {
    const workouts = await getWorkoutsData();

    return (
        <section
            id="library"
            className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-12"
        >
            <div className="mb-8">
                <h2 className="text-4xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="mt-2 text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
}