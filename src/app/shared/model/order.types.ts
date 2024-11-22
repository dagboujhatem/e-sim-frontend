import {User} from './user.types';
import {Products} from './product.types';

export class OrderTypes {
  id: number;
  totalPrice: string;
  payment: string;
  user: User;
  products: Products[];
  status: String;
  createdAt: Date;

}
