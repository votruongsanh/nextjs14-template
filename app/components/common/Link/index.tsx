import NextLink from 'next/link';
import React from 'react';

type LinkProps = {
  href: string;
  as?: string;
  children: React.ReactNode;
};

const Link = ({ href, as, children }: LinkProps) => {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return (
      <NextLink href={href} as={as}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
