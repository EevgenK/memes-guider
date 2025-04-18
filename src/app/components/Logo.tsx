import { Link } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" aria-label="Homepage">
      <Image alt="Logo" height={36} src="/logo.svg" width={36} priority />
    </Link>
  );
};

export default Logo;
