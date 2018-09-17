import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfTestPageComponent } from './ff-test-page.component';
import { FfTestPageRoutingModule } from './ff-test-page--routing.module';
import {SharedModule} from '@app/shared';
import {FfTestPageService} from '@app/ff-test-page/ff-test-page.service';

@NgModule({
  imports: [
    CommonModule,
    FfTestPageRoutingModule,
    SharedModule
  ],
  declarations: [FfTestPageComponent],
  providers: [FfTestPageService]
})
export class FfTestPageModule { }
