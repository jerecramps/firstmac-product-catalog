import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card-catalog',
  templateUrl: './generic-card-catalog.component.html',
  styleUrls: ['./generic-card-catalog.component.scss'],
  standalone: false
})
export class GenericCardCatalogComponent  implements OnInit {

  @Input() cardName!: string | undefined;
  @Input() cardPrice!: number | undefined;
  @Input() cardDiscount!: number;
  @Input() cardDescription!: string | undefined;
  @Input() routerDestination!: string | undefined;

  constructor() { }

  ngOnInit() {}

}
