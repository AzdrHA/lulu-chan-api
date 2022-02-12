import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserBlacklistDto {
  @ApiProperty()
  @IsString()
  public user: string;

  @ApiProperty()
  @IsString()
  public moderator: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(512)
  public reason: string;
}
