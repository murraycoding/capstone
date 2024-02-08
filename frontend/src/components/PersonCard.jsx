// image imports
import logo from '../assets/Trav_Color.jpg'


export default function PersonCard({firstName, lastName}){
    return (
        <div className="person-card">
            <div className="card-hole"></div>
            <div className="card-logo">
                <img src={logo} alt="" />
            </div>
            <div className="picture-box"></div>
            <div className="bottom-panel">
                <p>{firstName}</p>
                <p>{lastName} </p>
            </div>
        </div>
    )
}