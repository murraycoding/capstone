// package imports
import { useState, useEffect } from 'react'

// component import
import TaskCard from '../components/TaskCard'


export default function TasksPage() {
    // state data
    /*
    const [peopleData, setPeopleData] = useState([])
    const [taskData, setTaskData] = useState([])
    const [projectData, setProjectData] = useState([])
    */

    /*  Attempt #1 => There were too many rerenders of the page
    useEffect(() => {
        const fetchData = async() => {
            try {
                const peopleResponse = await fetch('/api/people')
                const people_data = await peopleResponse.json();
                

                const taskResponse = await fetch('/api/tasks');
                const task_data = await taskResponse.json();
                

                const projectResponse = await fetch('/api/projects')
                const project_data = await projectResponse.json()

                setTaskData(task_data)
                setPeopleData(people_data)
                setProjectData(project_data)

            }
            catch (error) {
                console.error("Error Fetching Data:", error)
            }
        };
        fetchData();

    }, [])
    */

    // Attempt #2 at the more efficient useEffect function
    useEffect(() => {
        const fetchData = async () => {
            try {
                const peoplePromise = await fetch('/api/people')
                const taskPromise = await fetch('/api/tasks')
                const projectPromise = await fetch('/api/projects')

                const promises = [peoplePromise, taskPromise, projectPromise]

                Promise.allSettled(promises).then((results) => 
                    results.forEach((result) => {
                        const promise = result.value.json()
                        promise.then(data => console.log(data))
                    }
                    )
                )
            } 
            catch (error) {
                console.error("There was an error fetching data. ",error)
            }
        };
        fetchData();
    }, [])

    return <p>This is the tasks page.</p>

}

    /* The rest of the actual code starts here!

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

    //sets the new data to taskData (state variable)
    setTaskData(newTaskData)

    const taskComponents = taskData.map((task) => <TaskCard
        key={task.taskId}
        taskId={task.taskId}
        description={task.description}
        completionStatus={task.completionStatus}
        personAssigned={task.personAssigned}
        dueDate={task.dueDate}
        estimatedComplexity={task.estimatedComplexity}
    />)
    return (
        <>
            <p>I am the tasks page for all tasks.</p>
            {taskComponents}
        </>
    )
}

*/ // This is the end of the large section of code commented out.