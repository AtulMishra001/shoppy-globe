import { useState, useEffect } from "react";
import { fetchProducts } from "./api.js"; 
// custom hook for fetching product and managing lodaing, error states.
const useFetchProducts = () => { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(); //this is from service layer(api.js)
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []); 
  return { products, loading, error };
};

export default useFetchProducts;
