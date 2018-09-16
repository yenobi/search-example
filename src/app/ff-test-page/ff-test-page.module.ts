import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfTestPageComponent } from './ff-test-page.component';
import { FfTestPageRoutingModule } from './ff-test-page--routing.module';
import {SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    FfTestPageRoutingModule,
    SharedModule
  ],
  declarations: [FfTestPageComponent]
})
export class FfTestPageModule { }
