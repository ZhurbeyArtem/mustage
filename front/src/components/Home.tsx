"use client";
import React, { Suspense, useEffect, useState } from 'react'
import UserCard from './UserCard';
import TelegramBtn from './TelegramBtn';
import { useSearchParams } from 'next/navigation';


const HomeComponent = () => {
  const [isAuth, setIsAuth] = useState(false)
  const searchParams = useSearchParams()
  const user = {}
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('isAuth');
      if (storedAuth) {
        setIsAuth(JSON.parse(storedAuth));
      }
    }

    if (searchParams.get('telegram_id') != null) {
      searchParams.forEach((value, key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        user[key] = value;
      });
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isAuth', JSON.stringify(true))
      setIsAuth(true)
    }
  }, [])


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {
          isAuth
            ? <UserCard />
            : <TelegramBtn setAuth={setIsAuth} />
        }
      </div >
    </Suspense>

  )
}

export default HomeComponent