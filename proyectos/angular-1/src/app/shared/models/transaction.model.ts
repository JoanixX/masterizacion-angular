export type TransactionType = 'deposit' | 'withdrawal' | 'purchase' | 'sale';

export interface Transaction {
    id: number;
    type: TransactionType;
    amount: number;
    createdAt: string;
    description: string;
}
