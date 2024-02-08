// package imports
import { Outlet } from 'react-router-dom';

// page imports

// components imports
import NavLink from './components/NavLink';
import Footer from './components/Footer';
import Header from './components/Header';

// style imports
import './App.css'


export default function App() {

  return (
    <>
      <header>
      <Header />
      <ul id="nav-bar">
        <NavLink name={'home'}/>
        <NavLink name={'about'}/>
        <NavLink name={'projects'}/>
        <NavLink name={'tasks'}/>
        <NavLink name={'login'}/>
      </ul>

      </header>

      <Outlet />
      <Footer />

    </>
  )
}
