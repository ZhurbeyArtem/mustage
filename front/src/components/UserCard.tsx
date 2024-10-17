"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UserCard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '')
  console.log(user);

  return (
    <div className='max-w-[320px] w-full border-gray-100 border-2 rounded-md p-3 flex flex-col items-center gap-2 '>
      {user.photo.length > 0 ? <Image src={user.photo} width={160} height={160} alt={'user photo'} className='rounded-full' /> : <p className='rounded-full w-[160px] h-[160px] bg-blue-300 text-center flex justify-center items-center text-[40px]'>{user.first_name[0]}</p>}
      <h3>{user.first_name} {user.last_name}</h3>
      <p>Телеграм ід: {user.telegram_id}</p>
      <p>Нікнейм: @{user.username}</p>
      <p>Мова додатку: {user.language_code}</p>
      {user.phoneNumber && <p>Номер телефону: {user.phoneNumber}</p>}
      <Link href={'/admin'} className='p-2 bg-blue-400 rounded-lg'>Адмін панель</Link>
    </div>
  )
}

export default UserCard