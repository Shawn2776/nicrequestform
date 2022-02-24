import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/FormInput.css';
import { send } from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
// require('dotenv').config();

function FormInput() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      telNumber: '',
      email: '',
      additionalInfo: ''
    },
    criteriaMode: 'all'
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    send(
      'service_fytul5q',
      'template_dds27wv',
      data,
      'user_db6mnaU9ev5ZplbNf7HSw'
    )
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
        reset();
        navigate('/');
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  let navigate = useNavigate();

  return (
    <div className='form__landing'>
      <div className='prospect'>
        <h1>Prospect Inquiry</h1>
      </div>

    <form className='form__input' onSubmit={handleSubmit(onSubmit)}>

      <div className='contact'>
        <h3>Contact Information</h3>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" {...register("firstName", {required: true, maxLength: 80, validate: (value) => value !== ""})}/>
        <label htmlFor="floatingInput">First Name</label>
        {errors.firstName && <p>First Name is Required.</p>}
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" {...register("lastName", {required: true, maxLength: 100, validate: (value) => value !== ""})} />
        <label htmlFor="floatingInput">Last Name</label>
        {errors.lastName && <p>Last Name is Required.</p>}
      </div>

      <div className="form-floating mb-3">
        <input type="tel" className="form-control" id="floatingTel" placeholder="Phone Number" {...register("telNumber", {required: true, minLength: 6, maxLength: 12, validate: (value) => value !== ""})} />
        <label htmlFor="floatingTel">Phone Number</label>
        {errors.telNumber && <p>Phone Number is Required.</p>}
      </div>

      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingEmail" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i, validate: (value) => value !== ""})}/>
        <label htmlFor="floatingEmail">Email Address</label>
        {errors.email && <p>Email Address is Required.</p>}
      </div>

      
      <select className="form-select mb-3" aria-label="Default select example"  defaultValue={'DEFAULT'} {...register("programOfInterest", { required: true, validate: (value) => value !== "DEFAULT" })}>
        <option value='DEFAULT' disabled>Select a Program of Interest</option>
        <option value="Automotive Technology">Automotive Technology</option>
        <option value="Autobody Paint Technology">Autobody Paint Technology</option>
        <option value="Carpentry and Construction Technology">Carpentry and Construction Technology</option>
        <option value="Diesel Technology">Diesel Technology</option>
        <option value="Heating, Ventilation, Air Conditioning, and Refrigeration">Heating, Ventilation, Air Conditioning, and Refrigeration</option>
        <option value="Industrial Mechanic/Millwright">Industrial Mechanic/Millwright</option>
        <option value="Machining and CNC Technology">Machining and CNC Technology</option>
        <option value="Mechanical Design Engineering Technology">Mechanical Design Engineering Technology</option>
        <option value="Mechatronics">Mechatronics</option>
        <option value="Wastewater Treatment Plant Technology">Wastewater Treatment Plant Technology</option>
        <option value="Welding Technology">Welding Technology</option>
      </select>
      {errors.programOfInterest && <p>Please Select a Program of Interest</p>}

      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} {...register("additionalInfo", {})}></textarea>
        <label htmlFor="floatingTextarea2">Additional Information</label>
      </div>

      <input type="submit" className="btn btn-primary mb-3"/>

    </form>
    </div>
  )
}

export default FormInput;