import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmisioneDto } from './create-admisione.dto';

export class UpdateAdmisioneDto extends PartialType(CreateAdmisioneDto) {}
