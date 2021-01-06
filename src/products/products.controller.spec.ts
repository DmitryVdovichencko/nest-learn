import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

interface ProductDto {
	id: number;
	name: string;
}

describe('ProductsController', () => {
	let productsController: ProductsController;
	let productsService: ProductsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProductsController],
			providers: [ProductsService],
		}).compile();

		productsController = module.get<ProductsController>(ProductsController);
		productsService = module.get<ProductsService>(ProductsService);
	});

	describe('getProduct by id', () => {
		it('should return one product by id', async () => {
			const products: Array<ProductDto> = [{ id: 0, name: 'test' }];
			jest
				.spyOn(productsService, 'getProduct')
				.mockImplementation(() => products);
			const currentProducts = await productsController.getProducts();
			console.log('currentProducts', currentProducts);
			expect(await productsController.getProduct({ id: 0 })).toBe(products[0]);
		});
	});

	describe('getProducts', () => {
		it('should return an array of products', async () => {
			const products: Array<ProductDto> = [{ id: 0, name: 'test' }];
			jest
				.spyOn(productsService, 'getProducts')
				.mockImplementation(() => products);
			const currentProducts = await productsController.getProducts();
			console.log('currentProducts when get', currentProducts);
			expect(await productsController.getProducts()).toBe(products);
		});
	});



	// describe('createProduct', () => {
	// 	it('should return one product by id', async () => {
	// 		const result: Array<ProductDto> = [{ id: 0, name: 'test1' }];
	// 		const newProduct: ProductDto = { id: 1, name: 'test2' };
	// 		jest
	// 			.spyOn(productsService, 'createProduct')
	// 			.mockImplementation(() => result);
	// 		await productsController.createProduct(newProduct);
	// 		expect(await productsController.getProducts()).toBe([
	// 			...result,
	// 			newProduct,
	// 		]);
	// 	});
	// });

	// describe('updateProduct', () => {
	// 	it('should return one product by id', async () => {
	// 		const result: Array<ProductDto> = [
	// 			{ id: 0, name: 'test1' },
	// 			{ id: 1, name: 'test1' },
	// 		];
	// 		const updatedProduct: ProductDto = { id: 2, name: 'testNew' };
	// 		jest
	// 			.spyOn(productsService, 'createProduct')
	// 			.mockImplementation(() => result);
	// 		await productsController.updateProduct(updatedProduct);
	// 		expect(await productsController.getProduct(2)).toBe(updatedProduct);
	// 	});
	// });

	// describe('deleteProduct', () => {
	// 	it('should return one product by id', async () => {
	// 		const result: Array<ProductDto> = [
	// 			{ id: 0, name: 'test1' },
	// 			{ id: 1, name: 'test1' },
	// 		];
	// 		const deleteProduct: ProductDto = { id: 0, name: 'test1' };
	// 		jest
	// 			.spyOn(productsService, 'createProduct')
	// 			.mockImplementation(() => result);
	// 		await productsController.deleteProduct(deleteProduct);
	// 		const remainProducts: Array<ProductDto> = result.filter(
	// 			(p) => p.id !== deleteProduct.id,
	// 		);
	// 		expect(await productsController.getProducts()).toBe(remainProducts);
	// 	});
	// });
});
