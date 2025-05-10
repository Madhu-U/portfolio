import React from "react";

const Downloadbtn = () => {
  return (
    <a
      href='/files/Madhu_U_Web_Developer_Resume.pdf'
      download
      target='_blank'
      rel='noopener noreferrer'
      className='px-8 py-4 bg-primary text-foreground font-semibold uppercase tracking-widest'
    >
      Resume
    </a>
  );
};

export default Downloadbtn;
