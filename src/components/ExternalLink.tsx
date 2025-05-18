import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const ExternalLink = ({
  iconName,
  href,
  linkName,
}: {
  iconName: IconType;
  href: string;
  linkName: string;
}): React.ReactElement => {
  const IconComponent = iconName;
  return (
    <>
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-primary text-foreground uppercase tracking-wider font-body font-medium px-3 py-2 flex items-center gap-1 hover:bg-background hover:text-foreground'
      >
        {linkName}
        <IconComponent></IconComponent>
      </Link>
    </>
  );
};

export default ExternalLink;
