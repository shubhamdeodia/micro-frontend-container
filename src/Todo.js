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
  const [data, setData] = useState();

  console.log(
    "%c 🦓: Todo ->   kcService.getToken() ",
    "font-size:16px;background-color:#85e493;color:black;",
    kcService.getToken()
  );
  useEffect(() => {
    (async function () {
      const requestOptions = {
        headers: { Authorization: `Bearer ${kcService.getToken()}` },
      };

      const data = await (
        await fetch(`/api/effectiveuserprofile`, requestOptions)
      ).json();

      console.log(
        "%c 🧦: Todo -> data ",
        "font-size:16px;background-color:#53b04a;color:white;",
        data
      );
      setData(data);
    })();
  }, []);

  return (
    <span>Todo</span>
    // <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    //   {data?.map((item) => (
    //     <ListItem key={item.id} role={undefined} dense button>
    //       <ListItemText id={item.id} primary={item.title} />
    //       <ListItemSecondaryAction>
    //         <IconButton edge="end" aria-label="comments">
    //           <CommentIcon />
    //         </IconButton>
    //       </ListItemSecondaryAction>
    //     </ListItem>
    //   ))}
    // </List>
  );
}
