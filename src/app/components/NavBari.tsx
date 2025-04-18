'use client';

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
} from '@heroui/react';
import Logo from './Logo';
import { useState } from 'react';

import NavList from './NavList';

const NavBari = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Memes List', link: '/list' },
    { title: 'Memes Table', link: '/table' },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavList items={menuItems} Element={NavbarItem} />
      </NavbarContent>

      <NavbarMenu className="bg-black/80">
        <NavList items={menuItems} Element={NavbarMenuItem} />
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBari;
