import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { selectCartItems } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-end">
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/3">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 font-bold transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
