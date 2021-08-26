import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity('automobile')
export class Automobile extends Vehicle {
    
}