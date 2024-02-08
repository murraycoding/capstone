// package imports
import { useState, useEffect } from 'react';

// component imports
import ProjectCard from "../components/ProjectCard"

export default function ProjectsPage() {
    const [projectData, setProjectData] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/projects')
                const result = await response.json();
                setProjectData(result)
            } 
            catch (error) {
                console.error("Error Fetching Data:", error)
            }
        };

        fetchData();
    }, []);

    const projectComponents = projectData.map((project) => <ProjectCard key={project.projectId} name={project.projectName} teamSize={project.teamSize} budget={project.budget}/>)

    return (
        <>
        <div id="project-wrapper">
            {projectComponents}
        </div>
        </>
    )
}