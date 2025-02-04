import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()

export class Medico {
    
    @PrimaryGeneratedColumn()
    MedicoID: number

    @Column()
    NombreMedico: string

    @Column()
    EspecialidadID: number
}
