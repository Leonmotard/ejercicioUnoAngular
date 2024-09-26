import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingPageComponent
    },
    
    {
        path: 'pricing',
        component: PricingComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path:'',
        redirectTo: '/landing',
        pathMatch: 'full' 
    },
    {
        path:'**',
        redirectTo: '/landing',
        pathMatch: 'full' 
    } //Aquí se podría emplazar una página 404 específica para avisar al usuario que no existe el path ingresado
    
];
