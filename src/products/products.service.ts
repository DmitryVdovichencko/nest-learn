import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
@Injectable()
export class ProductsService {
	private readonly products: Product[] = [];

	getProducts() {
		return this.products;
	}

	getProduct(id: number) {
		return this.products.filter((p) => p.id === id);
	}
	createProducts(products: Array<Product>) {
		this.products.push(...products);
		return this.products;
	}
	createProduct(product) {
		this.products.push({ ...product });
		return this.products;
	}

	updateProduct(product) {
		return this.products.map((p) => {
			if (p.id == product.id) {
				return { ...product };
			}
			return p;
		});
	}

	deleteProduct(id) {
		return this.products.filter((p) => p.id != id);
	}
}
