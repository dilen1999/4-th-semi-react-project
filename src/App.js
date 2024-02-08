import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar.js'
import Home1 from './pages/Home1.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'
import Home2 from './pages/Home2'
import Login from './pages/Login'

const App = () => {
  return (

    <div className='App'>

      <Router>
       
        
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser/home1" element={<Home1/>}/>
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/adduser/home1/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>

      </Router>


      <>
        {/*<Navbar/>
    
    <Home/>
    <Main/>
    <Footer/>*/}
      </>
    </div>
  )
}

export default App
