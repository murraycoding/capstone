// package imports
import { useState, useEffect } from 'react'

// component import
import TaskCard from '../components/TaskCard'


export default function TasksPage() {
    // state data
    const [peopleData, setPeopleData] = useState([])
    const [taskData, setTaskData] = useState([])
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const peopleResponse = await fetch('/api/people')
                const people_data = await peopleResponse.json();
                setPeopleData(people_data)

                const taskResponse = await fetch('/api/tasks');
                const task_data = await taskResponse.json();
                setTaskData(task_data)

                const projectResponse = await fetch('/api/projects')
                const project_data = await projectResponse.json()
                setProjectData(project_data)

            }
            catch (error) {
                console.error("Error Fetching Data:", error)
            }
        };
        fetchData();

    }, [])

    // converting people data and project data to arrays
    let peopleArray = [];
    for (let person of peopleData) {
        let fullName = `${person.firstName} ${person.lastName}`;
        peopleArray.push(fullName)
    }

    let projectArray = [];
    for (let project of projectData) {
        projectArray.push(project.projectName)
    }

    // replace the personId and projectId with the actual person name and project name
    for (let task of taskData) {
        print(`Person Assigned = ${peopleArray[task.personAssigned-1]}`)
        print(`Project Assigned = ${projectArray[task.projectAssigned -1]}`)
    }

    const taskComponents = taskData.map((task) => <TaskCard 
        key={task.taskId} 
        description={task.description} 
        completionStatus={task.completionStatus}
        personAssigned={task.personAssigned}
        dueDate={task.dueDate}
        estimatedDuration={task.estimatedDuration}
    />)
    return (
        <>
            <p>I am the tasks page for all tasks.</p>
            {taskComponents}
        </>
    )
}