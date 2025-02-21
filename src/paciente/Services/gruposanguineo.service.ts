import { Injectable } from '@nestjs/common';
import { CreateGrupoSanguineoDto } from '../dto/create-gruposanguineo.dto';
import { UpdateGrupoSanguineoDto } from '../dto/update-gruposanguineo.dto';
import { Repository } from 'typeorm';
import { GrupoSanguineo } from '../entities/gruposanguineo.entity';

@Injectable()
export class GruposanguineoService {

    constructor (
        private readonly grupoSanguineoReporsitory: Repository<GrupoSanguineo>
    ){

    }

    async create(createPacienteDto: CreateGrupoSanguineoDto){

        try {
            
        } catch (error) {
            
        }

    }
    findAll(){

    }

    findOne(id: number){

    }

    update(id: number, updateGrupoSanguineo: UpdateGrupoSanguineoDto){

    }
}
