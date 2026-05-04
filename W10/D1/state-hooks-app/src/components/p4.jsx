import { useState } from "react";

export function DerivedStateCondRender() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn useState", completed: true },
        { id: 2, title: "Practice JS", completed: false },
        { id: 3, title: "Learn useContext", completed: false }
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    //  Derived state
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const allCompleted = totalTasks === completedTasks && totalTasks > 0;

    let statusMessage = "Keep going";

    if (totalTasks === 0) {
        statusMessage = "No tasks available";
    } else if (completedTasks > 0) {
        statusMessage = "Good progress";
    }

    return (
        <>
            <p>Total tasks: {totalTasks}</p>
            <p>Completed: {completedTasks}</p>
            <p>Pending: {pendingTasks}</p>
            <p>Status: {statusMessage}</p>

            {allCompleted && (
                <p>Great job! You finished everything 🎉</p>
            )}

            <p>
                Progress: {allCompleted ? "Finished" : "Still in progress"}
            </p>

            <div>
                <h3>Task List</h3>
                {tasks.map((task) => (
                    <div key={task.id}>
                        {task.title} - {task.completed ? "Done" : "Pending"}
                        <button onClick={() => toggleTask(task.id)}>
                            Toggle
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}