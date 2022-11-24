import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = () => {
    return (
        <>
            <li><Link to='/home'>Home</Link></li>
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
                  <li><Link to='/wireless-projectors'>3Wireless Projectors</Link></li>
                  <li><Link to='/led-projectors'>Led Projectors</Link></li>
                  <li><Link to='/full-hd-projectors'>Full Hd Projectors</Link></li>
                </ul>
              </li>

              <li><Link to='/faq'>FAQ</Link></li>
        </>
    );
};

export default MenuItems;