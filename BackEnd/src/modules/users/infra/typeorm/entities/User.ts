import Deliver from '@modules/delivers/infra/typeorm/entities/Deliver';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: number;

  @Column()
  deliveryman: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Deliver, deliver => deliver.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'deliveryman_id' })
  deliveries: Deliver[];
}

export default User;
