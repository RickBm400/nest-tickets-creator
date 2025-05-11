// module imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as modules from './modules';

@Module({
  imports: [
    ...Object.values(modules),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
