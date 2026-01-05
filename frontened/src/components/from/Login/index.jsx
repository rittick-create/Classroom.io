import { useState } from "react";
import Common_form from "../common-form";
import { LoginFormElements } from "../../../config"; 
// import "./Login.css"; 

function Login_component() {
  // 1. Local state for login (usually just email and password)
  const [login_data, setLogin_data] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="login-page"> 
      <div className="login-card"> 
        <h1 className="login-title">Login.</h1>
        

        <Common_form
          formData={login_data}
          setFormData={setLogin_data}
          formcontrols={LoginFormElements}
          buttonText={"Login"}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Login Data:", login_data);
          }}
        />
      </div>
    </div>
  );
}

export default Login_component;