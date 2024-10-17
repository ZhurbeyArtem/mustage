import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  telegram_id: string;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar', nullable: true })
  last_name?: string;

  @Column({ type: 'varchar', nullable: true })
  phoneNumber?: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  language_code: string;

  @Column({ type: 'varchar' })
  photo: string;
}
