import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';
import {FfTestPageComponent} from '@app/ff-test-page/ff-test-page.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'ff', component: FfTestPageComponent },
  ])
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class FfTestPageRoutingModule { }
