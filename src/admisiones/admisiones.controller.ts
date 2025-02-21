import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdmisionesService } from './admisiones.service';
import { CreateAdmisioneDto } from './dto/create-admisione.dto';
import { UpdateAdmisioneDto } from './dto/update-admisione.dto';

@Controller('admisiones')
export class AdmisionesController {
  constructor(private readonly admisionesService: AdmisionesService) {}

  @Post()
  create(@Body() createAdmisioneDto: CreateAdmisioneDto) {
    return this.admisionesService.create(createAdmisioneDto);
  }

  @Get()
  findAll() {
    return this.admisionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admisionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdmisioneDto: UpdateAdmisioneDto) {
    return this.admisionesService.update(+id, updateAdmisioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.admisionesService.remove(+id);
  }
}
