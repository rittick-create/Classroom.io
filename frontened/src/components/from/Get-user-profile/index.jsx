import { useState, useEffect } from "react";
import Common_form from "../common-form";
import { RegisterFormElements } from "../../../config"; 
// import "./Profile.css"; 

function Profile_component() {

  const [profile_data, setProfile_data] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    gender: "", age: "",
  });
  useEffect(() => {
  }, []);

  return (
    <div className="profile-page"> 
      <div className="profile-card"> 
        <h1 className="profile-title">Your Profile.</h1>
        
        <Common_form
          formData={profile_data}
          setFormData={setProfile_data}
          formcontrols={RegisterFormElements.filter(ele => ele.name !== 'password' && ele.name !== 'confirmPassword')}
          buttonText="Update Profile"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Updating profile...", profile_data);
          }}
        />
      </div>
    </div>
  );
}

export default Profile_component;