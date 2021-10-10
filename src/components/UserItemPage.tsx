import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { IUser } from "../types/types";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState({} as IUser);

  const { id } = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Page for user {user.name}</h1>
      {JSON.stringify(user, null, 2)}
      <button onClick={() => history.push("/users")}>Back</button>
    </div>
  );
};

export default UserItemPage;
