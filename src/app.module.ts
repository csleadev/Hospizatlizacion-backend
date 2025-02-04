import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PacienteModule, FacturacionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
