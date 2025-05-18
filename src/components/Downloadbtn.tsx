"use client";
import React from "react";

const Downloadbtn = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className=' py-[20px] px-[7px] border-1 border-transparent hover:border-foreground'>
      <a
        href='/files/Madhu_U_Web_Developer_Resume.pdf'
        download
        target='_blank'
        rel='noopener noreferrer'
        className={`px-8 py-4 ${
          clicked
            ? "bg-foreground text-background"
            : " bg-primary text-foreground"
        } font-semibold uppercase tracking-widest`}
        onClick={() => setClicked(true)}
      >
        Resume
      </a>
    </div>
  );
};

export default Downloadbtn;
