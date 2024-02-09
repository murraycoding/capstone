export default function TaskCard({taskId, description, completionStatus, personAssigned, projectAssigned, dueDate, estimatedComplexity}){
    return (
        <div className={completionStatus == 'true' ? 'task-card task-complete' : 'task-card task-not-complete'}>
            <p>Task ID {taskId}</p>
            <p>Description = {description}</p>
            <p>Completion Status = {completionStatus}</p>
            <p>Person Assigned = {personAssigned}</p>
            <p>Project Assigned = {projectAssigned}</p>
            <p>Due Date = {dueDate}</p>
            <p>Estimated Complexity = {estimatedComplexity}</p>
        </div>
    )
}