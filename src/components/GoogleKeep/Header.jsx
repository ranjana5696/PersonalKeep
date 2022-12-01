import React from 'react';
import Logo from '../Image/Logo.png';
import './Keep.css';


function Header() {
  return (
    <>
      <div className='Keep-header'>
            <img src={Logo} alt="logo" width='60' height='50' />
            <h3> Personal Keep </h3>
      </div>
    </>
  )
}

export default Header;
