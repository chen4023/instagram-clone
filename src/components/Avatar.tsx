import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
type Props = {
  image: string | StaticImport
}
export default function Avatar({ image }: Props) {
  return (
    <Image
      src={image}
      alt='User Profile'
      width={35}
      height={35}
      className='rounded-full'
      referrerPolicy='no-referrer'
      unoptimized  // 외부 이미지 사용 시 추가
    />
  );
}

