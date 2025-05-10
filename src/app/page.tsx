import Downloadbtn from "@/components/Downloadbtn";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className='px-4 sm:px-8 py-12'>
      <section className=''>
        <div className='border-b-3 border-primary pb-6'>
          <h1 className='text-2xl mb-1 uppercase'>Madhu Umashankar</h1>
          <p className=' mb-2 font-body font-semibold uppercase '>
            Full Stack Web Developer
          </p>
          <p>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <div className='flex justify-between items-center my-6'>
          <div className='flex gap-4 '>
            <Link href='#'>
              <FaGithubSquare className='text-primary bg-background w-10 h-10' />
            </Link>
            <Link href='#'>
              <FaLinkedin className='text-primary bg-background w-10 h-10' />
            </Link>
            <Link href='#'>
              <FaInstagramSquare className='text-primary bg-background w-10 h-10' />
            </Link>
          </div>
          <Downloadbtn></Downloadbtn>
        </div>

        <div>
          <h2 className='uppercase mb-3'>About me</h2>
          <p className='text-lg  '>
            I&apos;m a Full-Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js) and Next.js, with a passion
            for building scalable and user-centric web applications.
            Transitioning from a 2.4-year role as a Systems Engineer at Infosys,
            I bring a strong foundation in problem-solving, Agile methodologies,
            and a commitment to delivering high-quality, responsive digital
            solutions. My objective is to leverage modern JavaScript frameworks
            to create intuitive and impactful online experiences.
          </p>
        </div>

        <div className='my-6'>
          <h2 className='uppercase tracking-wide mb-3'>Experience</h2>
          <p className='text-body font-semibold uppercase'>
            Systems Engineer | Infosys Limited
          </p>
          <p className='mb-3 text-sm'>Aug 2018 - Dec 2020 | Mangalore, India</p>
          <p>
            Provided application support and development for enterprise
            applications, focusing on Mainframe and Micro Focus systems. My
            responsibilities included developing and optimizing COBOL programs,
            JCL scripts, and DB2 database queries, alongside monitoring job
            performance and managing incidents. This experience allowed me to
            gain strong skills in Agile development cycles, collaborative
            problem-solving, and application debugging.
          </p>
        </div>
      </section>
    </main>
  );
}
