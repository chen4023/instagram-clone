'use client'
import Link from 'next/link';
import React from 'react';
import HomeIcon from './ui/icons/HomeIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NewIcon from './ui/icons/NewIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';

const menu = [
  { href: '/', icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: '/new', icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
  { href: '/search', icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
]
export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className='flex justify-between items-center p-3'>
      <Link href='/'>
        <h1 className='text-3xl font-semibold'>
          Instangram
        </h1>
      </Link>
      <nav>
        <ul className='flex gap-6 items-center text-xl'>
          {menu.map((item) =>
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          )}
          <ColorButton text='Sign In' onClick={() => { }} />
        </ul>
      </nav>
    </div>
  );
}

