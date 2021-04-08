import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};
