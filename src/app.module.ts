import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EventsController } from './events/events.controller';
import { EventsModule } from './events/events.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, EventsModule],
  controllers: [EventsController],
})
export class AppModule {}
