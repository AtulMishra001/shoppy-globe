import React from "react";
import { useSelector } from "react-redux";
import useFetchProducts from "../utils/useFetchProducts";
import ProductItem from "./ProductItem";
import { selectSearchQuery } from "../features/productSlice";
import Loading from "./Loading";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  const searchQuery = useSelector(selectSearchQuery);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductList;
