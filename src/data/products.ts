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
        title: "Product 111",
        price: 526.99,
        cat: { id: 101 },
        description: "This is a description for Product 1.",
        image: "https://picsum.photos/seed/product1/200/300",
        available_qty: 52,
        discount: 3,
        rating: 4.5
    },
    {
        id: 2,
        title: "Product 2",
        price: 27.99,
        cat: { id: 102 },
        description: "This is a description for Product 2.",
        image: "https://picsum.photos/seed/product2/200/300",
        available_qty: 54,
        discount: 6,
        rating: 3.5
    },
    {
        id: 3,
        title: "Product 3",
        price: 28.99,
        cat: { id: 103 },
        description: "This is a description for Product 3.",
        image: "https://picsum.photos/seed/product3/200/300",
        available_qty: 56,
        discount: 9,
        rating: 4
    },
    {
        id: 4,
        title: "Product 4",
        price: 29.99,
        cat: { id: 104 },
        description: "This is a description for Product 4.",
        image: "https://picsum.photos/seed/product4/200/300",
        available_qty: 58,
        discount: 12,
        rating: 4.5
    },
    {
        id: 5,
        title: "Product 5",
        price: 30.99,
        cat: { id: 101 },
        description: "This is a description for Product 5.",
        image: "https://picsum.photos/seed/product5/200/300",
        available_qty: 60,
        discount: 15,
        rating: 3.5
    },
    {
        id: 6,
        title: "Product 6",
        price: 31.99,
        cat: { id: 102 },
        description: "This is a description for Product 6.",
        image: "https://picsum.photos/seed/product6/200/300",
        available_qty: 62,
        discount: 2,
        rating: 4
    },
    {
        id: 7,
        title: "Product 7",
        price: 32.99,
        cat: { id: 103 },
        description: "This is a description for Product 7.",
        image: "https://picsum.photos/seed/product7/200/300",
        available_qty: 64,
        discount: 5,
        rating: 4.5
    },
    {
        id: 8,
        title: "Product 8",
        price: 33.99,
        cat: { id: 104 },
        description: "This is a description for Product 8.",
        image: "https://picsum.photos/seed/product8/200/300",
        available_qty: 66,
        discount: 8,
        rating: 3.5
    },
    {
        id: 9,
        title: "Product 9",
        price: 34.99,
        cat: { id: 101 },
        description: "This is a description for Product 9.",
        image: "https://picsum.photos/seed/product9/200/300",
        available_qty: 68,
        discount: 11,
        rating: 4
    },
    {
        id: 10,
        title: "Product 10",
        price: 35.99,
        cat: { id: 102 },
        description: "This is a description for Product 10.",
        image: "https://picsum.photos/seed/product10/200/300",
        available_qty: 70,
        discount: 14,
        rating: 4.5
    },
    {
        id: 11,
        title: "Product 11",
        price: 36.99,
        cat: { id: 103 },
        description: "This is a description for Product 11.",
        image: "https://picsum.photos/seed/product11/200/300",
        available_qty: 72,
        discount: 17,
        rating: 3.5
    },
    {
        id: 12,
        title: "Product 12",
        price: 37.99,
        cat: { id: 104 },
        description: "This is a description for Product 12.",
        image: "https://picsum.photos/seed/product12/200/300",
        available_qty: 74,
        discount: 0,
        rating: 4
    },
    {
        id: 13,
        title: "Product 13",
        price: 38.99,
        cat: { id: 101 },
        description: "This is a description for Product 13.",
        image: "https://picsum.photos/seed/product13/200/300",
        available_qty: 76,
        discount: 3,
        rating: 4.5
    },
    {
        id: 14,
        title: "Product 14",
        price: 39.99,
        cat: { id: 102 },
        description: "This is a description for Product 14.",
        image: "https://picsum.photos/seed/product14/200/300",
        available_qty: 78,
        discount: 6,
        rating: 3.5
    },
    {
        id: 15,
        title: "Product 15",
        price: 40.99,
        cat: { id: 103 },
        description: "This is a description for Product 15.",
        image: "https://picsum.photos/seed/product15/200/300",
        available_qty: 80,
        discount: 9,
        rating: 4
    },
    {
        id: 16,
        title: "Product 16",
        price: 41.99,
        cat: { id: 104 },
        description: "This is a description for Product 16.",
        image: "https://picsum.photos/seed/product16/200/300",
        available_qty: 82,
        discount: 12,
        rating: 4.5
    },
    {
        id: 17,
        title: "Product 17",
        price: 42.99,
        cat: { id: 101 },
        description: "This is a description for Product 17.",
        image: "https://picsum.photos/seed/product17/200/300",
        available_qty: 84,
        discount: 15,
        rating: 3.5
    },
    {
        id: 18,
        title: "Product 18",
        price: 43.99,
        cat: { id: 102 },
        description: "This is a description for Product 18.",
        image: "https://picsum.photos/seed/product18/200/300",
        available_qty: 86,
        discount: 2,
        rating: 4
    },
    {
        id: 19,
        title: "Product 19",
        price: 44.99,
        cat: { id: 103 },
        description: "This is a description for Product 19.",
        image: "https://picsum.photos/seed/product19/200/300",
        available_qty: 88,
        discount: 5,
        rating: 4.5
    },
    {
        id: 20,
        title: "Product 20",
        price: 45.99,
        cat: { id: 104 },
        description: "This is a description for Product 20.",
        image: "https://picsum.photos/seed/product20/200/300",
        available_qty: 90,
        discount: 8,
        rating: 3.5
    },
    {
        id: 21,
        title: "Product 21",
        price: 46.99,
        cat: { id: 101 },
        description: "This is a description for Product 21.",
        image: "https://picsum.photos/seed/product21/200/300",
        available_qty: 92,
        discount: 11,
        rating: 4
    },
    {
        id: 22,
        title: "Product 22",
        price: 47.99,
        cat: { id: 102 },
        description: "This is a description for Product 22.",
        image: "https://picsum.photos/seed/product22/200/300",
        available_qty: 94,
        discount: 14,
        rating: 4.5
    },
    {
        id: 23,
        title: "Product 23",
        price: 48.99,
        cat: { id: 103 },
        description: "This is a description for Product 23.",
        image: "https://picsum.photos/seed/product23/200/300",
        available_qty: 96,
        discount: 17,
        rating: 3.5
    },
    {
        id: 24,
        title: "Product 24",
        price: 49.99,
        cat: { id: 104 },
        description: "This is a description for Product 24.",
        image: "https://picsum.photos/seed/product24/200/300",
        available_qty: 98,
        discount: 0,
        rating: 3
    },
    {
        id: 25,
        title: "Product 25",
        price: 50.99,
        cat: { id: 101 },
        description: "This is a description for Product 25.",
        image: "https://picsum.photos/seed/product25/200/300",
        available_qty: 100,
        discount: 3,
        rating: 3.5
    },
    {
        id: 26,
        title: "Product 26",
        price: 51.99,
        cat: { id: 102 },
        description: "This is a description for Product 26.",
        image: "https://picsum.photos/seed/product26/200/300",
        available_qty: 102,
        discount: 6,
        rating: 4
    },
    {
        id: 27,
        title: "Product 27",
        price: 52.99,
        cat: { id: 103 },
        description: "This is a description for Product 27.",
        image: "https://picsum.photos/seed/product27/200/300",
        available_qty: 104,
        discount: 9,
        rating: 4.5
    },
    {
        id: 28,
        title: "Product 28",
        price: 53.99,
        cat: { id: 104 },
        description: "This is a description for Product 28.",
        image: "https://picsum.photos/seed/product28/200/300",
        available_qty: 106,
        discount: 12,
        rating: 2.5
    },
    {
        id: 29,
        title: "Product 29",
        price: 54.99,
        cat: { id: 101 },
        description: "This is a description for Product 29.",
        image: "https://picsum.photos/seed/product29/200/300",
        available_qty: 108,
        discount: 15,
        rating: 5
    },
    {
        id: 30,
        title: "Product 30",
        price: 55.99,
        cat: { id: 102 },
        description: "This is a description for Product 30.",
        image: "https://picsum.photos/seed/product30/200/300",
        available_qty: 110,
        discount: 2,
        rating: 4.5
    }
];