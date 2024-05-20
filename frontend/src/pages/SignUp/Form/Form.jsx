import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { errorSignProps, errorParagraphProps } from '../animations/animationProps';
import './Form.css';
import { useState } from 'react';
import { axiosclient } from '../../../api/axiosclient';

const formFields = [
  {
    labelText: "First Name",
    name: "first-name",
    type: "text",
    register: "firstName"
  },
  {
    labelText: "Last Name",
    name: "last-name",
    type: "text",
    register: "lastName"
  },
  {
    labelText: "Email",
    name: "email",
    type: "text",
    register: "email"
  },
  {
    labelText: "Password",
    name: "password",
    type: "password",
    register: "password"
  },
  {
    labelText: "Confirm password",
    name: "password_confirmation",
    type: "password",
    register: "password_confirmation"
  }
];

const Form = ({ setIsOpen, setName, setOpenToS }) => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name cannot be empty"),
    lastName: yup.string().required("Last Name cannot be empty"),
    email: yup
      .string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .max(20, "Password cannot be longer than 20 characters")
      .required("Password cannot be empty"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password cannot be empty')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const onSubmit = (data) => {
  axiosclient.post('/')
    setUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='signup-form'>
      {formFields.map((field, index) => (
        <div className="signup-field" key={index}>
          <input
            type={field.type}
            id={field.name}
            aria-invalid={errors[field.register] ? "true" : "false"}
            aria-describedby={field.register}
            name={field.name}
            placeholder={field.labelText}
            autoComplete="off"
            defaultValue=""
            {...register(field.register)}
          />
          <label htmlFor={field.name} className="signup-field-label-wrapper">
            <span className="signup-field-label-text">
              {field.labelText}
            </span>
          </label>
         
        </div>
      ))}
      <input type="submit" value="Create account" />
    </form>
  );
};

export default Form;
