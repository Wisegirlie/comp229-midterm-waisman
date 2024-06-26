import { useForm } from 'react-hook-form';


export function SignUpUser() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        } 
        else {   
            console.log(data);    
            alert(
                `
            First Name : ${data.firstName}
            Last Name  : ${data.lastName}
            Username   : ${data.userName}
            Email          : ${data.email}
            Password   : ${data.password}`
            );            
        }
    };

    const password = watch('password');

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
       <h2>SignUpUser</h2>

       <form onSubmit={handleSubmit(onSubmit)}>
            
                <label htmlFor="firstName">First Name:</label>
                <input  id="firstName"   {...register("firstName", { required: "First name is required" })}                   
                />
                {errors.firstName && <p className='error_text' >{errors.firstName.message}</p>}
                <br />
            
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}                   
                />
                {errors.lastName && <p className='error_text'>{errors.lastName.message}</p>}
                <br />
                <label htmlFor="userName" >Username:</label>
                <input
                    id="userName"
                    {...register("userName", { required: "Username is required" })}
                />
                {errors.userName && <p className='error_text'>{errors.userName.message}</p>}
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                    <p className='error_text'>Email is required and must be valid</p>
                )}
                <br />        
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p className='error_text'>Password is required</p>}
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <p className='error_text'>Passwords do not match</p>}
                <br />

            <button type="submit">Submit</button>
        </form>

    </div>
  );
}