import { useState } from "react";
import "./forms.css"

export function AddProduct() {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
     };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      alert(
          `\nName         : ${formData.name}\nDescription: ${formData.description}\nCategory    : ${formData.category}\nquantity     : ${formData.quantity}\nPrice           : ${formData.price} `
      );      
};

    const handleCancel = () => {       
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });
    };
           
  return (
    <div className="form_global">
       <h2>ADDProduct</h2>

       <form onSubmit={handleSubmit} className="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                <br />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} /><br />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} /><br />

                <label htmlFor="quantity">quantity:</label>
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /><br />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} /><br />
                
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Reset</button><br />
        </form>
    </div>
  );
}