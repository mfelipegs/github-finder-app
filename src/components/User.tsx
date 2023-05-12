import React from "react";
import { UserProps } from "../types/user";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return <div>
    <img src={avatar_url} alt={login} />
  </div>;
};

export default User;
