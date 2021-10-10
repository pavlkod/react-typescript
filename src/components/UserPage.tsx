import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUsers();
  }, []);
  const clickUser = (user: IUser) => {
    history.push(`/users/${user.id}`);
  };
  return (
    <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} onClick={clickUser} />} />
  );
};

export default UserPage;
