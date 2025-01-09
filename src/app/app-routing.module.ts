import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsTableListComponent } from './bookings-table-list/bookings-table-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'bookings-table', component: BookingsTableListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'store', component: StoreComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' } // Wildcard route for 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookingsTableListComponent]
