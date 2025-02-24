import { IsDate, IsDateString, IsNumber, IsOptional, IsPhoneNumber, IsString, Length, MaxLength, MinLength } from "class-validator"

export class CreatePacienteDto {

    @IsString()
    @MinLength(5)
    @MaxLength(150)
    NombreCompleto: string 

    @IsString()
    @MinLength(5)
    Identificacion: string 

    @IsOptional()
    @MaxLength(20)
    Nss?: string 

   
    @IsOptional()
    PhoneNumber?: string


    @IsNumber()
    SexoID: number 

    @IsDateString()
    FechaNacimiento:Date

    @IsNumber()
    @IsOptional()
    GrupoSanguineoID?:number
    
    @IsNumber()
    @IsOptional()
    NacionalidadID?:number

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
   
    @IsString()
    @IsOptional()
    Direccion?: string

}
