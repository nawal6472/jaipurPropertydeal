import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  
  @Column()
  landmark_id: number;

  @Column()
  more_img_id: number;

  @Column()
  amenities_id: number;

  @Column()
  property_near_by_id: number; 

  @Column()
  name: string;

  @Column()
  locality: string;

  @Column()
  full_address: string;

  @Column()
  price: number;

  @Column()
  bhk: string;

  @Column()
  num_washroom: string;

  @Column()
  num_bathroom: string;

  @Column()
  num_storge: string;

  @Column()
  developer_name: string;

  @Column()
  pro_facing: string;

  @Column()
  pro_summary: string;

  @Column()
  built_up_area: string;

  @Column()
  carpet_area: string;

  @Column()
  super_built_up_area: string;

  @Column()
  total_floor: string;

  @Column()
  road_width: string;

  @Column()
  corner_plot: string;

  @Column()
  floor_plan: string;

  @Column()
  pro_brochures: string;

  @Column()
  pro_video: string;

  @Column({ default: true })
  type_patta: boolean;

  @Column({ default: true })
  furnished: boolean;

  @Column()
  slug: string;

  @Column({ default: true })
  status: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
