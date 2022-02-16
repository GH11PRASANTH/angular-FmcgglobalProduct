import { Component} from '@angular/core';
import { productsFromFile } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
products = productsFromFile;

share()
{
  window.alert("Your Product is saved...")
}
buy()
{
 window.alert("The Product is add to cart.....")
}
onNotify()
{
  alert('You will be notified on the product goes on sale')
}
start()
{
  alert("Your Fmcgglobal Product is Saved.....")
}
}
