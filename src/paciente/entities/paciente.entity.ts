import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()

export class Paciente {
    
    @PrimaryGeneratedColumn('increment')
    pacienteID : number

    @Column("text",{
        nullable: false
    })
    NombreCompleto: string 


    @Column("text",{
        nullable: false
    })
    Identifcacion: string 

    @Column("text",{
        nullable: true
    })
    nss: string 

    @Column({
        nullable: false
    })
    phone_number: number


    @Column("text",{
        nullable: false
    })
    sexo : string 

    @Column({
        nullable: false
    })
    FechaNacimiento : Date

    @Column({
        nullable: true
    })
    GrupoSanguineoID: number 

    @Column({
        nullable: false
    })
    NacionaldadID: number 

    @Column({
        nullable: false
    })
    LugarNacimientoID: number 

    @Column({
        nullable: false
    })
    ArsID: number 

    @Column({
        nullable: true
    })
    Peso: number 

    @Column({
        nullable: true
    })
    EstadoCivilID: number

    @Column({
        nullable: true
    })
    DomicilioID: number
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

}
