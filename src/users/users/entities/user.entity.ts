import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  email_otp: string;

  @Column()
  phone_otp: string;

  @Column()
  developer_name: string;

  @Column()
  company_name: string;

  @Column()
  address: string;

  @Column({ unique: true })
  gst_number: string;

  @Column({ unique: true })
  pen_card: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  Director: string;

  @Column()
  logo: string;

  @Column()
  visiting_time: string;

  @Column()
  status: boolean;

  @Column()
  cratedAt: Date;

  @Column()
  updatedAt: Date;
}
