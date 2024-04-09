import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ForgotPassword from './components/forget p'
import VerifyEmail from './components/verify_email'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import ResetPassword from'./components/reset p'
import PasswordChanged from './p change.js'
import Identify_Role from'./components/role.js'
import First from './page.js'
function App() {
  return (
    <Router>
      <div className="App">
        

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              
            
              <Route exact path="/" element={<First />} />
              <Route exact path="/Identify_Role" element={<Identify_Role />} />



              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="ForgotPassword" element={<ForgotPassword />} />
              
              <Route path="VerifyEmail" element={<VerifyEmail />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
              <Route path="PasswordChanged" element={<PasswordChanged />} />

              

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
