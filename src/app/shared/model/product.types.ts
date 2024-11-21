export class Products {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  quantityUnit: number=0;
  image: string;
  constructor(id: number, name: string, description: string, price: number, quantity: number, quantityUnit: number, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.quantityUnit = quantityUnit;
    this.image = image;

  }
}
