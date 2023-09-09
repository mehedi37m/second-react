import React, { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
      
  }, []);

  return (
    <div>
      <p>user : {user.length} </p>
    </div>
  );
}

export default User;
