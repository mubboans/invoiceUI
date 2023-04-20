import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryPageDownloadComponent } from './history-page-download/history-page-download.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'invoice-item',component:InvoiceItemComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'about',component:AboutComponent},
  {path:'history',component:HistoryPageDownloadComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:PagenotfoundComponent},  
  {path:'',redirectTo:'about',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
