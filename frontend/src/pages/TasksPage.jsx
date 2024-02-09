// package imports
import { useState, useEffect } from 'react'

// component import
import TaskCard from '../components/TaskCard'


export default function TasksPage() {
    // state data
    const [peopleData, setPeopleData] = useState([])
    const [taskData, setTaskData] = useState([])
    const [projectData, setProjectData] = useState([])

    // Attempt #2 at the more efficient useEffect function
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("The fetchData function is running.")
                const peoplePromise = await fetch('/api/people')
                const taskPromise = await fetch('/api/tasks')
                const projectPromise = await fetch('/api/projects')

                const promises = [peoplePromise, taskPromise, projectPromise]

                Promise.allSettled(promises).then((results) => 
                    results.forEach((result) => {
                            const promise = result.value.json()
                            promise.then(data => {
                                // updates the state depending on the nature of the data
                                if ('firstName' in data[0]) {
                                    console.log("The function has found the people data.")
                                    setPeopleData(data)
                                } else if ('projectId' in data[0]) {
                                    console.log("The function has found the project data.")
                                    setProjectData(data)
                                } else if ('taskId' in data[0]) {
                                    console.log("The function has found the task data.")
                                    setTaskData(data)
                                } else {
                                    console.error("Dataset could not be determined.")
                                }
                            })
                        })
                )
            } 
            catch (error) {
                console.error("There was an error fetching data. ",error)
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
    let newTaskData = []
    for (let task of taskData) {

        // new task object
        let newTask = {
            "taskId": task.taskId,
            "description": task.description,
            "completionStatus": task.completionStatus,
            "personAssigned": peopleArray[task.personAssigned -1],
            "projectAssigned": projectArray[task.projectAssigned -1],
            "dueDate": task.dueDate,
            "estimatedComplexity": task.estimatedComplexity
        }
        
        newTaskData.push(newTask)
    }

    console.log(newTaskData)

    //sets the new data to taskData (state variable)

    const taskComponents = newTaskData.map((task) => <TaskCard
        key={task.taskId}
        taskId={task.taskId}
        description={task.description}
        completionStatus={task.completionStatus ? "true" : "false"}
        personAssigned={task.personAssigned}
        dueDate={task.dueDate}
        estimatedComplexity={task.estimatedComplexity}
        projectAssigned={task.projectAssigned}
    />)
    return (
        <>
        <div id="task-wrapper">
            {taskComponents}
        </div>
        </>
    )
}