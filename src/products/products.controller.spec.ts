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
				.spyOn(productsService, 'getProducts')
				.mockImplementation(() => products);
			expect(await productsController.getProduct({ id: 0 })).toBe(products[0]);
		});
	});

	describe('getProducts', () => {
		it('should return an array of products', async () => {
			const products: Array<ProductDto> = [{ id: 0, name: 'test' }];
			jest
				.spyOn(productsService, 'getProducts')
				.mockImplementation(() => products);
			expect(await productsController.getProducts()).toBe(products);
		});
	});

	describe('createProduct', () => {
		it('should return errorCode 0', async () => {
			const products: Array<ProductDto> = [{ id: 0, name: 'test1' }];
			const newProduct: ProductDto = { id: 1, name: 'test2' };
			jest
				.spyOn(productsService, 'createProduct')
				.mockImplementation(() => products);
			expect(await productsController.createProduct(newProduct)).toStrictEqual({
				errorCode: 0,
			});
		});
	});

	describe('updateProduct', () => {
		it('should return errorCode = 0', async () => {
			const products: Array<ProductDto> = [
				{ id: 0, name: 'test1' },
				{ id: 1, name: 'test1' },
			];
			const updatedProduct: ProductDto = { id: 1, name: 'testNew' };
			jest
				.spyOn(productsService, 'updateProduct')
				.mockImplementation(() => products);
			expect(
				await productsController.updateProduct(updatedProduct),
			).toStrictEqual({
				errorCode: 0,
			});
		});
	});

	describe('deleteProduct', () => {
		it('should return errorCode = 0', async () => {
			const products: Array<ProductDto> = [
				{ id: 0, name: 'test1' },
				{ id: 1, name: 'test2' },
			];
			const deleteProduct: ProductDto = { id: 0, name: 'test1' };
			jest
				.spyOn(productsService, 'deleteProduct')
				.mockImplementation(() => products);

			expect(
				await productsController.deleteProduct(deleteProduct),
			).toStrictEqual({
				errorCode: 0,
			});
		});
	});
});
