import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../shared/models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();
  private nextId = 1;

  constructor() {}

  addNotification(description: string) {
    const newNotification: Notification = {
      id: this.nextId++,
      createdAt: new Date(), // Ahora es un objeto Date
      description
    };
  
    this.notifications.push(newNotification);
    this.notificationsSubject.next([...this.notifications]);

    console.log("🔔 Notificación agregada:", newNotification); // 👀 Verifica en la consola
  
    setTimeout(() => this.removeNotification(newNotification.id), 5000);
  }
  

  removeNotification(id: number) {
    this.notifications = this.notifications.filter(notif => notif.id !== id);
    this.notificationsSubject.next([...this.notifications]);
  }
}
