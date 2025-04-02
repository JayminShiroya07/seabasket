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
        image: "https://picsum.photos/seed/product1/200/300",
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
        image: "https://picsum.photos/seed/product2/200/300",
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
        image: "https://picsum.photos/seed/product3/200/300",
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
        image: "https://picsum.photos/seed/product4/200/300",
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
        image: "https://picsum.photos/seed/product5/200/300",
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
        image: "https://picsum.photos/seed/product6/200/300",
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
        image: "https://picsum.photos/seed/product7/200/300",
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
        image: "https://picsum.photos/seed/product8/200/300",
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
        image: "https://picsum.photos/seed/product9/200/300",
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
        image: "https://picsum.photos/seed/product10/200/300",
        available_qty: 70,
        discount: 14,
        rating: 4.5
    },
    {
        id: 11,
        title: "Motorola Edge 20 Pro",
        price: 36.99,
        cat: { id: 103 },
        description: "This is a description for Motorola Edge 20 Pro.",
        image: "https://picsum.photos/seed/product11/200/300",
        available_qty: 72,
        discount: 17,
        rating: 3.5
    },
    {
        id: 12,
        title: "Asus ROG Phone 5",
        price: 37.99,
        cat: { id: 104 },
        description: "This is a description for Asus ROG Phone 5.",
        image: "https://picsum.photos/seed/product12/200/300",
        available_qty: 74,
        discount: 0,
        rating: 4
    },
    {
        id: 13,
        title: "Nokia XR20",
        price: 38.99,
        cat: { id: 101 },
        description: "This is a description for Nokia XR20.",
        image: "https://picsum.photos/seed/product13/200/300",
        available_qty: 76,
        discount: 3,
        rating: 4.5
    },
    {
        id: 14,
        title: "LG Wing",
        price: 39.99,
        cat: { id: 102 },
        description: "This is a description for LG Wing.",
        image: "https://picsum.photos/seed/product14/200/300",
        available_qty: 78,
        discount: 6,
        rating: 3.5
    },
    {
        id: 15,
        title: "ZTE Axon 30 Ultra",
        price: 40.99,
        cat: { id: 103 },
        description: "This is a description for ZTE Axon 30 Ultra.",
        image: "https://picsum.photos/seed/product15/200/300",
        available_qty: 80,
        discount: 9,
        rating: 4
    },
    {
        id: 16,
        title: "Lenovo Legion Phone Duel 2",
        price: 41.99,
        cat: { id: 104 },
        description: "This is a description for Lenovo Legion Phone Duel 2.",
        image: "https://picsum.photos/seed/product16/200/300",
        available_qty: 82,
        discount: 12,
        rating: 4.5
    },
    {
        id: 17,
        title: "Black Shark 4 Pro",
        price: 42.99,
        cat: { id: 101 },
        description: "This is a description for Black Shark 4 Pro.",
        image: "https://picsum.photos/seed/product17/200/300",
        available_qty: 84,
        discount: 15,
        rating: 3.5
    },
    {
        id: 18,
        title: "Honor Magic 3 Pro",
        price: 43.99,
        cat: { id: 102 },
        description: "This is a description for Honor Magic 3 Pro.",
        image: "https://picsum.photos/seed/product18/200/300",
        available_qty: 86,
        discount: 2,
        rating: 4
    },
    {
        id: 19,
        title: "Meizu 18 Pro",
        price: 44.99,
        cat: { id: 103 },
        description: "This is a description for Meizu 18 Pro.",
        image: "https://picsum.photos/seed/product19/200/300",
        available_qty: 88,
        discount: 5,
        rating: 4.5
    },
    {
        id: 20,
        title: "Micromax IN Note 2",
        price: 45.99,
        cat: { id: 104 },
        description: "This is a description for Micromax IN Note 2.",
        image: "https://picsum.photos/seed/product20/200/300",
        available_qty: 90,
        discount: 8,
        rating: 3.5
    },
    {
        id: 21,
        title: "Tecno Phantom X",
        price: 46.99,
        cat: { id: 101 },
        description: "This is a description for Tecno Phantom X.",
        image: "https://picsum.photos/seed/product21/200/300",
        available_qty: 92,
        discount: 11,
        rating: 4
    },
    {
        id: 22,
        title: "Infinix Zero X Pro",
        price: 47.99,
        cat: { id: 102 },
        description: "This is a description for Infinix Zero X Pro.",
        image: "https://picsum.photos/seed/product22/200/300",
        available_qty: 94,
        discount: 14,
        rating: 4.5
    },
    {
        id: 23,
        title: "Coolpad Cool S",
        price: 48.99,
        cat: { id: 103 },
        description: "This is a description for Coolpad Cool S.",
        image: "https://picsum.photos/seed/product23/200/300",
        available_qty: 96,
        discount: 17,
        rating: 3.5
    },
    {
        id: 24,
        title: "Lava Agni 5G",
        price: 49.99,
        cat: { id: 104 },
        description: "This is a description for Lava Agni 5G.",
        image: "https://picsum.photos/seed/product24/200/300",
        available_qty: 98,
        discount: 0,
        rating: 3
    },
    {
        id: 25,
        title: "iQOO 7 Legend",
        price: 50.99,
        cat: { id: 101 },
        description: "This is a description for iQOO 7 Legend.",
        image: "https://picsum.photos/seed/product25/200/300",
        available_qty: 100,
        discount: 3,
        rating: 3.5
    },
    {
        id: 26,
        title: "Poco F3 GT",
        price: 51.99,
        cat: { id: 102 },
        description: "This is a description for Poco F3 GT.",
        image: "https://picsum.photos/seed/product26/200/300",
        available_qty: 102,
        discount: 6,
        rating: 4
    },
    {
        id: 27,
        title: "Redmi Note 11 Pro",
        price: 52.99,
        cat: { id: 103 },
        description: "This is a description for Redmi Note 11 Pro.",
        image: "https://picsum.photos/seed/product27/200/300",
        available_qty: 104,
        discount: 9,
        rating: 4.5
    },
    {
        id: 28,
        title: "Realme Narzo 50A",
        price: 53.99,
        cat: { id: 104 },
        description: "This is a description for Realme Narzo 50A.",
        image: "https://picsum.photos/seed/product28/200/300",
        available_qty: 106,
        discount: 12,
        rating: 2.5
    },
    {
        id: 29,
        title: "Samsung Galaxy M32",
        price: 54.99,
        cat: { id: 101 },
        description: "This is a description for Samsung Galaxy M32.",
        image: "https://picsum.photos/seed/product29/200/300",
        available_qty: 108,
        discount: 15,
        rating: 5
    },
    {
        id: 30,
        title: "Vivo V21e",
        price: 55.99,
        cat: { id: 102 },
        description: "This is a description for Vivo V21e.",
        image: "https://picsum.photos/seed/product30/200/300",
        available_qty: 110,
        discount: 2,
        rating: 4.5
    }
];