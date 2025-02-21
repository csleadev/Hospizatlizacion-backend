import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';
import { Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { PrecioServicio } from './entities/PrecioServicio.entity';

@Injectable()
export class FacturacionService {

  constructor (
   @InjectRepository(PrecioServicio)
    private readonly precioServicioRepository: Repository<PrecioServicio>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>
  ) {}

  create(createFacturacionDto: CreateFacturacionDto) {
    return 'This action adds a new facturacion';
  }

  BuscarFacturas() {
    return `Devolver todas las facturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturacion`;
  }

  async getServicesWithPrices(patientId: number) {
    // Obtener el paciente con su aseguradora
    const patient = await this.pacienteRepository.findOne({
      where: { PacienteID: patientId },
      relations: ['Ars'],
    });

    if (!patient) {
     return new NotFoundException('Paciente no encontrado');
    }

    // Obtener los servicios con el precio correspondiente a la aseguradora del paciente
    const services = await this.precioServicioRepository
      .createQueryBuilder('ps')
      .leftJoinAndSelect('ps.Servicio', 's')
      .where('ps.ArsID = :ArsID', { ars: patient.Ars.ArsID })
      .select(['s.Descripcion', 's.NombreCompleto', 'sp.Precio'])
      .getMany();

    return {
      patient: patient.NombreCompleto,
      insurer: patient.Ars.ArsDescripcion,
      services,
    };
  }

  update(id: number, updateFacturacionDto: UpdateFacturacionDto) {
    return `This action updates a #${id} facturacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturacion`;
  }
}
