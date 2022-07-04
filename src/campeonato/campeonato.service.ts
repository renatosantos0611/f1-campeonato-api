import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCampeonatoF1Dto } from './dto/create-campeonatof1.dto';
import { CampeonatoF1Entity } from './entity/campeonatoF1.entity';

@Injectable()
export class CampeonatoService {
    constructor(
        @Inject('CAMPEONATOF1_REPOSITORY')
        private readonly campeonatoRepository: Repository<CampeonatoF1Entity>
    ) {}

    async createCampeonatoF1(createCampeonatoF1Dto: CreateCampeonatoF1Dto): Promise<CampeonatoF1Entity> {
        return await this.campeonatoRepository.save(createCampeonatoF1Dto);
    }

    async findAll(): Promise<CampeonatoF1Entity[]> {
        return await this.campeonatoRepository.find();
    }

}
