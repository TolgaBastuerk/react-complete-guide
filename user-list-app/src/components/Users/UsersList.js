import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const usersList = props.users.map((user) => {
    return (
      <li key={user.id}>
        {user.name} ({user.age} years old)
      </li>
    );
  });

  return (
    <Card className={classes.users}>
      {props.users.length > 0 && <ul>{usersList}</ul>}
    </Card>
  );
};

export default UsersList;
