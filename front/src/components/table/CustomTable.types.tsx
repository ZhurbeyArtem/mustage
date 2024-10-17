import { TableColumnsType } from "antd";
import { IUser } from "@/interfaces/user";

export const columns: TableColumnsType<IUser> = [
  {
    title: 'Телеграм ід',
    dataIndex: 'telegram_id',
    width: 150, 
  },
  {
    title: 'Ім\'я',
    dataIndex: 'first_name',
    width: 150,
  },
  {
    title: 'Прізвище',
    dataIndex: 'last_name',
    width: 150,
  },
  {
    title: 'Номер телефону',
    dataIndex: 'phoneNumber',
    width: 150,
  },
  {
    title: 'Нік',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: 'Мова',
    dataIndex: 'language_code',
    width: 150,
  },
];