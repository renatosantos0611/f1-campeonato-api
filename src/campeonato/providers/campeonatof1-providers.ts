import { DataSource } from "typeorm";
import { CampeonatoF1Entity } from "../entity/campeonatoF1.entity";

export const CampeonatoF1Provider = {
    provide: 'CAMPEONATOF1_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CampeonatoF1Entity),
    inject: ['DATA_SOURCE'],
}