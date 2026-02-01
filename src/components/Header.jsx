import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCartTotalCount} from "../features/cartSlice.js"
const Header = () => {
  const cartItems = useSelector(selectCartTotalCount);
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShoppyGlobe
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/cart" className="hover:text-blue-200 font-semibold">
            Cart- {cartItems}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
