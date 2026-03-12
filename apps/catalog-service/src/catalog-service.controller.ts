import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CatalogServiceService } from './catalog-service.service';

@Controller()
export class CatalogServiceController {
  constructor(private readonly catalogServiceService: CatalogServiceService) {}

  @MessagePattern({ cmd: 'get_products' })
  getProducts() {
    return [
      { id: 1, name: 'Certificado Digital A', price: 50 },
      { id: 2, name: 'Certificado Digital B', price: 100 },
      { id: 3, name: 'Soporte Premium', price: 200 },
    ];
  }
}
