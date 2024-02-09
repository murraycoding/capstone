export default function TaskCard({taskId, description, completionStatus, personAssigned, projectAssigned, dueDate, estimatedComplexity}){
    return (
        <div className="task-card">
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