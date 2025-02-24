import { Module } from '@nestjs/common';
import { PacienteService } from './Services/paciente.service';
import { PacienteController } from './Controllers/paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

import { GrupoSanguineo } from './entities/gruposanguineo.entity';
import { Medico } from './entities/medico.entity';
import { Nacionalidad } from './entities/nacionalidad';
import { Factura } from 'src/facturacion/entities/Factura.entity';
import { Servicio } from 'src/facturacion/entities/Servicio.entity';
import { FacturacionDetalle } from 'src/facturacion/entities/FacturaDetalle.entity';
import { PrecioServicio } from 'src/facturacion/entities/PrecioServicio.entity';
import { EstadoCivil } from './entities/EstadoCivil';
import { ValuesController } from './Controllers/values.controller';
import { ValuesService } from './Services/values.service';
import { Sexo } from './entities/sexo';
import { Ars } from 'src/paciente/entities/Ars.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Paciente,GrupoSanguineo,Sexo,Medico,Nacionalidad,Factura,FacturacionDetalle,Servicio,PrecioServicio,EstadoCivil,Ars,])],
  controllers: [PacienteController,ValuesController],
  providers: [PacienteService, ValuesService ],
  exports: [PacienteService]
 
})
export class PacienteModule {}
