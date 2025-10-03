import axios from "axios";
import { useState } from "react";

// categories >>
export const categories = [
  { key: "Mobiles", src: "/images/mobile.jpg" },
  { key: "Fashion", src: "/images/fashion.jpg" },
  { key: "Electronics", src: "/images/electronics.jpg" },
  { key: "Home", src: "/images/home.webp" },
  { key: "Beauty", src: "/images/beauty.jpg" },
  { key: "Grocery", src: "/images/grocery.jpg" },
];

// carousel >>
export const carousel = [
  { key: "c1", src: "/images/c1.webp", alt: "Carousel 1" },
  { key: "c2", src: "/images/c2.jpg", alt: "Carousel 2" },
  { key: "c3", src: "/images/c3.jpg", alt: "Carousel 3" },
  { key: "c4", src: "/images/c4.jpeg", alt: "Carousel 4" },
  { key: "c5", src: "/images/c5.jpg", alt: "Carousel 5" },
];
// testube>>
// async function De() {
  //   const res = await axios.get("https://dummyjson.com/products");
  //   const data = await res.data.products;
  //   data.map((item)=>console.log(item.title))
  //   return data.title;
  // }
  
  // // export const products =await De();
  // products >>
export const products = [
  {
    id: 1,
    name: "Wireless-Headphone",
    description: "Noise-cancelling over-ear headphones with 30h battery life.",
    price: 899,
    image: "/images/headphone.jpg",
    category: "Electronics",
    rating: 4.5,
    stock: 12,
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "Latest Android smartphone with 128GB storage and AMOLED display.",
    price: 12999,
    image: "/images/smartphone.webp",
    category: "Electronics",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "Sports-Shoe",
    description: "Lightweight running shoes for men with breathable mesh.",
    price: 1299,
    image: "/images/sport-shoes.jpg",
    category: "Fashion",
    rating: 4.3,
    stock: 25,
  },
  {
    id: 4,
    name: "Office-Chair",
    description:
      "Ergonomic office chair with lumbar support and adjustable height.",
    price: 3999,
    image: "/images/office-chair.webp",
    category: "Furniture",
    rating: 4.6,
    stock: 5,
  },
  {
    id: 5,
    name: "Coffee-Maker",
    description: "Programmable drip coffee maker with reusable filter.",
    price: 2899,
    image: "/images/coffeemaker.webp",
    category: "Home Appliances",
    rating: 4.2,
    stock: 18,
  },
  {
    id: 6,
    name: "Backpack",
    description: "Durable travel backpack with multiple compartments.",
    price: 499,
    image: "/images/bag.jpg",
    category: "Accessories",
    rating: 4.4,
    stock: 30,
  },
  {
    id: 7,
    name: "Gaming-Laptop",
    description: "High-performance laptop with RTX graphics and 16GB RAM.",
    price: 41999,
    image: "/images/laptop.jpg",
    category: "Electronics",
    rating: 4.8,
    stock: 7,
  },
  {
    id: 8,
    name: "Wrist-Watch",
    description: "Water-resistant analog wrist watch with leather strap.",
    price: 2199,
    image: "/images/watch.webp",
    category: "Fashion",
    rating: 4.1,
    stock: 20,
  },
  {
    id: 9,
    name: "Electric-Kettle",
    description: "1.5L stainless steel kettle with auto shut-off feature.",
    price: 1199,
    image: "/images/kettle.webp",
    category: "Home Appliances",
    rating: 4.3,
    stock: 15,
  },
  {
    id: 10,
    name: "Sunglasse",
    description: "UV-protection stylish sunglasses for men and women.",
    price: 399,
    image: "/images/sunglass.webp",
    category: "Accessories",
    rating: 4.0,
    stock: 40,
  },
  {
    id: 11,
    name: "Bookshelf",
    description: "5-tier wooden bookshelf with modern design.",
    price: 599,
    image: "/images/book-shelves.jpg",
    category: "Furniture",
    rating: 4.5,
    stock: 10,
  },
  {
    id: 12,
    name: "Bluetooth-Speaker",
    description: "Portable speaker with deep bass and 10h playtime.",
    price: 1299,
    image: "/images/bluetooth-speaker.webp",
    category: "Electronics",
    rating: 4.6,
    stock: 22,
  },
  // De(),
];
// footer >>

export const footerItems = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Returns", href: "/returns" },
      { name: "Shipping Info", href: "/shipping" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "https://facebook.com" },
      {
        name: "Instagram",
        href: "https://www.instagram.com/debnathdeep766?utm_source=qr&igsh=cnY0aHdvN2MyaHI2",
      },
      { name: "Twitter", href: "https://twitter.com" },
    ],
  },
];
