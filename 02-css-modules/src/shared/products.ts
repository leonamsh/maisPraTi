// src/shared/products.ts
export type Product = {
  id: string;
  title: string;
  price: number;
  rating: number;
  tag?: "Novo" | "Promo";
  image: string; // URL 512x512 temática do produto
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Cafeteira Inox 700ml",
    price: 199.9,
    rating: 4.6,
    tag: "Novo",
    // café/coffeemaker
    image:
      "https://images.unsplash.com/photo-1590780640388-50705ed6c7b5?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Fone Bluetooth ANC",
    price: 399.0,
    rating: 4.8,
    tag: "Promo",
    // headphones/anc
    image:
      "https://images.unsplash.com/photo-1674989844487-722ec77b9b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9uZSUyMEJMdWV0b290aHxlbnwwfHwwfHx8MA%3D%3D2",
  },
  {
    id: "3",
    title: "Teclado Mecânico 65%",
    price: 499.0,
    rating: 4.7,
    // mechanical keyboard
    image:
      "https://images.unsplash.com/photo-1606075014584-5ccf554b50db?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: 'Monitor 27" QHD 165Hz',
    price: 1899,
    rating: 4.5,
    // monitor/desk setup
    image:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "SSD NVMe 1TB PCIe 4",
    price: 429.9,
    rating: 4.9,
    tag: "Promo",
    // ssd/nvme/pcie
    image:
      "https://images.unsplash.com/photo-1686705562930-4f3e46f620d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Mouse Ergo Sem Fio",
    price: 249.0,
    rating: 4.2,
    // ergonomic mouse/wireless mouse
    image:
      "https://images.unsplash.com/photo-1755373255602-c030aac3bc69?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D6",
  },
];
