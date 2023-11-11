import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function Loader() {
  const open = useState(true);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <br />
        <Typography variant="h6" sx={{ padding: 2 }}>
          Please wait...
        </Typography>
      </Backdrop>
    </div>
  );
}
