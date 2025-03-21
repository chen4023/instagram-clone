import React from 'react';
type AvatarSize = 'small' | 'normal' | 'large' | 'xlarge'
type Props = {
  image?: string | null
  size?: AvatarSize
  highlight?: boolean
}
type ImageSizeStyle = {
  container: string;
  image: string
}

export default function Avatar({ image, size = 'large', highlight = false }: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img className={`rounded-full object-cover bg-white p-2 ${getImageSizeStyle(size).image}`}
        src={image ?? undefined}
        alt='User Profile'
        referrerPolicy='no-referrer' />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
  const { container } = getImageSizeStyle(size)
  return `${baseStyle} ${highlightStyle} ${container}`
}

function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  switch (size) {
    case 'small':
      return { container: 'w-9 h-9', image: 'w-[34px] h-[34px] p-[0.1rem]' }
    case 'normal':
      return { container: 'w-[48px] h-[48px]', image: 'w-[44px] h-[44px] p-[0.15rem]' }
    case 'large':
      return { container: 'w-[68px] h-[68px]', image: 'w-16 h-16 p-[0.2rem]' }
    case 'xlarge':
      return { container: 'w-[142px] h-[142px]', image: 'w-[138px] h-[138px] p-[0.3rem]' }
    default:
      throw new Error(`Unsupported type size : ${size}`)
  }
}