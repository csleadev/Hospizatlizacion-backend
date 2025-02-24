import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from '../dto/create-paciente.dto';
import { UpdatePacienteDto } from '../dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from '../entities/paciente.entity';
import { Repository } from 'typeorm';
import { PrecioServicio } from 'src/facturacion/entities/PrecioServicio.entity';

@Injectable()
export class PacienteService {

  private readonly logger = new Logger('PacienteService')


  constructor (
    @InjectRepository(Paciente)
    private readonly pacienteReporsitory : Repository<Paciente>,
      @InjectRepository(PrecioServicio)
        private readonly precioServicioRepository: Repository<PrecioServicio>

  ){}

  async create(createPacienteDto: CreatePacienteDto) {
    
    try {
    
    const paciente =  this.pacienteReporsitory.create(createPacienteDto)
      
    
    await this.pacienteReporsitory.save(paciente) 

    } catch (error) {
      
      
    }
    return 'This action adds a new paciente';
  
  }

  
    async getServicesWithPrices(patientId: number) {
      // Obtener el paciente con su aseguradora
      const patient = await this.pacienteReporsitory.findOne({
        where: { PacienteID: patientId },
        relations: ['Ars'],
      }); 
  
      if (!patient) {
       return new NotFoundException('Paciente no encontrado');
      }
  
      // Obtener los servicios con el precio correspondiente a la aseguradora del paciente
      const servicios = await this.precioServicioRepository.find({
        where: { Ars: { ArsID: patient.Ars.ArsID } }, // Filtrar por la ARS del paciente
        relations: ['Servicio', 'Servicio.GrupoServicio'], // Incluir Servicio y GrupoServicio
      });
  
      return servicios.map((precioServicio) => ({
        servicioID: precioServicio.Servicio.ServicioID,
        servicioDescripcion: precioServicio.Servicio.Descripcion,
        grupoID: precioServicio.Servicio.GrupoServicio.GrupoID,
        grupoDescripcion: precioServicio.Servicio.GrupoServicio.Descripcion,
        precio: precioServicio.Precio,
      }));
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
