import Common_input from "../common-input";
import { formTypes } from "../../../config/index";

function Common_form({ formcontrols = [], formData, setFormData, onSubmit }) {
  
  function render_form_elemets(element) {
    switch (element?.componentType) {
      case formTypes.INPUT:
        return (
          <Common_input
            key={element.name} 
            label={element.label}
            name={element.name}
            id={element.id}
            type={element.type}
            placeholder={element.placeholder}
            value={formData[element.name] || ""}
            onChange={(e) => { 
              setFormData({
                ...formData,
                [e.target.name]: e.target.value, 
              });
            }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <form onSubmit={onSubmit}>

      {formcontrols.map((item) => render_form_elemets(item))}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Common_form;