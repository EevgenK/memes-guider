'use client';
import { Link } from '@heroui/react';
import { usePathname } from 'next/navigation';

export interface NavListProps {
  items: { title: string; link: string }[];
  Element: React.ComponentType<{ children: React.ReactNode }>;
}
const NavList = ({ items, Element }: NavListProps) => {
  const pathname = usePathname();
  return (
    <>
      {items.map((item, index) => (
        <Element key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={item.link === pathname ? 'secondary' : 'foreground'}
            href={item.link}
            size="lg"
          >
            {item.title}
          </Link>
        </Element>
      ))}
    </>
  );
};

export default NavList;
