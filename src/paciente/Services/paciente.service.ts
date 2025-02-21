import { Injectable, Logger } from '@nestjs/common';
import { CreatePacienteDto } from '../dto/create-paciente.dto';
import { UpdatePacienteDto } from '../dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from '../entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {

  private readonly logger = new Logger('PacienteService')


  constructor (
    @InjectRepository(Paciente)
    private readonly pacienteReporsitory : Repository<Paciente>

  ){}

  async create(createPacienteDto: CreatePacienteDto) {
    
    try {
    
    const paciente =  this.pacienteReporsitory.create(createPacienteDto)
      
    await this.pacienteReporsitory.save(paciente) 

    } catch (error) {
      
      
    }
    return 'This action adds a new paciente';
  
  }

  async findAll() {

    return this.pacienteReporsitory.find()

  }

  findOne(cedula: string) {
    
    return this.pacienteReporsitory.findOneBy({Identificacion:cedula})
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
