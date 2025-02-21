import { IsDate, IsNumber, IsOptional, IsPhoneNumber, Length, MaxLength } from "class-validator"

export class CreatePacienteDto {

    NombreCompleto: string 

    Identifcacion: string 

    @IsOptional()
    @MaxLength(20)
    nss?: string 

    @IsPhoneNumber()
    @IsOptional()
    phone_number?: string


    @IsNumber()
    SexoID : number 

    @IsDate()
    FechaNacimiento:Date

    @IsNumber()
    @IsOptional()
    GrupoSanguineoID?:number
    
    @IsNumber()
    @IsOptional()
    NacionaldadID?:number

    @IsNumber()
    @IsOptional()
    LugarNacimientoID?: number
    
      @IsNumber()
    @IsOptional()
    EstadoCivilID: number
    
    @IsNumber()
    @IsOptional()
    ArsID: number 

    @IsNumber()
    @IsOptional()
    Peso: number 
   
    @IsNumber()
    @IsOptional()
    DomicilioID: number

}
