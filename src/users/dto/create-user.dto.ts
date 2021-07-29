import {
  IsOptional,
  IsString,
  MaxLength,
  IsEmail,
  MinLength,
  IsArray,
  IsEnum,
} from 'class-validator';
import { AppRoles } from 'src/app.roles';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;

  @IsArray()
  @IsEnum(AppRoles, {
    each: true,
    message: `User role must be valid: ${AppRoles.ADMIN}, ${AppRoles.USER}, ${AppRoles.SHOP} `,
  })
  roles: string[];
}
