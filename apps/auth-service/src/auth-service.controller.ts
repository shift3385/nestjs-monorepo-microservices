import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @MessagePattern({ cmd: 'check_auth' })
  checkAuth() {
    return {
      status: 'success',
      message: 'Auth microservice is active',
      timestamp: new Date().toISOString(),
    };
  }
}
