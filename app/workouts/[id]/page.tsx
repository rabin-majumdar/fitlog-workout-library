import { getWorkoutsData } from "@/app/services/getWorkoutsData";
import Image from "next/image";
import WorkoutActions from "./WorkoutActions";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Page({ params }: PageProps) {

    const { id } = await params;
    const workoutId = Number(id);
    const workouts = await getWorkoutsData();
    const workout = workouts.find((item) => item.id === workoutId)

    if (!workout) {
        return <p>Workout not found.</p>;
    };


    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold uppercase text-white">
                        {workout.name}
                    </h1>

                    <p className="mt-4 leading-7 text-[#9CA3AF]">
                        {workout.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border border-[#232834] bg-[#151922]">

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Equipment
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.equipment}
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Difficulty
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.difficulty}
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Sets
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.sets}
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Reps
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.reps}
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Duration
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.duration} min
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Calories
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.caloriesBurned} kcal
                            </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        <div className="flex justify-between py-3 px-4">
                            <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                                Rating
                            </p>
                            <p className="text-sm font-semibold text-white">
                                {workout.rating}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold uppercase text-white">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-4">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-sm leading-6 text-[#9CA3AF]"
                                >
                                    <span className="font-bold text-[#C2F800]">
                                        {index + 1}.
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </main>
    )
}