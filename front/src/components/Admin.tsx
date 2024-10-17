'use client';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import CustomTable from './table/CustomTable';
import { IUser } from '@/interfaces/user';

const { Search } = Input;

const AdminComponent = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUser[]>([])
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const query = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}users/getAll`)
      console.log(query);
      
      const result = await query.json()
      const usersWithKey = result.map((user: IUser) => { return { ...user, key: user.id } })
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
        user.last_name.toLowerCase().includes(search.toLowerCase())
      )
      console.log(result);

      setFilteredUsers(result)
    }
  }, [search])

  return (
    <div>
      <Search placeholder="input search text" onChange={(e) => setSearch(e.target.value)} className='mb-3 max-w-screen w-[80%]' />
      <CustomTable isLoading={isLoading} data={filteredUsers} />
    </div>
  )
}

export default AdminComponent