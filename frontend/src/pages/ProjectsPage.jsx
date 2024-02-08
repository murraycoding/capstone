// component imports
import ProjectCard from "../components/ProjectCard"

const project_data = [
    {"projectId":1, "projectName": "E-commerce Website", "teamSize": 10, "budget": 50000, "workload": 1500, "completionTime": 8},
    {"projectId":2, "projectName": "Mobile App Development", "teamSize": 8, "budget": 40000, "workload": 1200, "completionTime": 6},
    {"projectId":3, "projectName": "Data Analytics Platform", "teamSize": 12, "budget": 60000, "workload": 2000, "completionTime": 10},
    {"projectId":4, "projectName": "AI Chatbot Integration", "teamSize": 6, "budget": 30000, "workload": 800, "completionTime": 5},
    {"projectId":5, "projectName": "Virtual Reality Game", "teamSize": 15, "budget": 80000, "workload": 2500, "completionTime": 12},
    {"projectId":6, "projectName": "Social Media Analytics", "teamSize": 8, "budget": 45000, "workload": 1500, "completionTime": 9},
    {"projectId":7, "projectName": "Blockchain Integration", "teamSize": 10, "budget": 55000, "workload": 1800, "completionTime": 10},
    {"projectId":8, "projectName": "Healthcare App Development", "teamSize": 7, "budget": 35000, "workload": 1000, "completionTime": 7},
    {"projectId":9, "projectName": "E-learning Platform", "teamSize": 12, "budget": 60000, "workload": 2000, "completionTime": 11},
    {"projectId":10, "projectName": "Smart Home Automation", "teamSize": 10, "budget": 50000, "workload": 1600, "completionTime": 9},
    {"projectId":11, "projectName": "Augmented Reality App", "teamSize": 8, "budget": 40000, "workload": 1300, "completionTime": 8},
    {"projectId":12, "projectName": "Supply Chain Optimization", "teamSize": 15, "budget": 75000, "workload": 2200, "completionTime": 12},
    {"projectId":13, "projectName": "Online Booking System", "teamSize": 6, "budget": 30000, "workload": 1000, "completionTime": 6},
    {"projectId":14, "projectName": "Customer Relationship Management (CRM)", "teamSize": 10, "budget": 55000, "workload": 1800, "completionTime": 10},
    {"projectId":15, "projectName": "Gaming App Development", "teamSize": 12, "budget": 65000, "workload": 2100, "completionTime": 11},
    {"projectId":16, "projectName": "Automated Testing Framework", "teamSize": 8, "budget": 45000, "workload": 1400, "completionTime": 8},
    {"projectId":17, "projectName": "Financial Analytics Platform", "teamSize": 10, "budget": 60000, "workload": 1900, "completionTime": 10},
    {"projectId":18, "projectName": "AI-driven Marketing Campaign", "teamSize": 7, "budget": 35000, "workload": 1200, "completionTime": 7},
    {"projectId":19, "projectName": "Weather Prediction Model", "teamSize": 12, "budget": 55000, "workload": 1800, "completionTime": 9},
    {"projectId":20, "projectName": "Inventory Management System", "teamSize": 10, "budget": 50000, "workload": 1600, "completionTime": 9},
    {"projectId":21, "projectName": "Robotic Process Automation (RPA)", "teamSize": 8, "budget": 40000, "workload": 1300, "completionTime": 8},
    {"projectId":22, "projectName": "Language Translation App", "teamSize": 15, "budget": 70000, "workload": 2200, "completionTime": 12},
    {"projectId":23, "projectName": "Social Networking Platform", "teamSize": 6, "budget": 30000, "workload": 1000, "completionTime": 6},
    {"projectId":24, "projectName": "Cybersecurity Solution", "teamSize": 10, "budget": 55000, "workload": 1900, "completionTime": 10},
    {"projectId":25, "projectName": "Machine Learning Model Deployment", "teamSize": 12, "budget": 65000, "workload": 2100, "completionTime": 11}
   ]

const project_components = project_data.map((project) => <ProjectCard key={project.projectId} name={project.projectName} teamSize={project.teamSize} budget={project.budget}/>)

export default function ProjectsPage() {
    return (
        <>
        <div id="project-wrapper">
            {project_components}
        </div>
        </>
    )
}