import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm"

import { GrupoSanguineo } from "./gruposanguineo.entity"
import { Nacionalidad } from "./nacionalidad"
import { Factura } from "src/facturacion/entities/Factura.entity"
import { Ars } from "src/paciente/entities/Ars.entity"
import { EstadoCivil } from "./EstadoCivil"
import { Sexo } from "./sexo"
import { join } from "path"

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
    PhoneNumber: string


    @Column({type: 'int',
        nullable: false
    })
    SexoID : number 

    @Column({ type: 'datetime' ,
        nullable: false
    })
    FechaNacimiento : Date


    @Column({type: 'nvarchar', length: 150,
        nullable: true
    })

    Direccion: string

    @Column( {type: 'int' ,
        nullable: true
    })
    GrupoSanguineoID: number 

    @Column({type: 'int' ,
        nullable: false
    })
    NacionalidadID: number 


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




    
    @Column({ type: 'datetime', default: () => 'GETDATE()' })
    created_at: Date;  

    @ManyToOne(() => GrupoSanguineo, (grupoSanguineo) => grupoSanguineo.pacientes)
    @JoinColumn({ name: 'GrupoSanguineoID' })
    gruposanguineo: GrupoSanguineo;
    
    @ManyToOne(() => Sexo, (sexo) => sexo.pacientes)
    @JoinColumn({ name: 'SexoID' })
    sexo: Sexo;

    @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.pacientes)
    @JoinColumn({ name: 'NacionalidadID' })
    nacionalidad: Nacionalidad;
    
    @OneToMany(() => Factura, (factura) => factura.paciente)
    facturas: Factura[];

    @ManyToOne(() => Ars, (ars) => ars.patientes)
    @JoinColumn({ name: 'ArsID' })
    Ars: Ars;
    
    @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.pacientes)
    @JoinColumn({ name: 'EstadoCivilID' })
    EstadoCivil: EstadoCivil;
}
