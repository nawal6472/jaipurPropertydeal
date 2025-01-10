import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoreImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  property_id: number;

  @Column()
  img_name: string;

  @Column()
  image: string;

  @Column({ default: true })
  status: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
