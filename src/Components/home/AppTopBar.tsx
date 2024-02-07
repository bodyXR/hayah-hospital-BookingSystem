import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../features/auth/authSlice.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import CustomButton from "../CustomButton.js";
import NavElement from "../home/NavElement.jsx";
import { useState } from "react";

const AppTopBar = () => {
  const dispatch = useDispatch();
  const [GeneralClicked,setGeneralClicked] = useState(0);
  return (
    <Grid2
      container
      display={"flex"}
      justifyContent={{xs:"center",md:"space-between"}}
      alignContent={"center"}
      p={"0 10vw"}
      mt={{xs:2 , md:0}}
    >
      <Grid2>
        <Typography fontWeight={600} fontSize={"2rem"} color={"blue.main"}>
          El Hayah
        </Typography>
      </Grid2>
      <Grid2 display={"flex"} gap={3} sx={{ mt: "13px" }}>
        <NavElement content="Home" num={1} url="#" GeneralClicked={GeneralClicked} setGeneralClicked={(n:number) => setGeneralClicked(n)}/>
        <NavElement content="Doctor" num={2} url="#doctors" GeneralClicked={GeneralClicked} setGeneralClicked={(n:number) => setGeneralClicked(n)}/>
        <NavElement content="Hosbital" num={3} url="#HowWeWork" GeneralClicked={GeneralClicked} setGeneralClicked={(n:number) => setGeneralClicked(n)}/>
        <NavElement content="Blogs" num={4} url="#Testimorials" GeneralClicked={GeneralClicked} setGeneralClicked={(n:number) => setGeneralClicked(n)}/>
      </Grid2>
      <Grid2 display={"flex"}>
        <CustomButton
          text="Logout"
          color= "blue"
          onSubmit={() => dispatch(setAuthStatus(false))}
        />
      </Grid2>
    </Grid2>
  );
};

export default AppTopBar;
