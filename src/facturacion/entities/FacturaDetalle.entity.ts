import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Factura } from "./Factura.entity";


@Entity('FacturaDetalle')
export class FacturacionDetalle {

    @PrimaryGeneratedColumn('increment')
        FacturaDetalleID: number;
    
        @Column({type: 'int',
            nullable: false
        })
        servicioID: number;

        
        @Column({type: 'int',
            nullable: false
        })
        Cantidad: number;

        @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
        PrecioServicio: number;

        @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
        MontoCobrado: number;

        @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
        MontoAutorizado: number;

        @Column({type: 'int',
            nullable: true
        })
        Descuento: number;
    
        
        @ManyToOne(() => Factura, (factura) => factura.FacturaDetalle, { onDelete: 'CASCADE' })
        factura: Factura;

}