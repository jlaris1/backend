import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AutomobileService } from '../vehicle/automobile/automobile.service';
import { Automobile } from '../entities/automobile.entity';
import { Motorcycle } from '../entities/motorcyle.entity';
import { AutomobileController } from './automobile/automobile.controller';
import { MotorcycleController } from './motorcycle/motorcycle.controller';
import { MotorcycleService } from './motorcycle/motorcycle.service';


@Module({
    imports:[ TypeOrmModule.forFeature([Automobile, Motorcycle])],
    providers: [AutomobileService, MotorcycleService],
    controllers: [AutomobileController, MotorcycleController],
    exports: [
       AutomobileService,
       MotorcycleService 
    ]
})

export class VehicleModule {}