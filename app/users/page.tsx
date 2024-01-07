import React from "react";

interface User {
  name: string;
  id: number;
}

const Users = async () => {
  const results = await fetch("https://jsonplaceholder.typicode.com/users", {});
  const users: User[] = await results.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
