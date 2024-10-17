import { FC } from 'react'
import { Table } from 'antd'

import { IUser } from '@/interfaces/user'
import { columns } from './CustomTable.types'

interface ICustomTable {
  data: IUser[] | undefined,
  isLoading: boolean
}

const CustomTable: FC<ICustomTable> = ({ data, isLoading }) => {
  return (
    <Table bordered loading={isLoading} columns={columns} dataSource={data} className='w-full' scroll={{x: true}}/>
  )
}

export default CustomTable