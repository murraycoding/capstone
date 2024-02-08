export default function TaskCard({projectId, taskId, description, completionStatus, personAssigned,dueDate,estimatedDuration}){
    return (
        <div className="task-card">
            <p>{description}</p>
            <p>{completionStatus}</p>
            <p>{personAssigned}</p>
            <p>{dueDate}</p>
            <p>{estimatedDuration}</p>
            <p>{taskId}</p>
            <p>{projectId}</p>
        </div>
    )
}