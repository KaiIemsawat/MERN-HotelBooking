import { Link } from "react-router-dom";

import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div
        className={`${isLoggedIn ? `flex-col lg:flex-row` : `flex-row`} container mx-auto flex justify-between`}
      >
        <span className="text-3xl font-semibold tracking-tight text-[#eaeaea] hover:underline">
          <Link to="/">MernHotels.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center rounded-lg font-bold text-white duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg lg:px-3"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center rounded-lg font-bold text-white duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg lg:px-3"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center rounded-lg bg-blue-100 px-3 font-bold text-blue-400 duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
