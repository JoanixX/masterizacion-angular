import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { NotificationsComponent } from '../../shared/components/notifications/notifications.component';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NotificationsComponent, NavbarHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Corrección aquí
})

export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.addNotification('¡Notificación de prueba!');
  }
}
