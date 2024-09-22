import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your Firstname"
          {...register('Firstname', { required: true })}
        /> 
        {errors.Firstname && <span>This field is required</span>}
        <br /> <br />
        
        <input
          type="text"
          placeholder="Enter your Lastname"
          {...register('Lastname', { required: true })}
        /> 
        {errors.Lastname && <span>This field is required</span>}
           <br /> <br />
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: true })}
        /> 
        {errors.email && <span>This field is required</span>}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter your password"
          {...register('password', { required: true })}
        />  
        {errors.password && <span>This field is required</span>}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;











