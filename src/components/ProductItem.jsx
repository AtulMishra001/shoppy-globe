import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`); 
  };

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="flex-1">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy" //loading images with lazy loading
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <span className="text-green-600 font-bold text-xl">
            ${product.price}
          </span>
        </div>
      </Link>

      <div className="p-4 pt-0 mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
