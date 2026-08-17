export interface ProductListProps {
    title: string;
    linkPath: string;
    linkName: string;
    productList: Product[];
}

export interface Product {
    id: string;
    title: string;
    category?: 't-shirts' | 'hoodies';
    price: number;
    image: string;
    sizes?: string[];
    description?: string;
}