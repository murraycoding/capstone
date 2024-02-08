// package imports
import { Outlet } from 'react-router-dom';

// page imports

// components imports

// style imports
import './App.css'


export default function App() {

  return (
    <>
      <p>This is the header of the app.</p>
      <Outlet />
      <p>This is the footer of the app</p>

    </>
  )
}
