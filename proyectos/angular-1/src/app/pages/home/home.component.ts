import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { NotificationsComponent } from '../../shared/components/notifications/notifications.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Corrección aquí
})

export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.addNotification('¡Notificación de prueba!');
  }
}
