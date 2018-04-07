import { ProductEffects } from './../product/effects/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductActions } from './../product/actions/product-actions';
import { SearchActions } from './reducers/search.actions';
import { SharedModule } from './../shared/index';

// Components
import { HomeComponent } from './home.component';
// Breadcrumb components
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

// Content components
import { ProductListComponent } from './content/product-list/product-list.component';
import { ProductListItemComponent } from './content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './content/filter-summary/filter-summary.component';
// import { CustomizeComponent } from './content/customize/customize.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
import { ContentComponent } from './content/content'; 
// Sidebar components
import { CategoriesComponent } from './sidebar/categories/categories.component';
import { FilterComponent } from './sidebar/filter/filter.component';
// Routes
import { HomeRoutes as routes } from './home.routes';

import { FilterPipe } from './content/product-list/product-filter.pipe';
import { reducers } from "./reducers/index";

@NgModule({
  declarations: [
    // components
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    CategoriesComponent,
    FilterComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    // CustomizeComponent,
    FilterSummaryComponent,
    ContentComponent,
    // pipes
    FilterPipe,
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('home', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ProductEffects]),

    SharedModule,
  ],
  providers: [
    ProductActions,
    SearchActions
  ]
})
export class HomeModule {}
