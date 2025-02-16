'use client'
import React from 'react';
import useSWR from 'swr';
import { PulseLoader } from 'react-spinners'

export default function FollowingBar() {
  const { data, error, isLoading } = useSWR('api/auth/token')
  if (isLoading) {
    <div>
      <PulseLoader />
      <p>로딩중입니다.</p>
    </div>
  }
  if (error) {
    <div>error</div>
  }
  console.log(data)
  return (
    <p>
      FollowingBar
    </p>
  );
}

