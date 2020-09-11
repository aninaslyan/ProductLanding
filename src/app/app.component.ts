import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from './shared/services';
import { IProductConfig, IProductInfo } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  productInfo = {} as IProductInfo;
  productConfig = {} as IProductConfig;
  imagePath = '../assets/images';
  private productInfo$: Subscription;
  private productConfig$: Subscription;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getProductInfo();
    this.getProductConfig();
  }

  private getProductInfo(): void {
    this.productInfo$ = this.dataService.getProductInfo(3)
      .subscribe(info => {
        this.productInfo = info.data;
      });
  }

  private getProductConfig(): void {
    this.productConfig$ = this.dataService.getProductConfig()
      .subscribe(config => {
        this.productConfig = config.data;
      });
  }

  ngOnDestroy(): void {
    this.productInfo$.unsubscribe();
    this.productConfig$.unsubscribe();
  }

}
