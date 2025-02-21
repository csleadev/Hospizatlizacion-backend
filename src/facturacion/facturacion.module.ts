import { Module } from '@nestjs/common';
import { FacturacionService } from './facturacion.service';
import { FacturacionController } from './facturacion.controller';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecioServicio } from './entities/PrecioServicio.entity';

@Module({
  controllers: [FacturacionController],
  providers: [FacturacionService],
  imports: [TypeOrmModule.forFeature([PrecioServicio, Paciente])],
})
export class FacturacionModule {}
