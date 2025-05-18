import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  iconName: IconType;
  href: string;
}

const Icon = ({ iconName, href }: IconProps): React.ReactElement => {
  const IconComponent = iconName;
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer'>
      <IconComponent className='text-primary w-10 h-10'></IconComponent>
    </Link>
  );
};

export default Icon;
