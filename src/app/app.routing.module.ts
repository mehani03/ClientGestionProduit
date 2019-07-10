import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Router, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: 'produit', component: ProduitComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {

}