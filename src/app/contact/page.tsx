import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
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
        <Icon
          iconName={FaGithubSquare}
          href='https://github.com/Madhu-U'
        ></Icon>
        <Icon
          iconName={FaLinkedin}
          href='https://www.linkedin.com/in/madhu-u/'
        ></Icon>
        <Icon
          iconName={FaInstagramSquare}
          href='https://www.instagram.com/madhu_umashankar/'
        ></Icon>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
