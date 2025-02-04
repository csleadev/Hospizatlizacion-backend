import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Paciente } from './paciente.entity';

@Entity()

export class GrupoSanguineo {
    
    @PrimaryGeneratedColumn()
    GrupoSanguineoID: number

    @Column()
    GrupoSanguineo: string

    @OneToOne(() => Paciente, (paciente) => paciente.GrupoSanguineoID)
    pacientes: Paciente[];

}