import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  imageUrl: string;
  githubUrl: string;
  liveSiteUrl: string;
  title: string;
  desc: string;
}

const ProjectCard = ({
  imageUrl,
  githubUrl = "#",
  liveSiteUrl,
  title,
  desc,
}: ProjectCardProps) => {
  return (
    <div className='bg-foreground text-background min-w-[280px] max-w-[400px] px-3 py-4'>
      <Image src={imageUrl} alt='' width={500} height={500}></Image>
      <h1 className='text-xl sm:text-2xl my-3'>{title}</h1>
      <p className='text-sm sm:text-base '>{desc}</p>
      <div className='flex justify-between items-center mt-3'>
        <Link
          href={githubUrl}
          className='bg-primary text-foreground uppercase tracking-wider font-body font-medium px-3 py-2 flex items-center gap-1 hover:bg-background hover:text-foreground'
        >
          Github Repo
          <FiExternalLink></FiExternalLink>
        </Link>
        <Link
          href={liveSiteUrl}
          className='bg-primary text-foreground uppercase tracking-wider font-body font-medium px-3 py-2 flex items-center gap-1
          hover:bg-background hover:text-foreground'
        >
          Live Site
          <FiExternalLink></FiExternalLink>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
