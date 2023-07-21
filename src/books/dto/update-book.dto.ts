import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  author?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  availability?: boolean;
}
