import { User } from "./user.types";
import {Products} from './product.types';

export class CommandTypes {
  id: number;
  totalPrice: string;
  payment: string;
  user: User;
  products: Products[];

}