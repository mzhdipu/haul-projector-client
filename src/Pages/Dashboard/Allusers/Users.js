import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Root/Contexts/AuthProvider";

const Users = ({ user, i }) => {
    
    return (
    <>
      <tr>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.accountType}</td>
        <td>
        <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">Click</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link>Delete</Link></li>
                <li><Link>Ads</Link></li>
            </ul>
        </div>
        </td>
      </tr>
    </>
  );
};

export default Users;
