import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Hero = () => {
  return (
      <Grid2 display={"flex"} id="home" p={"0 10vw"}>
        <Grid2 mt={{xs:6,sm:9}} >
            <Typography color={"secondary.main"} fontWeight={"bold"} mb={1}>Welcome to El Hayah Hospital</Typography>
            <Typography color={"blue.main"} fontWeight={"bold"} mt={{xs:3,md:0}} fontSize={{xs:40,lg:84}} width={{xs:"20rem",lg:"47rem"}} lineHeight={1.2}>Nothing is more important than your Health</Typography>
            <Typography color={"blue.main"} width={{xs:"20rem",md:"30rem"}} fontSize={22} mt={{xs:3,md:1}}>
                We will give you proper medical care service within a reasonable cost
                via specialist doctor.
            </Typography>
            <Grid2 display={"flex"} mt={5} mb={{xs:7,md:0}} justifyContent={{xs:"space-around",md:"none"}} >
                <Grid2 mr={{xs:0,md:9}} flex={1}>
                    <Typography fontSize={30} fontWeight={"bold"} color={"blue.main"}>1280+</Typography>
                    <Typography color={"blue.main"}>Patient capacity</Typography>
                </Grid2>
                <Grid2 mr={{xs:0,md:9}} flex={1}>
                    <Typography fontSize={30} fontWeight={"bold"} color={"blue.main"}>760+</Typography>
                    <Typography color={"blue.main"}>Successful Surgery</Typography>
                </Grid2>
                <Grid2 mr={{xs:0,md:9}} flex={1}>
                    <Typography fontSize={30} fontWeight={"bold"} color={"blue.main"}>600+</Typography>
                    <Typography color={"blue.main"}>Quality Doctor</Typography>
                </Grid2>
            </Grid2>
        </Grid2>
        <Grid2 display={{xs:"none" , md:"block"}}>
            <img src="https://th.bing.com/th/id/R.cdd8f19bd087798d68a789f1870152cc?rik=s58smAdzwrUvLQ&pid=ImgRaw&r=0"  style={{ height: "40.5rem"}} />
        </Grid2>
    </Grid2>
  );
};

export default Hero;
