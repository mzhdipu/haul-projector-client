import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Users from '../Allusers/Users';

const AllSellers = () => {
      
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}seller-account`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  useTitle('All Sellers')
  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Account Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, i) => <Users key={user._id} user={user} i={i}></Users>) 
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllSellers;