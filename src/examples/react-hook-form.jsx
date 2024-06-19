import { useForm } from "react-hook-form";
import "./react-hook-form.css";
function LoginForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
        console.log(formData);
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
        <div>
            <form onSubmit={handleSubmit} className="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />

                <label htmlFor="quantity">quantity:</label>
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
                
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>

                {/* <label className="hook__text">Email</label>
                <input
                    type="email"
                    className="hook__input"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                    <p className="hook__error">Email is required and must be valid</p>
                )}
                <label className="hook__text">Password</label>
                <input
                    type="password"
                    className="hook__input"
                    {...register("password", { required: true })}
                />
                {errors.password && <p className="hook__error">Password is required</p>}
                <button className="hook__button" type="submit">
                    Submit
                </button> */}
            
        </div>
    );
}
export default LoginForm;
