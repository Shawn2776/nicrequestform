import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CoronaBanner.css';

function CoronaBanner() {
  return (
    <div className='alert__body'>
      <div className='alert__box'>
        <span className='alert__yellow'>
          <h4>Coronavirus (COVID-19) Updates and Information</h4>
        </span>
        <div className='corona__links'>
          <Link to='/messages'>Messages and general info</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to='/reporting'>COVID-19 Reporting for Students and Employees</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to='/dashboard'>COVID-19 Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default CoronaBanner;

/*
<div className='corona'>
      Coronavirus (COVID-19) Updates and Information
      <div className='corona__links'>
        <Link to='/messages'>Messages and general info</Link>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to='/reporting'>COVID-19 Reporting for Students and Employees</Link>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to='/dashboard'>COVID-19 Dashboard</Link>
      </div>
    </div>


*/