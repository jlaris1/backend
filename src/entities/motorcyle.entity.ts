import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity('motorcycle')
export class Motorcycle extends Vehicle {
    
}