import shoes from "../assets/homePageImage/shoes.png";
import watch from "../assets/homePageImage/watch.png";
import laptop from "../assets/homePageImage/laptop.png";
import mobile from "../assets/homePageImage/mobile.png";
import woman from "../assets/homePageImage/woman-clothes.png";

export interface Category {
    id: number;
    title: string;
    image : string;
}

export const categories: Category[] = [
    { id: 101, title: "Category 1" , image: shoes},
    { id: 102, title: "Category 2" , image: watch},
    { id: 103, title: "Category 3" , image: mobile},
    { id: 104, title: "Category 4" , image: woman},
    { id: 105, title: "Category 5" , image: laptop},
    { id: 106, title: "Category 6" , image: shoes},
    { id: 107, title: "Category 7" , image: watch},
    { id: 108, title: "Category 8" , image: mobile},
    { id: 109, title: "Category 9" , image: shoes},
    { id: 110, title: "Category 10" , image: woman},
    { id: 111, title: "Category 11" , image: watch},
];