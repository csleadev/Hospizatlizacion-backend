import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm"
import { Domicilio } from "./domicilio.entity"
import { GrupoSanguineo } from "./gruposanguineo.entity"
import { Nacionalidad } from "./nacionalidad"
import { Factura } from "src/facturacion/entities/Factura.entity"
import { Ars } from "src/facturacion/entities/Ars.entity"

@Entity('Paciente')

export class Paciente {
    
    @PrimaryGeneratedColumn('increment')
    PacienteID : number

    @Column({type: 'nvarchar', length: 150,
        nullable: false
    })
    NombreCompleto: string 


    @Column({type: 'nvarchar', length: 15,
        nullable: false
    })
    Identificacion: string 

    @Column({type: 'nvarchar', length: 20,
        nullable: true
    })
    nss: string 

    @Column({type: 'varchar', length: 20,
        nullable: true
    })
    phone_number: string


    @Column({type: 'int',
        nullable: false
    })
    Sexo : number 

    @Column({ type: 'datetime' ,
        nullable: false
    })
    FechaNacimiento : Date

    @Column( {type: 'int' ,
        nullable: true
    })
    GrupoSanguineoID: number 

    @Column({type: 'int' ,
        nullable: false
    })
    NacionaldadID: number 

    @Column({ type: 'int' ,
        nullable: false
    })
    LugarNacimientoID: number 

    @Column({ type: 'int' ,
        nullable: false
    })
    ArsID: number 

    @Column({ type: 'decimal' ,
        nullable: true
    })
    Peso: number 

    @Column({
        type: 'int' ,
        nullable: false
    })
    EstadoCivilID: number

    @Column({
        type: 'int' ,
        nullable: false
    })
    DomicilioID: number


    
    @Column({ type: 'datetime', default: () => 'GETDATE()' })
    created_at: Date;


    @ManyToOne(() => Domicilio, (dominicio) => dominicio.pacientes)
    domicilio: Domicilio;
  

    @ManyToOne(() => GrupoSanguineo, (grupoSanguineo) => grupoSanguineo.pacientes)
    gruposanguineo: GrupoSanguineo;

    @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.pacientes)
    nacionalidad: Nacionalidad;
    
    @OneToMany(() => Factura, (factura) => factura.paciente)
    facturas: Factura[];

    @ManyToOne(() => Ars, (ars) => ars.patientes, { onDelete: 'SET NULL' })
    Ars: Ars;
    
}
