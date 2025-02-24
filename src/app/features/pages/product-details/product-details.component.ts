import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  apiError!: boolean;
  private readonly _productService: ProductService = inject(ProductService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        console.log(res?.params?.id);
        this.getProductDetails(res?.params?.id);
      },
    });
  }

  getProductDetails(id: number) {
    this._productService.getSpecificProducts(id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
        if (res === null) {
          this.apiError = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.apiError = true;
      },
    });
  }
}
