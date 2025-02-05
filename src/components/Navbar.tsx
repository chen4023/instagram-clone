'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import HomeIcon from './ui/icons/HomeIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NewIcon from './ui/icons/NewIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const menu = [
  { href: '/', icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: '/new', icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
  { href: '/search', icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
]
export default function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession() // 세션 정보 가져옴
  // const router = useRouter()
  console.log(session)
  // 세션 상태 확인 로직 추가
  useEffect(() => {
    console.log('Session status:', status)
  }, [status])
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
          {status === "authenticated" && session?.user?.image && (
            <div className='flex items-center gap-4'>
              <Image
                src={session.user.image}
                alt='User Profile'
                width={35}
                height={35}
                className=' rounded-full'
                unoptimized  // 외부 이미지 사용 시 추가
              />
              <Link href="/api/auth/signout"><ColorButton text='Sign Out' /></Link>
            </div>
          )}
          {status === 'unauthenticated' && <Link href='/api/auth/signin'><ColorButton text='Sign In' /></Link>}
        </ul>
      </nav>
    </div >
  );
}

