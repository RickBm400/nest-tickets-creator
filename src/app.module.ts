import { Module } from '@nestjs/common';
// module imports
import * as modules from './modules';

@Module({
  imports: [...Object.values(modules)],
})
export class AppModule {}
