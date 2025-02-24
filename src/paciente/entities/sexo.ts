import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Paciente } from "./paciente.entity";

@Entity('Sexo')
export class Sexo {
    @PrimaryGeneratedColumn('increment')
    SexoID: number
    @Column({type: 'nvarchar', length: 20})
    Sexo: string

    @OneToMany(() => Paciente, (paciente) => paciente.sexo)
     pacientes: Paciente[];
}