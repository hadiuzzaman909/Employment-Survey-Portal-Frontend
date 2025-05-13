import React from 'react';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
            <p className='text-center'><small>Copyright &copy; {year}. All right reserved.</small></p>
        </div>
    );
};

export default Footer;