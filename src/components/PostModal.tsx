import React from 'react';
import CloseIcon from './ui/icons/CloseIcon';
type Props = {
  children: React.ReactNode;
  onClose: () => void
}
export default function PostModal({ onClose, children }: Props) {
  return (
    <section className='flex flex-col items-center justify-center w-full h-full fixed top-0 left-0 bg-neutral-900/70 z-50'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}>
      <button className='fixed top-0 right-0 p-8 text-white' onClick={() => onClose()}><CloseIcon /></button>
      {children}
    </section>
  );
}

