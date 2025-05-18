"use client";
import React from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

const Downloadbtn = () => {
  const [clicked, setClicked] = React.useState(false);

  const { playSound } = useSoundEffect();

  const handleClick = () => {
    playSound("click");
    setClicked(true);
  };

  const handleHover = () => {
    playSound("hover");
  };

  return (
    <div
      className=' py-[20px] px-[7px] border-1 border-transparent hover:border-foreground'
      onMouseEnter={handleHover}
    >
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
        onClick={handleClick}
      >
        Resume
      </a>
    </div>
  );
};

export default Downloadbtn;
