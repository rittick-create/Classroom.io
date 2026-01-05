import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Register_component from "../src/components/from/Register"
import Login_component from './components/from/Login'
import Logout_component from './components/from/Logout' 
import Profile_component from './components/from/Get-user-profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link> {/* Added Link */}
        <Link to="/logout">Logout</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register_component />} />
        <Route path="/login" element={<Login_component />} />
        <Route path="/profile" element={<Profile_component />} /> {/* Added Route */}
        <Route path="/logout" element={<Logout_component />} /> 
        <Route path="/" element={<Login_component />} />
      </Routes>
    </>
  )
}

export default App