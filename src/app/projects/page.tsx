"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/lib/projects";

const page = () => {
  return (
    <div className='px-4 sm:px-8 pt-12 pb-20 '>
      <h1 className='text-xl sm:text-2xl my-3 sm:mb-8'>Projects</h1>
      <div className='flex flex-col sm:flex-row gap-x-4 gap-y-8 flex-wrap items-center justify-center'>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              desc={project.description}
              githubUrl={project.githubUrl}
              imageUrl={project.imageUrl}
              liveSiteUrl={project.liveSiteUrl}
              title={project.name}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
};

export default page;
