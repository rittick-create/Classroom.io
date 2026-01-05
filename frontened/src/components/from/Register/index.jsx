import { useState } from "react";
import Common_form from "../common-form";
import { RegisterFormElements } from "../../../config";
import "./Register.css"; // Corrected import syntax

function Register_component() {
  const [registration_data, setRegistration_data] = useState({
    firstName: "", lastName: "", email: "", password: "",
    confirmPassword: "", age: "", phone: "", gender: "",
  });

  return (
    <div className="register-page"> 
      <div className="register-card"> 
        <h1 className="register-title">Register.</h1>
        
        <Common_form
          formData={registration_data}
          setFormData={setRegistration_data}
          formcontrols={RegisterFormElements}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(registration_data);
          }}
        />
      </div>
    </div>
  );
}

export default Register_component;