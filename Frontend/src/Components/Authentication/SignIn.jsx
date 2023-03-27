import React, { useState } from "react";
import { InputData } from "../Client";
import { login } from "../../store/actions/userAction";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// default form fields
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { email, password } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    setFormField(defaultFormFields);
    toast.success("Login Successful!");
    navigate(from, { replace: true });
  };

  return (
    <div className='sign_in'>
      <h3>Already have an account</h3>
      <h3>Sign In to your Account</h3>
      <form onSubmit={handleSubmit}>
        <InputData
          value={email}
          label='Email'
          idlabel='sEmail'
          placeholder='Enter Your Email'
          type='email'
          name='email'
          actionOnChange={handleChange}
        />
        <InputData
          value={password}
          label='Password'
          idlabel='sPassword'
          placeholder='Enter Your Password'
          type='password'
          name='password'
          actionOnChange={handleChange}
        />
        <div className='actions'>
          <button className='primary_button' type='submit'>
            Sign In
          </button>
          <p className='selectable_underline_colpri'>Forgot Password</p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
