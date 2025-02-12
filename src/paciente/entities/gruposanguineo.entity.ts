import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
import { Paciente } from './paciente.entity';

@Entity('GrupoSanguineo')

export class GrupoSanguineo {
    
    @PrimaryGeneratedColumn('increment')
    GrupoSanguineoID: number

    @Column({ type: 'nvarchar', length: 20 })
    GrupoSanguineo: string

    
      @OneToMany(() => Paciente, (paciente) => paciente.gruposanguineo)
      pacientes: Paciente[];

}