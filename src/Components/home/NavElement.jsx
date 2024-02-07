import { Link, Typography } from "@mui/material";
import { useState } from "react";

const NavElement = (props) => {
  const [clicked, setClicked] = useState(false);

  function onClick() {
    setClicked(true);
  }

  return (
    <Typography
      fontWeight={700}
      fontSize={"1.2rem"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Link
        href={props.url}
        sx={{
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": { color: "secondary.light" },
          transition: "0.4s all",
          letterSpacing: "0.11rem",
          color: "primary.light",
        }}
        onClick={() => onClick()}
      >
        {props.content}
      </Link>
    </Typography>
  );
};

export default NavElement;
