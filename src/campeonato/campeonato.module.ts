import { Module } from '@nestjs/common';
import { CampeonatoController } from './campeonato.controller';
import { CampeonatoService } from './campeonato.service';
import { DatabaseModule } from 'src/database/database.module';
import { CampeonatoF1Provider } from './providers/campeonatof1-providers';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [CampeonatoController],
    providers: [
        CampeonatoF1Provider,
        CampeonatoService
    ]
})
export class CampeonatoModule {}
