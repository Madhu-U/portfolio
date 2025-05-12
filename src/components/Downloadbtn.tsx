import React from "react";

const Downloadbtn = () => {
  return (
    <a
      href='/files/Madhu_U_Web_Developer_Resume.pdf'
      download
      target='_blank'
      rel='noopener noreferrer'
      className='px-8 py-4 bg-primary text-foreground font-semibold uppercase tracking-widest hover:outline-1 hover:outline-foreground hover:border-3 hover:border-background'
    >
      Resume
    </a>
  );
};

export default Downloadbtn;
