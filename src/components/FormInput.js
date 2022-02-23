import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/FormInput.css';

function FormInput() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      telNumber: '',
      email: '',
      additionalInfo: ''
    },
    criteriaMode: 'all'
  });
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form className='form__input' onSubmit={handleSubmit(onSubmit)}>

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

      
      <select className="form-select mb-3" aria-label="Default select example"  defaultValue={'DEFAULT'} {...register("programOfInterest", { required: true })}>
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

      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} {...register("additionalInfo", {})}></textarea>
        <label htmlFor="floatingTextarea2">Additional Information</label>
      </div>

      <input type="submit" className="btn btn-primary mb-3"/>

    </form>
  )
}

export default FormInput;

/*

<form className='form__input' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("First Name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last Name" {...register("Last Name", {required: true, maxLength: 100})} />
      <input type="tel" placeholder="Mobile Number" {...register("Mobile Number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <select {...register("Program of Interest", { required: true })}>
        <option value="" disabled selected>Select your Program of Interest</option>
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
      <textarea {...register("Additional Information", {})} />

      <input type="submit" />
    </form>



*/