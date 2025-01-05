import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Amenity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  property_id: number;

  @Column()
  amenity_name: string;

  @Column()
  amenity_image: string;

  @Column({ default: true })
  status: boolean;
}
