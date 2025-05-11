// module imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as modules from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ...Object.values(modules),
  ],
})
export class AppModule {}
