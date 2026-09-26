"use client";

import { useContext, useState } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import PlanStats from "./PlanStats";
import PlanHeader from "./PlanHeader";
import PlanTabs from "./PlanTabs";
import WorkoutList from "./WorkoutList";
import EmptyState from "./EmptyState";
import SortSelect from "./SortSelect";

export default function MyPlan() {

    const context = useContext(WorkoutContext);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    if (!context) {
        throw new Error("MyPlan must be used inside WorkoutProvider");
    }

    const workouts =
        activeTab === "plan"
            ? context.plan
            : context.saved;

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    return (

        <main className="container mx-auto px-4 py-12">

            <PlanHeader />

            <PlanStats workouts={workouts} />

            <div className="mt-8 flex items-center justify-between gap-4">
                <PlanTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <SortSelect
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>

            {workouts.length > 0 ? (
                <WorkoutList
                    workouts={sortedWorkouts}
                    activeTab={activeTab}
                />
            ) : (
                <EmptyState activeTab={activeTab} />
            )}
            
        </main>
    );
}