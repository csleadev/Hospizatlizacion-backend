import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
import { Paciente } from './paciente.entity';

@Entity('Nacionalidad')

export class Nacionalidad {
    
    @PrimaryGeneratedColumn()
    NacionalidadID: number

    @Column()
    Nacionalidad: string

       @OneToMany(() => Paciente, (paciente) => paciente.nacionalidad)
       pacientes: Paciente[];

}
