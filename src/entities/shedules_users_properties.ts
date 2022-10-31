import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";

import { User } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "time", nullable: false })
  hour: Date;

  @ManyToOne(() => Properties, (propertie) => propertie.schedule)
  propertyId: Properties;

  @ManyToOne(() => User, (user) => user.schedule, { eager: true })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
