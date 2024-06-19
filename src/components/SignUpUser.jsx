import { useForm } from 'react-hook-form';


export function SignUpUser() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        } 
        else {       
            alert(
                `
            First Name : ${data.firstName}
            Last Name  : ${data.lastName}
            Username   : ${data.userName}
            Email        : ${data.email}
            Password   : ${data.password}`
            );
            console.log(data);
        }
    };

    const password = watch('password');
          
  return (
    <div className="form_global">
       <h2>SignUpUser</h2>

       <form onSubmit={handleSubmit(onSubmit)}>
            
                <label htmlFor="firstName">First Name:</label>
                <input  id="firstName"   {...register("firstName", { required: "First name is required" })}                   
                />
                {errors.firstName && <p >{errors.firstName.message}</p>}
                <br />
            
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}                   
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <br />
                <label htmlFor="userName" >Username:</label>
                <input
                    id="userName"
                    {...register("userName", { required: "Username is required" })}
                />
                {errors.userName && <p>{errors.userName.message}</p>}
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                    <p>Email is required and must be valid</p>
                )}
                <br />        
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required</p>}
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <p>Passwords do not match</p>}
                <br />

            <button type="submit">Submit</button>
        </form>

    </div>
  );
}