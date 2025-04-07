export interface Product {
    id: number;
    title: string;
    price: number;
    cat: {
        id: number;
    };
    description: string;
    images: Array<string>;
    available_qty: number;
    discount: number;
    rating: number;
    specifications: {
        size: Array<string>,
        colors:Array<string>,
        weight: string

    };
}

export const products: Product[] = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        cat: { id: 1 },
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        images: [
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        ],
        available_qty: 120,
        discount: 10,
        rating: 3.9,
        specifications: {
            colors: ["black", "blue"],
            size: ["15L"],
            weight: "1.2kg"
        }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        cat: { id: 2 },
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        images: [
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        ],
        available_qty: 259,
        discount: 20,
        rating: 4.1,
        specifications: {
            colors: ["black", "red", "white"],
            size: ["S", "M", "L", "XL"],
            weight: "0.3kg"
        }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        cat: { id: 2 },
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        images: [
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        ],
        available_qty: 500,
        discount: 15,
        rating: 4.7,
        specifications: {
            colors: ["green", "brown"],
            size: ["M", "L", "XL", "XXL"],
            weight: "1.5kg"
        }
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 3000,
        cat: { id: 2 },
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        images: [
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        ],
        available_qty: 40,
        discount: 50,
        rating: 2.1,
        specifications: {
            colors: ["gray", "blue"],
            size: ["S", "M", "L"],
            weight: "0.4kg"
        }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 2500,
        cat: { id: 3 },
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        images: [
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        ],
        available_qty: 400,
        discount: 70,
        rating: 4.6,
        specifications: {
            colors: ["gold", "silver"],
            size: ["one size"],
            weight: "0.2kg"
        }
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 1699,
        cat: { id: 3 },
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        images: [
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        ],
        available_qty: 70,
        discount: 30,
        rating: 3.9,
        specifications: {
            colors: ["goldenrod","silver"],
            size: [],
            weight: "0.1kg"
        }
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        cat: { id: 3 },
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        images: [
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        ],
        available_qty: 400,
        discount: 0,
        rating: 3,
        specifications: {
            colors: ["white", "gold"],
            size: ["one size"],
            weight: "0.05kg"
        }
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        cat: { id: 3 },
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        images: [
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        ],
        available_qty: 100,
        discount: 0,
        rating: 1.9,
        specifications: {
            colors: ["rose gold"],
            size: ["one size"],
            weight: "0.02kg"
        }
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        cat: { id: 4 },
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        images: [
            "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        ],
        available_qty: 203,
        discount: 0,
        rating: 3.3,
        specifications: {
            colors: ["black","gray"],
            size: ["2TB"],
            weight: "0.23kg"
        }
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        cat: { id: 4 },
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        images: [
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        ],
        available_qty: 0,
        discount: 0,
        rating: 2.9,
        specifications: {
            colors: ["black"],
            size: ["1TB","512"],
            weight: "0.1kg"
        }
    }
];
