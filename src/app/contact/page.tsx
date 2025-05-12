import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const page = () => {
  return (
    <div className='bg-foreground text-background h-[100vh] px-4 py-12 sm:flex sm:flex-col sm:gap-4 sm:px-[8rem] w-full'>
      <h1 className='text-2xl border-b-3 border-primary pb-2'>Get in touch!</h1>
      <p className='my-4'>
        I&apos;m always excited to connect with fellow developers, potential
        collaborators, or anyone interested in discussing web development
        projects.
      </p>
      <p className='my-2 font-medium uppercase'>Reach out to me on:</p>
      <div className='flex gap-4 pl-3'>
        <Link href='#'>
          <FaGithubSquare className='text-primary bg-foreground w-10 h-10' />
        </Link>
        <Link href='#'>
          <FaLinkedin className='text-primary bg-foreground w-10 h-10' />
        </Link>
        <Link href='#'>
          <FaInstagramSquare className='text-primary bg-foreground w-10 h-10' />
        </Link>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
