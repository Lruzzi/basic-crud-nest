import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Post()
  createProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    if (!prodTitle || !prodDesc || !prodPrice) {
      throw new HttpException('Missing parameters', 400);
    }

    const ID = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: ID };
  }
}
