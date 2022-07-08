import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCampeonatoF1Dto } from './dto/create-campeonatof1.dto';
import { UpdateCampeonatoF1Dto } from './dto/update-campeonatof1.dto';
import { CampeonatoF1Entity } from './entity/campeonatoF1.entity';

@Injectable()
export class CampeonatoService {
    constructor(
        @Inject('CAMPEONATOF1_REPOSITORY')
        private readonly campeonatoRepository: Repository<CampeonatoF1Entity>
    ) {}

    async campeonatoExists(id: number): Promise<CampeonatoF1Entity> {
        const campeonato = await this.campeonatoRepository.findOne({ where: { id, ativo: true } });
        if(!campeonato) throw new NotFoundException(`Campeonato with id ${id} not found`); 
        return campeonato;
    }

    async createCampeonatoF1(createCampeonatoF1Dto: CreateCampeonatoF1Dto): Promise<CampeonatoF1Entity> {
        return await this.campeonatoRepository.save(createCampeonatoF1Dto);
    }

    async findAll(): Promise<CampeonatoF1Entity[]> {
        return await this.campeonatoRepository.find({
            where: { ativo: true },
        });
    }

    async findOne(id: number): Promise<CampeonatoF1Entity> {
        return await this.campeonatoExists(id);
    }

    async updateCampeonatoF1(id: number, updateCampeonatoF1Dto: UpdateCampeonatoF1Dto): Promise<CampeonatoF1Entity> {
        if(this.campeonatoExists(id)){
            const campeonato = await this.campeonatoExists(id);
            campeonato.titulo = updateCampeonatoF1Dto.titulo;
            campeonato.descricao = updateCampeonatoF1Dto.descricao;
            campeonato.icone = updateCampeonatoF1Dto.icone;
            campeonato.temporada = updateCampeonatoF1Dto.temporada;
            return await this.campeonatoRepository.save(campeonato);
        }
    }

    async deleteCampeonatoF1(id: number): Promise<CampeonatoF1Entity> {
        const campeonato = await this.campeonatoExists(id)
        campeonato.ativo = false;
        return await this.campeonatoRepository.save(campeonato);
    }

}
