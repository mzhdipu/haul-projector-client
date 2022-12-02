import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import Users from "./Users";
// import { useLoaderData } from "react-router-dom";

const Allusers = () => {
    
  const [users, setUser] = useState([]);
  useTitle('All Users')
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}users`,{
      headers : {
        authorization : `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  

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

export default Allusers;
