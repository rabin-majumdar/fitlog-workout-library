import { WorkoutType } from "../types/WorkoutType";

interface PlanStatsProps {
    workouts: WorkoutType[];
}

export default function PlanStats({ workouts }: PlanStatsProps) {

    const totalExercises = workouts.length;

    const totalMinutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <div className="mt-8 grid grid-cols-3 rounded-lg border border-[#374151] bg-[#15171D]">
            <div className="p-4">
                <div className="text-center">
                    <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                        Exercises
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                        {totalExercises}
                    </p>
                </div>
            </div>

            <div className="relative p-4">
                <div className="absolute bottom-3 left-0 top-3 border-l border-[#222630]"></div>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                        Minutes
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                        {totalMinutes}
                    </p>
                </div>
            </div>

            <div className="relative p-4">
                <div className="absolute bottom-3 left-0 top-3 border-l border-[#222630]"></div>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase text-[#9CA3AF]">
                        Calories
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                        {totalCalories}
                    </p>
                </div>
            </div>
        </div>
    );
}