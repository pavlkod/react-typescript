import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}
const UserItem: FC<UserItemProps> = props => {
  return (
    <div
      style={{ padding: 15, border: "1px solid #000" }}
    >{`${props.user.name} (${props.user.email}) in ${props.user.address.city}.${props.user.address.street} (${props.user.address.zipcode})`}</div>
  );
};

export default UserItem;
