import { PartialType } from "@nestjs/mapped-types";
import { CreateGrupoSanguineoDto } from "./create-gruposanguineo.dto";


export class UpdateGrupoSanguineoDto extends PartialType(CreateGrupoSanguineoDto){
}