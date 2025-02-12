import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('Medico')

export class Medico {
    
    @PrimaryGeneratedColumn('increment')
    MedicoID: number

    @Column({ type: 'nvarchar', length: 50 })
    NombreMedico: string

    @Column({ type: 'int', nullable:false})
    EspecialidadID: number
}
