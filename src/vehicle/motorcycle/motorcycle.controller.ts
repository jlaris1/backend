import { Controller, Post, UseGuards, Request, Delete, Get, Param, Body} from "@nestjs/common";
import { MotorcycleDto } from "src/dtos/motorcycle.dto";
import { MotorcycleService } from "./motorcycle.service";

@Controller('motorcycle')
export class MotorcycleController {
    constructor( private motorcycleService: MotorcycleService){}

    @Get()
    async getAll(){
        return await this.motorcycleService.findAll();
    }

    @Get('/:id')
    async getOne(@Param('id') id: string){
        return await this.motorcycleService.findOne(id);
    }

    @Post('/save')
    async save(@Body() moto: MotorcycleDto){
        return await this.motorcycleService.save(moto);
    }

    @Delete('/delete')
    delete( @Param('id') id: string){
        this.motorcycleService.remove(id);
    }
}