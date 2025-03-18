import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';
import { map } from 'rxjs/operators'; // ✅ Importamos map

@Component({
  selector: 'app-notifications',
  standalone: true, // ✅ Lo hacemos standalone
  imports: [CommonModule], // ✅ Importamos CommonModule para los pipes como date
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications$: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.notifications$.pipe(
      map((notifications: Notification[]) =>
        notifications.map((n: Notification) => ({
          ...n,
          createdAt: new Date(n.createdAt) // ✅ Convertir string a Date
        }))
      )
    );
  }

  removeNotification(id: number) {
    this.notificationService.removeNotification(id);
  }
}
