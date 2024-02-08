// package imports
import { useState, useEffect } from 'react';

export default function TaskPage() {
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

                console.log(taskData)

            }
            catch (error) {
                console.error("Error Fetching Data:", error)
            }
        };
        fetchData();
    }, [])

    return (
        <>
            <p>I am the task page for one task.</p>
        </>
    )
}