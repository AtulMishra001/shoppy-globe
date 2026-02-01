import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b py-4">

      <div className="flex items-center gap-4 w-1/2">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-bold text-gray-800">{item.title}</h3>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
          className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={item.quantity <= 1} 
        >
          -
        </button>
        <span className="font-semibold w-6 text-center">{item.quantity}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
          className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>


      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700 font-medium ml-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
