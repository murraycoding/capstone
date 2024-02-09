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
          <NavLink name={'home'} path=""/>
          <NavLink name={'about'} path="about"/>
          <NavLink name={'projects'} path="projects"/>
          <NavLink name={'tasks'} path="tasks"/>
          <NavLink name={'people'} path="people" />
          <NavLink name={'login'} path="login"/>
        </ul>
      </header>
      <div id="outlet-wrapper">
        <Outlet />
      </div>
      <Footer />

    </>
  )
}
