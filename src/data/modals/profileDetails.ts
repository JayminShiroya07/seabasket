import { Product } from "../products";

export interface profileDetails {
    title: 'Cart' | 'Order' | 'Wishlist' | 'Profile',
    items: Product[],
}