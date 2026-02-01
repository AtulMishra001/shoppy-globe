import React from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  return (
    <div className="container mx-auto">
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h2>
      <ProductList />
    </div>
  );
};

export default Home;
