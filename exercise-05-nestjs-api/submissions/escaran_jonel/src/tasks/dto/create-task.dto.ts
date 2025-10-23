import { IsNotEmpty, IsOptional, IsString, IsIn, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsIn(['pending', 'in-progress', 'done'])
  status: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
