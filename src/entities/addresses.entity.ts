import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { v4 as uuid } from "uuid";
@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100, nullable: false })
  district: string;

  @Column({ length: 15, nullable: false })
  zipCode: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 25, nullable: false })
  city: string;

  @Column({ length: 2, nullable: false })
  state: string;
}
