import { Module } from '@nestjs/common';
import { FacturacionService } from './facturacion.service';
import { FacturacionController } from './facturacion.controller';

@Module({
  controllers: [FacturacionController],
  providers: [FacturacionService],
})
export class FacturacionModule {}
