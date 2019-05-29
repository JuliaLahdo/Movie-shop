import { ICartProduct } from './ICartProduct';

export interface IOrder {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: ICartProduct[];
}

export interface IOrderRow {
    productId: number;
    amount: number;
}