"use client";

import { WorkoutContext } from "@/app/context/WorkoutContext";
import { WorkoutType } from "@/app/types/WorkoutType";
import { useContext } from "react";
import { PiBookmarkSimple, PiCalendarPlus } from "react-icons/pi";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
    workout: WorkoutType;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {

    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("WorkoutActions must be used inside WorkoutProvider");
    };

    const isAdded = context.plan.some(
        (item) => item.id === workout.id
    );

    const isSaved = context.saved.some(
        (item) => item.id === workout.id
    );

    const isPlanFull = context.plan.length >= 5;

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
                type="button"
                disabled={isAdded || isPlanFull}
                onClick={() => {
                    if (context.plan.length >= 5) {
                        toast.warning(
                            "Today's plan can have a maximum of 5 workouts."
                        );
                        return;
                    }

                    context.addToPlan(workout);
                    toast.success("Added to today's plan");
                }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition
        ${isAdded
                        ? "cursor-not-allowed bg-gray-700 text-gray-400"
                        : "cursor-pointer bg-[#C2F800] text-black hover:bg-lime-300"
                    }
    `}
            >
                <PiCalendarPlus size={20} />

                {isAdded
                    ? "Added to today's plan"
                    : isPlanFull
                        ? "Plan is full"
                        : "Add to today's plan"}
            </button>

            <button
                type="button"
                disabled={isSaved}
                onClick={() => {
                    context.saveForLater(workout);
                    toast.success("Saved for later");
                }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition
        ${isSaved
                        ? "cursor-not-allowed border border-[#C2F800]/30 bg-[#C2F800]/10 text-[#C2F800]"
                        : "cursor-pointer border border-[#2D313B] bg-[#15171D] text-white hover:border-[#C2F800]"
                    }
    `}
            >
                <PiBookmarkSimple size={20} />
                {isSaved ? "Saved" : "Save for later"}
            </button>

        </div>
    );
}