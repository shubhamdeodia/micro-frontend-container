import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
import { useEffect, useState } from "react";
import {
  IconButton,
  ListItemText,
  ListItem,
  List,
  ListItemSecondaryAction,
} from "@material-ui/core";

export default function Todo({ kcService }) {
  const [userData, setUserData] = useState(null);

  const [todos, setTodos] = useState(null);

  useEffect(() => {
    (async function () {
      const requestOptions = {
        headers: { Authorization: `Bearer ${kcService.getToken()}` },
      };

      const userdata = await (
        await fetch(`/api/effectiveuserprofile`, requestOptions)
      ).json();

      const tododata = await (
        await fetch(`api/todoitem`, requestOptions)
      ).json();

      setUserData(userdata);

      setTodos(tododata);
    })();
  }, []);

  console.log(
    "%c 🧛‍♀️: Todo -> userData ",
    "font-size:16px;background-color:#1b9156;color:white;",
    userData
  );

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos?.map((item) => (
        <ListItem key={item.id} role={undefined} dense button>
          <ListItemText id={item.id} primary={item.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
