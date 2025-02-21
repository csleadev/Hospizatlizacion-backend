import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmisionesModule } from './admisiones/admisiones.module';

@Module({
  imports: [
          ConfigModule.forRoot(),
          TypeOrmModule.forRoot({
            type: 'mssql',
            port: 1433,
            username: 'userapp',
            password: 'U$R159264873',
            database: 'HospitalizacionDB',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            options: {
              encrypt: false,
              trustServerCertificate: true,
            },
            autoLoadEntities: true,
            synchronize:true,    
            extra: {
              server: 'SERVIDOR405-TIC', // Esto añade la propiedad "server" requerida por tedious
            },          
          }),
          PacienteModule,
          FacturacionModule,
          AuthModule,
          AdmisionesModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
