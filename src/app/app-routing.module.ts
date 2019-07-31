import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  // { path: 'products/', loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, /*{ enableTracing: true }*/
    // preloadingStrategy: SelectivePreloadingStrategyService,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
