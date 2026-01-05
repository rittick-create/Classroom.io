export const formTypes = {
  INPUT: "INPUT",
  SELECT: "SELECT",
};


export const LoginFormElements = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: formTypes.INPUT,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: formTypes.INPUT,
  },
];


export const RegisterFormElements = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    type: "text",
    componentType: formTypes.INPUT,
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    type: "text",
    componentType: formTypes.INPUT,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: formTypes.INPUT,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: formTypes.INPUT,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
    componentType: formTypes.INPUT,
  },
  {
    name: "age",
    label: "Age",
    placeholder: "Enter your age",
    type: "number",
    componentType: formTypes.INPUT,
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "text",
    componentType: formTypes.INPUT,
  },
  {
    name: "gender",
    label: "Gender",
    componentType: formTypes.SELECT,
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "others", label: "Others" },
    ],
  },
];
export const LogoutFormElements = [];