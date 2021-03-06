import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';

interface ProductDto {
	id: number;
	name: string;
}

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Get()
	getProducts() {
		return this.productsService.getProducts();
	}

	@Get(':id')
	getProduct(@Param() params) {
		console.log('get a single product', params.id);
		return this.productsService
			.getProducts()
			.filter((p) => p.id == params.id)[0];
	}

	@Post()
	createProduct(@Body() product: ProductDto) {
		console.log('create product', product);
		this.productsService.createProduct(product);
		return { errorCode: 0 };
	}

	@Put()
	updateProduct(@Body() product: ProductDto) {
		console.log('update product', product);
		this.productsService.updateProduct(product);
		return { errorCode: 0 };
	}

	@Delete()
	deleteProduct(@Body() product: ProductDto) {
		console.log('delete product', product.id);
		this.productsService.deleteProduct(product.id);
		return { errorCode: 0 };
	}
}
