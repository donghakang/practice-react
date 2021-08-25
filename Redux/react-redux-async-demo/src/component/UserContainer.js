import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return users.loading ? (
    <div>Loading... </div>
  ) : users.error ? (
    <div>{users.error}</div>
  ) : (
    <div>
      <h2>user list</h2>
      <ul>
        {users.users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserContainer;
