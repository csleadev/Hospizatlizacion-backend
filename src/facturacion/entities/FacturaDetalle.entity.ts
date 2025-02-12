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

        @Column({type: 'int',
            nullable: false
        })
        Precio: number;

        @Column({type: 'int',
            nullable: true
        })
        Descuento: number;
    
        
        @Column({type: 'int',
            nullable: false
        })
        DiferenciaCobertura: number;

        
        @ManyToOne(() => Factura, (factura) => factura.FacturaDetalle, { onDelete: 'CASCADE' })
        factura: Factura;




}