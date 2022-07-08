import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('campeonato_f1')
export class CampeonatoF1Entity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    descricao: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    icone: string;

    @Column()
    temporada: number;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    data_cricao: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    data_atualizacao: string;

    @Column({
        type: 'tinyint',
        default: 1,
    })
    ativo: boolean;

}

