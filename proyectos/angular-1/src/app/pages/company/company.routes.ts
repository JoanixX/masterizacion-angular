import { Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { AddDatabaseFormComponent } from './add-database-form/add-database-form.component';
import { EventFormComponent } from './event-form/event-form.component';

export const companyRoutes: Routes = [ {
    path: '',
    component: CompanyLayoutComponent,
    children: [
        {
            path: 'add-database', 
            component: AddDatabaseFormComponent
        },
        {
            path: 'event', 
            component: EventFormComponent
        }
    ]}
];