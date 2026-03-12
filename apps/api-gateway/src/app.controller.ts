import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    @Inject('CATALOG_SERVICE') private readonly catalogClient: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth-status')
  async getAuthStatus() {
    return this.authClient.send({ cmd: 'check_auth' }, {});
  }

  @Get('products')
  async getProducts() {
    return this.catalogClient.send({ cmd: 'get_products' }, {});
  }
}
