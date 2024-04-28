export interface Product {
	image: string;
	title: string;
	description: string;
	category: string;
	price: number;
	rating: {
		rate: number;
		count: number;
	};
}
