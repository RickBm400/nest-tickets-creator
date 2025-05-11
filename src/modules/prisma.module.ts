import { Global, Module } from '@nestjs/common';
import { LocalPrismaClient } from '../infrastructure/database/prisma/prisma.client';

@Global()
@Module({
  providers: [LocalPrismaClient],
  exports: [LocalPrismaClient],
})
export class PrismaModule {}
