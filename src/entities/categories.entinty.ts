import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Properties } from "./properties.entity";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60, unique: true, nullable: false })
  name: string;

  @OneToMany(() => Properties, (properties) => properties.categoryId, {
    eager: true,
  })
  properties: Properties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
