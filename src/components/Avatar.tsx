import React from 'react';
type Props = {
  image?: string | null
  size?: 'small' | 'normal' | 'large' | 'xlarge'
  highlight?: boolean
}
export default function Avatar({ image, size = 'large', highlight = false }: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
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
  let sizeStyle;
  switch (size) {
    case 'small':
      sizeStyle = 'w-9 h-9'
      break
    case 'normal':
      sizeStyle = 'w-[48px] h-[48px]'
      break
    case 'large':
      sizeStyle = 'w-[68px] h-[68px]'
      break
    case 'xlarge':
      sizeStyle = 'w-[120px] h-[120px]'
      break
    default:
      sizeStyle = ''
      break
  }
  // const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]'
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`
}

function getImageSizeStyle(size: string): string {
  switch (size) {
    case 'small':
      return 'w-[34px] h-[34px] p-[0.1rem]'
    case 'normal':
      return 'w-[44px] h-[44px] p-[0.15rem]'
    case 'large':
      return 'w-16 h-16 p-[0.2rem]'
    case 'xlarge':
      return 'w-[116px] h-[116px] p-[0.25rem]'
    default:
      return ''
  }
}