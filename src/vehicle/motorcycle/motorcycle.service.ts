import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MotorcycleDto } from "src/dtos/motorcycle.dto";
import { Motorcycle } from "src/entities/motorcyle.entity";
import { Repository } from "typeorm";

@Injectable()
export class MotorcycleService {
    constructor(
        @InjectRepository(Motorcycle)
        private motorcycleRepository: Repository<Motorcycle>
    ){}

    save(auto: MotorcycleDto): Promise<Motorcycle> {
        return this.motorcycleRepository.save(auto);
    }

    findAll(): Promise<Motorcycle[]> {
        return this.motorcycleRepository.find();
    }

    findOne(id: string): Promise<Motorcycle> {
        return this.motorcycleRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.motorcycleRepository.delete(id);
    }
}