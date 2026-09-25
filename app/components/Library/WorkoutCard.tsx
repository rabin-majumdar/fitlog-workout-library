import Image from "next/image";
import { WorkoutType } from "@/app/types/WorkoutType";
import { HiOutlineClock, HiOutlineFire } from "react-icons/hi";
import { IoIosStarOutline } from "react-icons/io";
import Link from "next/link";

interface WorkoutCardProps {
    workout: WorkoutType;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="block overflow-hidden rounded-lg border border-[#222630] bg-[#15171D] transition hover:border-[#C2F800]"
        >

            <div className="relative h-56 w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-wrap gap-2 p-4">
                {workout.muscleGroups.map((muscle) => (
                    <span
                        key={muscle}
                        className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                    >
                        {muscle}
                    </span>
                ))}
            </div>
            <h3 className="px-4 text-xl font-bold uppercase text-white">
                {workout.name}
            </h3>
            <p className="px-4 pb-4 pt-2 text-sm text-[#9CA3AF]">
                {workout.equipment}
            </p>

            <div className="mx-4 border-t border-gray-700"></div>

            <div className="flex items-center justify-between px-4 py-4 text-sm text-[#9CA3AF]">
                <div className="flex items-center justify-center gap-1">
                    <HiOutlineClock className="text-[#C2F800]" />
                    <span>{workout.duration} min</span>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <HiOutlineFire className="text-[#C2F800]" />
                    <span>{workout.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <IoIosStarOutline className="text-[#C2F800]" />
                    <span>{workout.rating}</span>
                </div>
            </div>
        </Link>
    );
}