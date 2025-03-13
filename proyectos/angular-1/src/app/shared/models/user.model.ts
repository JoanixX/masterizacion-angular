export type UserRole = 'user' | 'admin' | 'premium';

export interface User {
    id: number,
    name: string,
    email: string,
    age: number,
    password: string,
    role: UserRole,
    phone: string
}
