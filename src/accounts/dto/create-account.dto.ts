import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  subdomain: string;

  @IsNotEmpty()
  amount: number;
}
