import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { BuyActionsFormComponent } from './buy-actions-form/buy-actions-form.component';
import { SellActionsFormComponent } from './sell-actions-form/sell-actions-form.component';
import { WalletComponent } from './wallet/wallet.component';

export const userRoutes: Routes = [ {
    path: '',
    component: UserLayoutComponent,
    children: [
        {
            path: 'buy', 
            component: BuyActionsFormComponent
        },
        {
            path: 'sell', 
            component: SellActionsFormComponent
        },
        {
            path: 'wallet', 
            component: WalletComponent
        }
    ]}
];