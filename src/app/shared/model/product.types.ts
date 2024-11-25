import {Categories} from './category.types';

export class Products {

  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  quantityUnit: number;
  image: string;
  category: Categories;
  categoryId: number;
}
