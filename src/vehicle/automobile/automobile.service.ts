import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AutomobileDto } from "src/dtos/automobile.dto";
import { Automobile } from "src/entities/automobile.entity";
import { Repository } from "typeorm";

@Injectable()
export class AutomobileService {
    constructor(
        @InjectRepository(Automobile)
        private automobileRepository: Repository<Automobile>
    ){}

    save(auto: AutomobileDto): Promise<Automobile> {
        return this.automobileRepository.save(auto);
    }

    findAll(): Promise<Automobile[]> {
        return this.automobileRepository.find();
    }

    findOne(id: string): Promise<Automobile> {
        return this.automobileRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.automobileRepository.delete(id);
    }
}