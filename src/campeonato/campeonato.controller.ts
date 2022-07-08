import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CreateCampeonatoF1Dto } from './dto/create-campeonatof1.dto';
import { UpdateCampeonatoF1Dto } from './dto/update-campeonatof1.dto';
import { CampeonatoF1Entity } from './entity/campeonatoF1.entity';

@Controller('f1/campeonato')
export class CampeonatoController {

    constructor(private readonly campeonatoService: CampeonatoService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createCampeonatoF1(
        @Body() createCampeonatoF1Dto: CreateCampeonatoF1Dto
    ): Promise<CampeonatoF1Entity> {
        return this.campeonatoService.createCampeonatoF1(createCampeonatoF1Dto);
    }

    @Get()
    @UsePipes(new ValidationPipe())
    findAll(): Promise<CampeonatoF1Entity[]> {
        return this.campeonatoService.findAll();
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    findOne(
        @Param('id') id: number
    ): Promise<CampeonatoF1Entity> {
        return this.campeonatoService.findOne(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateCampeonatoF1(
        @Param('id') id: number,
        @Body() updateCampeonatoF1Dto: UpdateCampeonatoF1Dto
    ): Promise<CampeonatoF1Entity> {
        return this.campeonatoService.updateCampeonatoF1(id, updateCampeonatoF1Dto);
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe())
    deleteCampeonatoF1(
        @Param('id') id: number
    ): Promise<CampeonatoF1Entity> {
        return this.campeonatoService.deleteCampeonatoF1(id);
    }
}
