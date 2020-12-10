import React from "react";


const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.talents);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/display"); //Push back to display page
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name:
      <input
    
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      Email:
      <input
       
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      Image URL:
      <input
        
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
      />
Work Url:
    <input
       
        type="text"
        name="work_url"
        value={formData.work_url}
        onChange={handleChange}
      />

    Work Image URL:
    <input
         
        type="text"
        name="work_image_url"
        value={formData.work_image_url}
        onChange={handleChange}
      />
</label>


      <input type="submit" value={props.label} />

    </form>
  );
};
export default Form;