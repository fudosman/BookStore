// src/books/dto/create-book.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsBoolean()
  availability: boolean;
}
