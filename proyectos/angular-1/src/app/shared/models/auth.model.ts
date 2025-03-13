import { UserRole } from './user.model';

export interface Auth {
    id: number,
    username: string,
    password: string,
    email: string,
    role: UserRole,
    createdAt: string
}
