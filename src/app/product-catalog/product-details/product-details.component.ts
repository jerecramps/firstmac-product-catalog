import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [CommonModule,
            IonicModule]
})
export class ProductDetailsComponent  implements OnInit {

  name!: string;
  id!: string;
  price!: number;
  description!: string;
  discount!: number;


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.mapState();
  }

  mapState(): void {
    const product = history.state.products;
    this.name = product.name;
    this.id = product.id;
    this.price = product.price;
    this.description = product.description;
    this.discount = product.discount;
  }

  goBack(): void {
    this.navCtrl.back();
  }

}
