import SkillsGame from "@/components/SkillsGame";
import React from "react";

const page = () => {
  return (
    <div className='px-4 sm:px-8 pt-12 pb-20 max-w-[90%]'>
      <h1 className='my-6 text-2xl'>Skills</h1>
      <SkillsGame></SkillsGame>
    </div>
  );
};

export default page;
