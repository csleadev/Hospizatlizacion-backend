import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrecioServicio } from "./ServicioPrecios.entity";


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
}