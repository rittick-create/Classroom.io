import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Common_form from "../common-form";
// import "./Logout.css"; 

function Logout_component() {
  const navigate = useNavigate();
  

  const [logout_data, setLogout_data] = useState({});

  const handleLogout = (e) => {
    e.preventDefault();
    
    localStorage.removeItem("token");
    sessionStorage.clear();
    
    console.log("Logged out successfully");
    
    navigate("/login");
  };

  return (
    <div className="logout-page"> 
      <div className="logout-card"> 
        <h1 className="logout-title">Logout.</h1>
        
        <Common_form
          formData={logout_data}
          setFormData={setLogout_data}
          formcontrols={[]} 
          buttonText="Confirm Logout" 
          onSubmit={handleLogout}
        />
      </div>
    </div>
  );
}

export default Logout_component;