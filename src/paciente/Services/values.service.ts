import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GrupoSanguineo } from '../entities/gruposanguineo.entity';
import { DataSource, Repository } from 'typeorm';
import { EstadoCivil } from '../entities/EstadoCivil';
import { Nacionalidad } from '../entities/nacionalidad';
import { Sexo } from '../entities/sexo';
import { Ars } from 'src/paciente/entities/Ars.entity';

@Injectable()
export class ValuesService {

    constructor(

      

        @InjectRepository(GrupoSanguineo)
            private readonly grupoSanguineoRepository : Repository<GrupoSanguineo>,

        @InjectRepository(EstadoCivil)
        private readonly estadoCivilRepository : Repository<EstadoCivil>,
            
        @InjectRepository(Nacionalidad)
        private readonly nacionalidadRepository : Repository<Nacionalidad>,
         
        @InjectRepository(Sexo)
        private readonly sexoRepository : Repository<Sexo>,

        @InjectRepository(Ars)
        private readonly arsRepository : Repository<Ars>,
         
    ){}

    async findGrupoSanguineo(){

    const grupoSanguineo = await this.grupoSanguineoRepository.find();
    return grupoSanguineo;
    }

    async findEstadoCivil(){
        const estadoCivil = await this.estadoCivilRepository.find();
        return estadoCivil;
    }

    async findNacionalidad(){
        const nacionalida = await this.nacionalidadRepository.find();
        return nacionalida;
    }
    async findSexo(){
        const sexo = await this.sexoRepository.find();
        return sexo;
    }

    async findArs(){
        const ars = await this.arsRepository.find();
        return ars;
    }

 
}
