"use client";
import React from "react";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(form.email);

    if (!form.name || !form.email || !form.message || !isValidEmail) {
      setError("All fields are required");
      return;
    }
    console.log(form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setError(null);
  };
  return (
    <form className='bg-primary p-4 my-3 max-w-[700px]' onSubmit={handleSubmit}>
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
        onChange={handleChange}
        value={form.name}
      />
      <input
        type='email'
        id='email'
        name='email'
        className='input-field'
        placeholder='Email'
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        id='message'
        name='message'
        className='input-field'
        rows={7}
        placeholder='How can I help you?'
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      {error && (
        <p className='text-foreground font-semibold italic mb-4'>{error}</p>
      )}
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
