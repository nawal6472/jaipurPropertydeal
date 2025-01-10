import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Landmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  property_id: number;

  @Column()
  landmark_name: string;

  @Column()
  type_landmark: string;

  @Column()
  many_landmark: string;

  @Column({ default: true })
  status: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
