import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFacturacionDto {


    @IsDate()
    FechaFactura:Date;

    @IsString()
    @IsOptional()
    NoAutorizacion?:string;

    @IsNumber()
    PacienteID:number

    @IsNumber()
    TotalPrecioServicio:number;

    @IsNumber()
    TotalMontoCobrado:number;

    @IsNumber()
    TotalMontoAutorizado:number;

    @IsNumber()
    @IsOptional()
    TotalDescuento?:number;

    

}
