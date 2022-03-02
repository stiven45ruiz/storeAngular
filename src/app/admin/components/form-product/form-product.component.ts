import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {ProductsService} from './../../../core/services/products/products.service'
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) =>{
        console.log(newProduct);
        this.router.navigate(['./admin/inventory']);
      })
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      image: [''],
      description: ['',[Validators.required]],
    });   
  } 
}