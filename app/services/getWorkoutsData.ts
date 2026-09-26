import { WorkoutType } from "../types/WorkoutType";

export const getWorkoutsData = async (): Promise<WorkoutType[]> => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    const data = await res.json();

    return data;
};

export const getWorkoutById = async (
    id: number
): Promise<WorkoutType | null> => {
    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data;
};