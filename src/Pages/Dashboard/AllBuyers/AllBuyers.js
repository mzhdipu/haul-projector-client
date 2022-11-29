import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Users from '../Allusers/Users';

const AllBuyers = () => {
      
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}/buyer-account`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useTitle('All Buyers')

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

export default AllBuyers;