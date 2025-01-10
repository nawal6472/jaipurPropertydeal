import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

// Users Create DTO
export class CreateUserDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(100, { message: 'name must be less than 100 characters' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  otp: string;

  @IsNotEmpty()
  pen_card: string;

  @IsNotEmpty()
  company_name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  gst_number: string;

  @IsNotEmpty()
  @MaxLength(100, {
    message: 'developer_name must be less than 100 characters',
  })
  developer_name: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(10)
  password: string;

  @IsNotEmpty()
  status: boolean;
}
