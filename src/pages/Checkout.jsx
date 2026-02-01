import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, selectCartItems } from "../features/cartSlice";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // 1. Validation (Simple check)
    if (!formData.name || !formData.address || !formData.cardNumber) {
      alert("Please fill in all fields");
      return;
    }

    // 2. Success Feedback (Requirement: "Order placed" message)
    alert(
      "Order placed successfully! Thank you for shopping with ShoppyGlobe.",
    );

    // 3. Clear Cart (Requirement: Empty the cart)
    dispatch(clearCart());

    // 4. Redirect (Requirement: Redirect to Home)
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Your cart is empty. redirecting...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: The Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-blue-500 h-24"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Card Number (Fake)
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
                className="w-full p-2 border rounded focus:outline-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h3>
          <div className="flex flex-col gap-3 mb-4 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.quantity} x {item.title}
                </span>
                <span className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total To Pay:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
