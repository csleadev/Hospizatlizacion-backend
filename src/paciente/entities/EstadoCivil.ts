import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Paciente } from "./paciente.entity";


@Entity('EstadoCivil')
export class EstadoCivil {
    @PrimaryGeneratedColumn('increment')    
    EstadoCivilID: number

    @Column({type: 'nvarchar', length: 20})
    EstadoCivil: string

    @OneToMany(() => Paciente, (paciente) => paciente.EstadoCivil)
          pacientes: Paciente[];
}