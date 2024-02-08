import { Link } from 'react-router-dom'

export default function NavLink({name, path}){
    return (
        <li className='nav-link'>
            <Link to={`/${path}`}>{name}</Link>
            <div></div>
        </li>
    )
}