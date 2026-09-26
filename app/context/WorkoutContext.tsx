"use client";

import { createContext, useState } from "react";
import { WorkoutType } from "@/app/types/WorkoutType";

interface WorkoutContextType {
    plan: WorkoutType[];
    saved: WorkoutType[];
    addToPlan: (workout: WorkoutType) => void;
    saveForLater: (workout: WorkoutType) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

export function WorkoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<WorkoutType[]>([]);
    const [saved, setSaved] = useState<WorkoutType[]>([]);

    const addToPlan = (workout: WorkoutType) => {
        setPlan((prevPlan) => [...prevPlan, workout]);
    };

    const saveForLater = (workout: WorkoutType) => {
        setSaved((prevSaved) => [...prevSaved, workout]);
    };

    const removeFromPlan = (id: number) => {
        setPlan((prevPlan) =>
            prevPlan.filter((workout) => workout.id !== id)
        );
    };

    const removeFromSaved = (id: number) => {
        setSaved((prevSaved) =>
            prevSaved.filter((workout) => workout.id !== id)
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
}