import { Module } from '@nestjs/common';
import { PacienteService } from './Services/paciente.service';
import { PacienteController } from './Controllers/paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Domicilio } from './entities/domicilio.entity';
import { GrupoSanguineo } from './entities/gruposanguineo.entity';
import { Medico } from './entities/medico.entity';
import { Nacionalidad } from './entities/nacionalidad';
import { Factura } from 'src/facturacion/entities/Factura.entity';
import { Servicio } from 'src/facturacion/entities/Servicio.entity';
import { FacturacionDetalle } from 'src/facturacion/entities/FacturaDetalle.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Paciente,Domicilio,GrupoSanguineo,Medico,Nacionalidad,Factura,FacturacionDetalle,Servicio])],
  controllers: [PacienteController],
  providers: [PacienteService ],
  exports: [PacienteService]
 
})
export class PacienteModule {}
