import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tireNumber: number;

    @Column()
    engine: string;

    @Column()
    vehicleType: string;
}


