import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CreateCampeonatoF1Dto } from './dto/create-campeonatof1.dto';
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
}
