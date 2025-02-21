import { Module } from '@nestjs/common';
import { AdmisionesService } from './admisiones.service';
import { AdmisionesController } from './admisiones.controller';

@Module({
  controllers: [AdmisionesController],
  providers: [AdmisionesService],
})
export class AdmisionesModule {}
