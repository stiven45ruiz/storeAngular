import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';


@Pipe({
  name: 'groupOrder'
})
export class GroupOrderPipe implements PipeTransform {

  transform(products: Array<Product>, ...args: string[]): any {
    const order = [];
    const groupBy = args[0];
    const grouped = products.reduce((previousProd, currentProd) => {
      previousProd[currentProd[groupBy]] = [
        ...(previousProd[currentProd[groupBy]] || []),
        currentProd,
      ];
      return previousProd;
    }, {});

    Object.keys(grouped).forEach((key) => {
      const newItem = { title: '', image: '', price: 0, quantity: 0, totalPrice: 0 };
      newItem.title = grouped[key][0].title;
      newItem.image = grouped[key][0].image;
      newItem.price = grouped[key][0].price;
      newItem.quantity = grouped[key].length;
      newItem.totalPrice = grouped[key][0].price * newItem.quantity;
      order.push(newItem);
    });

    return order;
  }

}
