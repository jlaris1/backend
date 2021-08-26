import { Controller, Post, UseGuards, Request, Delete, Get, Param, Body} from "@nestjs/common";
import { AutomobileDto } from "src/dtos/automobile.dto";
import { AutomobileService } from "./automobile.service";

@Controller('automobile')
export class AutomobileController {
    constructor( private automobileService: AutomobileService){}

    @Get()
    async getAll(){
        return await this.automobileService.findAll();
    }

    @Get('/:id')
    async getOne(@Param('id') id: string){
        return await this.automobileService.findOne(id);
    }

    @Post('/save')
    async save(@Body() auto: AutomobileDto){
        return await this.automobileService.save(auto);
    }

    @Delete('/delete')
    delete( @Param('id') id: string){
        this.automobileService.remove(id);
    }
}