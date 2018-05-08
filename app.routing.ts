import { ModuleWithProviders }  from '@angular/core'; //provides our router to the rest of the application
import { Routes, RouterModule } from '@angular/router'; //contain code that help render specific components when specific URLs are provided to the router
import { WelcomeComponent }   from './welcome/welcome.component'; //import any components our new route
import { AboutComponent }   from './about/about.component'; //import about us content to link to the route
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
