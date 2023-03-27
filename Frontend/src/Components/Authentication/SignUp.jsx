import React, { useState } from "react";
import { InputData } from "../Client";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/userAction";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destrcture the input fields from form fields
  const { name, email, password } = formFields;
  const [avatar, setAvatar] = useState("/Profile.png");
  const dispatch = useDispatch();

  // destrcture the input fields from form fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormFields({ ...formFields, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    setFormFields(defaultFormFields);
  };

  return (
    <div className='signUp'>
      <h3>I don't have an account</h3>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <InputData
          value={name}
          label='Full Name'
          placeholder='Enter Your Name'
          required
          type='text'
          actionOnChange={handleChange}
          name='name'
        />
        <InputData
          value={email}
          label='Email'
          placeholder='Enter Your Email'
          required
          type='email'
          actionOnChange={handleChange}
          name='email'
        />
        <InputData
          label='Profile Image'
          placeholder='Upload Profile Pic'
          required
          type='file'
          actionOnChange={handleChange}
          name='avatar'
          accept='image/*'
        />
        <InputData
          value={password}
          label='Password'
          placeholder='Enter Your Password'
          required
          type='password'
          actionOnChange={handleChange}
          name='password'
        />

        <div className='actions'>
          <button className='primary_button' onClick={handleSubmit}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
