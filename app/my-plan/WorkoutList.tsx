import { WorkoutType } from "../types/WorkoutType";
import WorkoutListItem from "./WorkoutListItem";

interface WorkoutListProps {
    workouts: WorkoutType[];
    activeTab: "plan" | "saved";
}

export default function WorkoutList({
    workouts,
    activeTab,
}: WorkoutListProps) {
    return (
        <div className="mt-8 space-y-4">
            {workouts.map((workout) => (
                <WorkoutListItem
                    key={workout.id}
                    workout={workout}
                    activeTab={activeTab}
                />
            ))}
        </div>
    );
}