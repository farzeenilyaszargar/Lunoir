export interface Prods {
    id: number;
    name: string;
    price: number;
    color?: string;
    tcolor?: string;
    badge: string;
    image: string;
    rating?: number;
    totalReviews?: number;
    sizes: string[];
}


export const products:Prods[] = [
  { id: 1, name: 'Rosy Posies', price: 799, color: 'Jet Blue', tcolor: 'blue-200', badge: 'Best Seller', image: '/images/shirts/1.jpeg', rating: 4.3, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 2, name: 'Flower Warrior', price: 899, color: 'Bone', tcolor: 'blue-200', badge: 'Limited', image: '/images/shirts/2.jpeg', rating: 3.9, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 3, name: 'Ocean and Life', price: 699, color: 'White', tcolor: 'red-200', badge: 'New', image: '/images/shirts/3.jpeg', rating: 4.8, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL', 'XXL'], },
  { id: 4, name: 'Poppies and Cherries', price: 849, color: 'Jet Blue', tcolor: 'blue-50', badge: 'Hot', image: '/images/shirts/4.jpeg', rating: 4.5, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 5, name: 'Off White Floral', price: 799, color: 'Creamy White', tcolor: 'blue-50', badge: 'Best Seller', image: '/images/shirts/5.jpeg', rating: 4.7, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 6, name: 'Oh My Stars', price: 899, color: 'Bluey Blue', tcolor: 'blue-50', badge: 'Limited', image: '/images/shirts/6.jpeg', rating: 4.2, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 8, name: 'Floral King', price: 849, color: 'Off White', tcolor: 'blue-50', badge: 'Hot', image: '/images/shirts/8.jpeg', rating: 4.9, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
]