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

    @ManyToOne(() => Paciente, (paciente) => paciente.facturas, { onDelete: 'CASCADE' })
    paciente: Paciente;

    @OneToMany(() => FacturacionDetalle, (facturaDetalle) => facturaDetalle.factura, { cascade: true })
    FacturaDetalle: FacturacionDetalle[];

}


