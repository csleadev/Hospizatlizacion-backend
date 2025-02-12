import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Paciente } from './paciente.entity'

@Entity('Domilicio')

export class Domicilio {
    
    @PrimaryGeneratedColumn('increment')
    DomicilioId: number

    @Column({ type: 'nvarchar', length: 100 })
    Direccion: string 

    @Column({ type: 'int', nullable: false })
    paisID: number

    @Column({ type: 'int', nullable: false })
    ProvinciaID: number

    @Column({ type: 'int', nullable: false })
    CiudadID: number

    @Column({ type: 'int', nullable: false })
    pacienteID: number

    
  @OneToMany(() => Paciente, (paciente) => paciente.domicilio)
  pacientes: Paciente[];

}