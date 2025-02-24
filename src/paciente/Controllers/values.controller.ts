import { Controller, Get } from '@nestjs/common';
import { ValuesService } from '../Services/values.service';

@Controller('values')
export class ValuesController {

    constructor(
        private readonly valuesService: ValuesService   
    ){

    }

     @Get("/gruposanguineo")
      getGrupoSanguineo() {
        return this.valuesService.findGrupoSanguineo();
      }

      @Get("/estadocivil")
      getEstadoCivil() {   
        return this.valuesService.findEstadoCivil();
      }


      @Get("/sexo")
      getSexo() {   
        return this.valuesService.findSexo();
      }

      @Get("/ars")
      getArs() {   
        return this.valuesService.findArs();
      }

      
      @Get("/nacionalidad")
      getNacionalidad() {   
        return this.valuesService.findNacionalidad();
      }
    

}
