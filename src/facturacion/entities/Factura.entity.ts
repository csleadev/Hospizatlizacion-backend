import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FacturacionDetalle } from "./FacturaDetalle.entity";


@Entity('Factura')
export class Factura {

    @PrimaryGeneratedColumn('increment')
    FacturaID: number;

    @Column({ type: 'datetime', default: () => 'GETDATE()', nullable: false})
    FechaFactura: Date

    @Column({type: 'varchar', length: 20,
        nullable: true
    })
    NoAutorizacion: string;

    @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
    TotalPrecioServicio: number;

    @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
    TotalMontoCobrado: number;

    @Column('decimal', { precision: 10, scale: 2,nullable:false }) 
    TotalMontoAutorizado: number;

    @Column('decimal', { precision: 10, scale: 2,nullable:true }) 
    TotalDescuento: number;

    @ManyToOne(() => Paciente, (paciente) => paciente.facturas, { onDelete: 'CASCADE' })
    paciente: Paciente;

    Estado: string;

    @OneToMany(() => FacturacionDetalle, (facturaDetalle) => facturaDetalle.factura, { cascade: true })
    FacturaDetalle: FacturacionDetalle[];

}


