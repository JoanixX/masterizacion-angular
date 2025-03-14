import { Routes } from '@angular/router';
import { PremiunUserLayoutComponent } from './premiun-user-layout/premiun-user-layout.component';
import { ExternalConnectionFormComponent } from './external-connection-form/external-connection-form.component';
import { ReserveBuyFormComponent } from './reserve-buy-form/reserve-buy-form.component';
import { ReserveSellFormComponent } from './reserve-sell-form/reserve-sell-form.component';

export const premiunRoutes: Routes = [ {
    path: '',
    component: PremiunUserLayoutComponent,
    children: [
        {
            path: 'external-connection', 
            component: ExternalConnectionFormComponent
        },
        {
            path: 'reserve-buy', 
            component: ReserveBuyFormComponent
        },
        {
            path: 'reserve-sell', 
            component: ReserveSellFormComponent
        }
    ]}
];