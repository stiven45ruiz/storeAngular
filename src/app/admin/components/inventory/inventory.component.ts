import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { InventoryDataSource, InventoryItem } from './inventory-datasource';
import { ProductsService} from './../../../core/services/products/products.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements AfterViewInit, OnInit{

  products = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<InventoryItem>;
  dataSource: InventoryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  constructor(
    private productsService: ProductsService
  ) {
    this.dataSource = new InventoryDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(){
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }
  
  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    })
  }
}
