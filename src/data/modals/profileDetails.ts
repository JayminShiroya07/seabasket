import { Product } from "../products";

export interface profileDetails {
    title: 'cart' | 'order' | 'wishlist' | 'profile',
    items: Product[],
}