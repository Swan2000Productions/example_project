import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsTableListComponent } from './bookings-table-list/bookings-table-list.component';


const routes: Routes = [
  { path: 'bookings-table', component: BookingsTableListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookingsTableListComponent]
