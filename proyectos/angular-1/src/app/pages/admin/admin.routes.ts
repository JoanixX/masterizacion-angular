import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AddActionsFormComponent } from './add-actions-form/add-actions-form.component';
import { DeleteActionsFormComponent } from './delete-actions-form/delete-actions-form.component';
import { DeleteCompanyFormComponent } from './delete-company-form/delete-company-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';

export const adminRoutes: Routes = [ {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
            path: 'add-actions', 
            component: AddActionsFormComponent
        },
        {
            path: 'delete-actions', 
            component: DeleteActionsFormComponent
        },
        {
            path: 'delete-company', 
            component: DeleteCompanyFormComponent
        },
        {
            path: 'delete-user', 
            component: DeleteUserFormComponent
        }
    ]}
];
