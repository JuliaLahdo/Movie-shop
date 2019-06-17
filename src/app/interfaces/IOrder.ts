export interface IOrder {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
}

export interface IOrderRow {
    productId: number;
    amount: number;
}

export interface IExtendedOrder {
    order: IOrder;
    movieNames: string[];
    }