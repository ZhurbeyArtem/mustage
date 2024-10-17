'use client';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import CustomTable from './table/CustomTable';
import { IUser } from '@/interfaces/user';
import axios from 'axios';

const { Search } = Input;

const AdminComponent = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUser[]>([])
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}users/getAll`)
      const usersWithKey = data.map((user: IUser) => { return { ...user, key: user.id } })
      setIsLoading(false)
      setUsers(usersWithKey)
      setFilteredUsers(usersWithKey)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    if (search === '') setFilteredUsers(users);
    else {
      const result = users.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name && user.last_name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredUsers(result)
    }
  }, [search])

  return (
    <div className='max-w-[375px] w-full lg:max-w-[680px]'>
      <Search placeholder="input search text" onChange={(e) => setSearch(e.target.value)} className='mb-3' />
      <CustomTable isLoading={isLoading} data={filteredUsers} />
    </div>
  )
}

export default AdminComponent