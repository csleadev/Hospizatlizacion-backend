import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrecioServicio } from "./PrecioServicio.entity";
import { GrupoServicio } from "./GrupoServicio.entity";


@Entity('Servicio')
export class Servicio {

       @PrimaryGeneratedColumn('increment')
            ServicioID: number;

         @Column({type: 'int',
                   nullable: false
               })
               CodigoSimon: number;     

        @Column({type: 'varchar',length:150,
                nullable: false
            })
        Descripcion: string; 
        
        @Column({type: 'int',
            nullable: false
        })
        GrupoID: number;    


        @OneToMany(() => PrecioServicio, (servicioPrecio) => servicioPrecio.Servicio)
        ServicioPrecio: PrecioServicio[];

        @ManyToOne(() => GrupoServicio, (grupoServicio) => grupoServicio.servicio)
        GrupoServicio: GrupoServicio;
}