import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

interface ProductDto {
	id: number;
	name: string;
}
const products: Array<ProductDto> = [
	{ id: 0, name: 'test' },
	{ id: 1, name: 'test2' },
];

describe('ProductsService', () => {
	let service: ProductsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ProductsService],
		}).compile();

		service = module.get<ProductsService>(ProductsService);

		await service.createProducts(products);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('getProducts', () => {
		it('should return all products', async () => {
			expect(await service.getProducts()).toStrictEqual(products);
		});
	});
});
