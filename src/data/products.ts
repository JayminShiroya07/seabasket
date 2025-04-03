export interface Product {
    id: number;
    title: string;
    price: number;
    cat: {
        id: number;
    };
    description: string;
    image: string;
    available_qty: number;
    discount: number;
    rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Apple iPhone 13",
        price: 526.99,
        cat: { id: 101 },
        description: "This is a description for Apple iPhone 13.",
        image: "https://picsum.photos/seed/product1/300/200",
        available_qty: 52,
        discount: 3,
        rating: 4.5
    },
    {
        id: 2,
        title: "Samsung Galaxy S21",
        price: 27.99,
        cat: { id: 102 },
        description: "This is a description for Samsung Galaxy S21.",
        image: "https://picsum.photos/seed/product2/400/300",
        available_qty: 54,
        discount: 6,
        rating: 3.5
    },
    {
        id: 3,
        title: "Google Pixel 6",
        price: 28.99,
        cat: { id: 103 },
        description: "This is a description for Google Pixel 6.",
        image: "https://picsum.photos/seed/product3/500/400",
        available_qty: 56,
        discount: 9,
        rating: 4
    },
    {
        id: 4,
        title: "OnePlus 9 Pro",
        price: 29.99,
        cat: { id: 104 },
        description: "This is a description for OnePlus 9 Pro.",
        image: "https://picsum.photos/seed/product4/600/500",
        available_qty: 58,
        discount: 12,
        rating: 4.5
    },
    {
        id: 5,
        title: "Sony Xperia 5 III",
        price: 30.99,
        cat: { id: 101 },
        description: "This is a description for Sony Xperia 5 III.",
        image: "https://picsum.photos/seed/product5/700/600",
        available_qty: 60,
        discount: 15,
        rating: 3.5
    },
    {
        id: 6,
        title: "Xiaomi Mi 11",
        price: 31.99,
        cat: { id: 102 },
        description: "This is a description for Xiaomi Mi 11.",
        image: "https://picsum.photos/seed/product6/800/700",
        available_qty: 62,
        discount: 2,
        rating: 4
    },
    {
        id: 7,
        title: "Huawei P50 Pro",
        price: 32.99,
        cat: { id: 103 },
        description: "This is a description for Huawei P50 Pro.",
        image: "https://picsum.photos/seed/product7/900/800",
        available_qty: 64,
        discount: 5,
        rating: 4.5
    },
    {
        id: 8,
        title: "Oppo Find X3 Pro",
        price: 33.99,
        cat: { id: 104 },
        description: "This is a description for Oppo Find X3 Pro.",
        image: "https://picsum.photos/seed/product8/1000/900",
        available_qty: 66,
        discount: 8,
        rating: 3.5
    },
    {
        id: 9,
        title: "Vivo X70 Pro+",
        price: 34.99,
        cat: { id: 101 },
        description: "This is a description for Vivo X70 Pro+.",
        image: "https://picsum.photos/seed/product9/1100/1000",
        available_qty: 68,
        discount: 11,
        rating: 4
    },
    {
        id: 10,
        title: "Realme GT Master Edition",
        price: 35.99,
        cat: { id: 102 },
        description: "This is a description for Realme GT Master Edition.",
        image: "https://picsum.photos/seed/product10/1200/1100",
        available_qty: 70,
        discount: 14,
        rating: 4.5
    }
];
