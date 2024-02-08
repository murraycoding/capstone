// package imports
import { Link } from 'react-router-dom'

export default function ProjectCard({name, id, teamSize, budget}){

    // query the database to get the information for this ???
    let workload = 10;

    return (
        <div className="project-card">
            <h3 className="project-title">{name}</h3>
            <ul>
                <li>Team Size: {teamSize}</li>
                <li>Budget: {budget}</li>
                <li>Workload: {workload}</li>
            </ul>
            <button className="primary-button">
                <Link to={`/project/${id}`}>Tasks</Link>
            </button>
        </div>
    )
}