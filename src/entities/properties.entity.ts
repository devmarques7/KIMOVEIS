import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Address } from "./addresses.entity";
import { Categories } from "./categories.entinty";
import { Schedule } from "./shedules_users_properties";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, nullable: false })
  value: number;

  @Column({ type: "integer", nullable: false })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, {
    eager: true,
  })
  @JoinColumn()
  addressId: Address;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  categoryId: Categories;

  @OneToMany(() => Schedule, (schedule) => schedule.propertyId, {
    eager: true,
  })
  schedule: Schedule[];
}
