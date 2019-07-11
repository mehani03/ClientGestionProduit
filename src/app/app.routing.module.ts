import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Router, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'produit', component: ProduitComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {

}