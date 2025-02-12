import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrecioServicio } from "./ServicioPrecios.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";


@Entity('Ars')
export class Ars {
     @PrimaryGeneratedColumn('increment')
                ArsID: number;
           
    @Column({type: 'varchar',length:150,
        nullable: false
             })
        ArsDescripcion: string;    


        @OneToMany(() => PrecioServicio, (PrecioServicio) => PrecioServicio.Ars)
        PrecioServicio: PrecioServicio[];

        @OneToMany(() => Paciente, (paciente) => paciente.ArsID)
        patientes: Paciente[];
}