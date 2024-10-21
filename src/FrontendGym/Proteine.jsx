import React from 'react';
import Img from '../Image/proten1.jpg'

export default function Proteine() {

     const products =[
      {
        name: "Protein 100% Green",
        image: Img, 
        price: 85,
        description: "Maecenas Tempus, Sem Quam Semper Libero.",
    },
    {
        name: "Protein 100% Purple",
        image: "path/to/purple-protein-image.png", 
        price: 85,
        description: "Maecenas Tempus, Sem Quam Semper Libero.",
    },
    {
        name: "Protein 100% Blue",
        image: "path/to/blue-protein-image.png", 
        price: 85,
        description: "Maecenas Tempus, Sem Quam Semper Libero.",
    },
     ]
  return (
    <div className="protein-products-section">
            <h2 className="title">Protein Products</h2>
            <p className="subtitle">See Our Latest Protein Products</p>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
  )
}
