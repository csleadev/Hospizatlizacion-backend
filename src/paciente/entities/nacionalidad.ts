import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Paciente } from './paciente.entity';

@Entity()

export class Nacionalidad {
    
    @PrimaryGeneratedColumn()
    NacionalidadID: number

    @Column()
    Nacionalidad: string

    @OneToOne(() => Paciente, (paciente) => paciente.NacionaldadID)
    pacientes: Paciente[];

}
