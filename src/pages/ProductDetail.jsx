import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { fetchProductById } from "../utils/api";

const ProductDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id); 
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]); 

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert(`${product.title} added to cart!`);
    }
  };


  if (loading)
    return <div className="text-center mt-10 text-xl">Loading details...</div>;

  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">
          Error Loading Product
        </h2>
        <p>{error}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">

        <div className="md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover"
          />

          <div className="flex gap-2 p-4 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                loading="lazy"
                alt="preview"
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>


        <div className="p-8 md:w-1/2 flex flex-col">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {product.title}
          </h1>

          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {product.category}
            </span>
            <span className="ml-4 text-yellow-500 font-bold">
              ★ {product.rating || "4.5"}
            </span>
          </div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto">
            <span className="text-3xl font-bold text-green-600 block mb-4">
              ${product.price}
            </span>

            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
