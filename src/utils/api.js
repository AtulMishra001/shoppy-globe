//created a seperate service layer so that adding real backend can bo done from here only.
const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => { //this function fetches all the products
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const fetchProductById = async (id) => { //this function fetches single product by it's id
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return response.json();
};
