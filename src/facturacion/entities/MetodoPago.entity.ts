import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('MetodoPago')
export class MetodoPago {

     @PrimaryGeneratedColumn('increment')
            MetodoPagoID: number;
        
     
    @Column({type: 'varchar', length: 20,
             nullable: true
        })
            MetodoPago: string 
           
}