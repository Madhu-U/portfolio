import React from "react";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <form className='bg-primary p-4 my-3 max-w-[700px]'>
      <h1 className='text-2xl mb-2 flex items-center gap-2'>
        <MdEmail className='w-8 h-8' />
        Contact
      </h1>
      <p className='mb-2 font-medium'>
        Get in touch below and I&apos;ll get back to you as soon as possible.
      </p>
      <input
        type='text'
        id='name'
        name='name'
        className='input-field'
        placeholder='Name'
      />
      <input
        type='email'
        id='email'
        name='email'
        className='input-field'
        placeholder='Email'
      />
      <textarea
        id='message'
        name='message'
        className='input-field'
        rows={7}
        placeholder='How can I help you?'
      />
      <button
        type='submit'
        className='w-full py-3 bg-background text-foreground font-semibold uppercase tracking-widest'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
