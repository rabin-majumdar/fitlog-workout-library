"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineClock, HiOutlineFire, HiCheck, HiX } from "react-icons/hi";
import { IoIosStarOutline } from "react-icons/io";
import { toast } from "react-toastify";

import { WorkoutType } from "../types/WorkoutType";
import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

interface WorkoutListItemProps {
    workout: WorkoutType;
    activeTab: "plan" | "saved";
}

export default function WorkoutListItem({
    workout,
    activeTab,
}: WorkoutListItemProps) {

    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("WorkoutListItem must be used inside WorkoutProvider");
    }

    return (
        <div className="rounded-xl border border-[#222630] bg-[#15171D] p-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">

                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold uppercase text-white">
                        {workout.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#9CA3AF]">
                        {workout.equipment}
                    </p>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9CA3AF]">
                        <div className="flex items-center gap-1">
                            <HiOutlineClock className="text-[#C2F800]" />
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <HiOutlineFire className="text-[#C2F800]" />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <IoIosStarOutline className="text-[#C2F800]" />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>

                <div className="flex w-full items-center gap-2 border-t border-[#222630] pt-3 sm:w-auto sm:border-0 sm:pt-0">

                    <Link
                        href={`/workouts/${workout.id}`}
                        className="flex-1 rounded-full border border-[#374151] px-4 py-2 text-center text-xs font-medium text-white transition hover:border-[#C2F800] hover:text-[#C2F800] sm:flex-none"
                    >
                        View Details
                    </Link>

                    {activeTab === "plan" && (
                        <button
                            type="button"
                            onClick={() => {
                                context.removeFromPlan(workout.id);
                                toast.success("Workout completed");
                            }}
                            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-[#C2F800] px-4 py-2 text-xs font-bold text-black transition hover:bg-lime-300 sm:flex-none"
                        >
                            <HiCheck />
                            <span>Mark as Done</span>
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={() => {
                            if (activeTab === "plan") {
                                context.removeFromPlan(workout.id);
                                toast.success("Removed from today's plan");
                            } else {
                                context.removeFromSaved(workout.id);
                                toast.success("Removed from saved");
                            }
                        }}
                        className="rounded-full p-2 text-[#6B7280] transition hover:text-red-400"
                    >
                        <HiX className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
}