import React from 'react';
type Props = {
  image?: string | null
  size?: 'small' | 'normal'
  highlignt?: boolean
}
export default function Avatar({ image, size = 'normal', highlignt = false }: Props) {
  return (
    <div className={getContainerStyle(size, highlignt)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img className={`rounded-full object-cover bg-white p-2 ${getImageSizeStyle(size)}`}
        src={image ?? undefined}
        alt='User Profile'
        referrerPolicy='no-referrer' />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]'
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`
}

function getImageSizeStyle(size: string): string {
  return size === 'small' ? 'w-[34px] h-[34px] p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]'
}