import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <--- optional, but helps share PrismaService app-wide
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
