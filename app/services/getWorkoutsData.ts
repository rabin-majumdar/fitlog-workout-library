import { WorkoutType } from "../types/WorkoutType";

export const getWorkoutsData = async (): Promise<WorkoutType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}