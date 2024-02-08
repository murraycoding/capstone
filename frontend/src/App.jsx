// package imports
import { Outlet } from 'react-router-dom';

// page imports

// components imports
import NavLink from './components/NavLink';

// style imports
import './App.css'


export default function App() {

  return (
    <>
      <header>
      <h1>This is the header of the app.</h1>
      <ul id="nav-bar">
        <NavLink name={'home'}/>
        <NavLink name={'about'}/>
        <NavLink name={'projects'}/>
        <NavLink name={'tasks'}/>
        <NavLink name={'login'}/>
      </ul>

      </header>

      <Outlet />
      <p>This is the footer of the app</p>

    </>
  )
}
