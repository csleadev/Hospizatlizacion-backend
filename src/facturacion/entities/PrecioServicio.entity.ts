import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Servicio } from "./Servicio.entity";
import { Ars } from "../../paciente/entities/Ars.entity";


@Entity('PrecioServicio')
export class PrecioServicio {

    
    @PrimaryGeneratedColumn('increment')
     PrecioServicioID: number;

     @ManyToOne(() => Servicio, (servicio) => servicio.ServicioPrecio, { onDelete: 'CASCADE' })
     Servicio: Servicio;

    @ManyToOne(() => Ars, (ars) => ars.PrecioServicio, { onDelete: 'CASCADE' })
    Ars: Ars;

    @Column('decimal', { precision: 10, scale: 2 }) 
    Precio: number;

}