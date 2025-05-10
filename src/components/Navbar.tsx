"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { label: "me", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className='fixed bottom-0 left-0 sm:top-0 sm:left-0 sm:h-full w-full sm:w-[4rem] bg-primary flex sm:flex-col justify-around items-center'>
      {links.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link key={label} href={href}>
            <div
              className={`nav-link sm:-rotate-90 font-heading py-1 transition-all ${
                isActive && "bg-foreground text-background"
              }`}
            >
              <p className='font-body font-medium'>{label}</p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
