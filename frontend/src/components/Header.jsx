import umbrella from '../assets/Umbrella_Color.png'

export default function Title() {
    return (
        <>
            <div id="header-section">
                <div id="page-title">
                    <h1>Brian Murray</h1>
                    <img id="top-image" src={umbrella}/>
                    <h1>Project Management Application</h1>
                </div>
                <span id="subtitle">January 2024 Cohort - EDP Capstone Project</span>
            </div>
        </>
    )
}

