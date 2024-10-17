'use client';
import { LoginButton } from '@telegram-auth/react';
import axios from 'axios';
import React from 'react'

interface TelegramBtnProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const TelegramBtn: React.FC<TelegramBtnProps> = ({ setAuth }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAuth = async (data: any) => {
    const query = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}users/create`, data)
    console.log(query);
    
    localStorage.setItem('user', JSON.stringify(result))
    localStorage.setItem('isAuth', JSON.stringify(true))
    setAuth(true)
  }

  return (
    <div className='bg-red'>
      <LoginButton
        botUsername='mustage_test_task_bot'
        onAuthCallback={(data) =>
          handleAuth(data)
        }

        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
      />
    </div>
  )
}

export default TelegramBtn