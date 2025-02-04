import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Paciente } from './paciente.entity'

@Entity()

export class Domicilio {
    
    @PrimaryGeneratedColumn()
    DomicilioId: number

    @Column()
    Direccion: string 

    @Column()
    paisID: number

    @Column()
    ProvinciaID: number

    @Column()
    CiudadID: number

    @Column()
    pacienteID: number

    @OneToMany(() => Paciente, (paciente) => paciente.DomicilioID)
    pacientes: Paciente[];

}