import { Link } from 'react-router-dom'

export default function NavLink({name}){
    return (
        <li className='nav-link'>
            <Link to={'/'}>{name}</Link>
            <div></div>
        </li>
    )
}