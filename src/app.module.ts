import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// module imports
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
