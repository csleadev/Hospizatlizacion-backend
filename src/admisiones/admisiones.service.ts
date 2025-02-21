import { Injectable } from '@nestjs/common';
import { CreateAdmisioneDto } from './dto/create-admisione.dto';
import { UpdateAdmisioneDto } from './dto/update-admisione.dto';

@Injectable()
export class AdmisionesService {
  create(createAdmisioneDto: CreateAdmisioneDto) {
    return 'This action adds a new admisione';
  }

  findAll() {
    return `This action returns all admisiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admisione`;
  }

  update(id: number, updateAdmisioneDto: UpdateAdmisioneDto) {
    return `This action updates a #${id} admisione`;
  }

  remove(id: number) {
    return `This action removes a #${id} admisione`;
  }
}
