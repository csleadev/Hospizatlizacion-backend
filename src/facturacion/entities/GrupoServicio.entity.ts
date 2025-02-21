import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Servicio } from "./Servicio.entity";

@Entity('GrupoServicio')
export class GrupoServicio {

    @PrimaryGeneratedColumn('increment')
        GrupoID: number;

     @Column({type: 'varchar',length:150,
            nullable: false
        })
        Descripcion: string;

      @OneToMany(() => Servicio, (servicio) => servicio.GrupoServicio)
           servicio: Servicio[];
     
}   