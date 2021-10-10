import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
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
  return <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />;
};

export default UserPage;
