import { Product , products as items } from "../products";

export interface order{
    id : string;
    date : Date;
    item : Product[]; 
    total : number;
    status : "Completed" | "Pending" | "Canceled";
    deliveryDate : Date;
}

export const orders: order[] = [
    {
        id: "17576576",
        date: new Date("2023-01-01"),
        item: [items[0], items[1], items[4], items[5], items[8], items[9]],
        total: 200,
        status: "Completed",
        deliveryDate: new Date("2023-01-05"),
    },
    {
        id: "22756857",
        date: new Date("2023-02-01"),
        item: [items[2], items[3]],
        total: 300,
        status: "Pending",
        deliveryDate: new Date("2023-02-10"),
    },
    {
        id: "345345345",
        date: new Date("2023-03-01"),
        item: [items[4], items[5]],
        total: 400,
        status: "Canceled",
        deliveryDate: new Date("2023-03-15"),
    },
    {
        id: "414234234",
        date: new Date("2023-04-01"),
        item: [items[6], items[7]],
        total: 500,
        status: "Completed",
        deliveryDate: new Date("2023-04-10"),
    },
    {
        id: "542",
        date: new Date("2023-05-01"),
        item: [items[8], items[9]],
        total: 600,
        status: "Pending",
        deliveryDate: new Date("2023-05-20"),
    },
];