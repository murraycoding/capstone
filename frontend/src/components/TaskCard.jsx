export default function TaskCard({taskId, description, completionStatus, personAssigned, projectAssigned, dueDate, estimatedComplexity}){
    return (
        <div className='task-card'>
            <div className={completionStatus == 'true' ? 'task-title task-complete' : 'task-title task-not-complete'}>Task #{taskId}: {projectAssigned}</div>
            <div className="task-description">{description}</div>
            <div className="task-info">
                <div>
                    <div><strong>Assigned:</strong> {personAssigned}</div>
                    <div><strong>Due:</strong> {dueDate}</div>
                </div>
                <form className="task-form">
                    Complete: <input type="checkbox" disabled={false}></input>
                    <button type="submit">Save</button>
                </form>
            </div>
            <div className = {completionStatus == 'true' ? 'task-completion task-complete-status' : 'task-completion task-not-complete-status'}>{completionStatus == 'true' ? "Complete" : "Incomplete"}</div>
        
        </div>
    )
}