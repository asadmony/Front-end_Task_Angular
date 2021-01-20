import { Component } from '@angular/core';
import {ProductsService} from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:any;
  modalData:any;
  title = 'kc-task';
  constructor(private productData:ProductsService){}
  ngOnInit(): void {
    this.productData.getProducts().subscribe(res=>{
      this.products = res
      this.modalData = res[0]
      console.log(this.products)
    });
  }
  loadModal(modal:any){
    this.modalData = modal
  }
}
