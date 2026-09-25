"use client";

import { createContext, useState } from "react";
import { WorkoutType } from "@/app/types/WorkoutType";

interface WorkoutContextType {
    plan: WorkoutType[];
    saved: WorkoutType[];
    addToPlan: (workout: WorkoutType) => void;
    saveForLater: (workout: WorkoutType) => void;
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

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
}