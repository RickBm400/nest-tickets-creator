import { Global, Module } from '@nestjs/common';
import { AuthService } from 'src/application/services/auth.service';

@Global()
@Module({
  providers: [AuthService],
})
export class AuthModule {}
