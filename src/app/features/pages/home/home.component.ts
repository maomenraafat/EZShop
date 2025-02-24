import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { Product } from '../../../shared/interfaces/product';
import { ProductItemComponent } from '../../../shared/components/ui/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [ProductItemComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchValue!: string;
  products!: Product[];
  filteredProducts: Product[] = [];
  _productService = inject(ProductService);

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._productService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
        this.filteredProducts = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete!');
      },
    });
  }

  search() {
    if (!this.searchValue) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
