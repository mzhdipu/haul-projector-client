import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Root/Contexts/AuthProvider";

const MenuItems = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link className="justify-between">
          Categories
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-2 z-30 bg-white">
          <li>
            <Link to="/wireless-projectors">3Wireless Projectors</Link>
          </li>
          <li>
            <Link to="/led-projectors">Led Projectors</Link>
          </li>
          <li>
            <Link to="/full-hd-projectors">Full Hd Projectors</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/faq">FAQ</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/add-products">Add Products</Link>
          </li>

          <li>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                style={{ height: "40px" }}
                className="rounded-full"
              />
            ) : (
              // <Image
              //     style={{ height: '30px' }}
              //     roundedCircle
              //     src={user?.photoURL}>
              // </Image>
              <Link onClick={handleLogOut}>
                <FaUserAlt />
              </Link>
            )}
          </li>

          <li onClick={handleLogOut} className="font-semibold">
            <Link>Logout</Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/signin">Login</Link>
        </li>
      )}
    </>
  );
};

export default MenuItems;
