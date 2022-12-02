import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div className="section-container">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/allbuyers">All Buyers</Link>
              </li>
              <li>
                <Link to="/dashboard/allseller">All Seller</Link>
              </li>
              <li>
                <Link to="/dashboard/products">Products</Link>
              </li>
              <li>
                <Link to="/dashboard/order">Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/payment">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoutes;
