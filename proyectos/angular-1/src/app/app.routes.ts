import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.routes').then(m => m.userRoutes)
    },
    {
        path: 'company',
        loadChildren: () => import('./pages/company/company.routes').then(m => m.companyRoutes)
    },
    {
        path: 'premiun-user',
        loadChildren: () => import('./pages/premiun_user/premiun_user.routes').then(m => m.premiunRoutes)
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
    },

    
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes)
    }
];
