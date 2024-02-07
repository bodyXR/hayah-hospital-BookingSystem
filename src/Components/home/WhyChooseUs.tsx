import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import doctors from "../../assets/doctors.png";
import { AccessTimeOutlined, Diversity1Outlined, PaidOutlined } from "@mui/icons-material";

const WhyChooseUs = () => {
  return (
    <Grid2 p={"0 10vw 5rem 10vw"}>
      <Typography
        color={"secondary.main"}
        fontWeight={"bold"}
        textAlign={"center"}
        pt={8}
      >
        Why choose us
      </Typography>
      <Typography
        color={"blue.main"}
        fontWeight={"bold"}
        fontSize={{xs: 35, md: 50}}
        lineHeight={1.2}
        textAlign={"center"}
      >
        Consultation with our <br /> experienced doctors
      </Typography>
      <Grid2 width={{xs: "100%", md: "100%"}}>
        <img src={doctors} style={{ width: "100%" , marginTop:"2rem"}} />
      </Grid2>

      <Grid2 display={"flex"} flexDirection={{xs: "column", md: "row"}} gap={6} position={"relative"} top={{xs:0 , md: -80}}>
        <Grid2
          flex={1}
          bgcolor={"background.default"}
          borderRadius={6}
          p={"0rem 2rem 1rem 2rem"}
          color={"blue.main"}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
          textAlign={"center"}
        >
            <Grid2
            border={"4px white solid"}
            bgcolor={"blue.extraLight"}
            borderRadius={3}
            width={"5rem"}
            height={"5rem"}
            position={"relative"}
            top={"-30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"34%"}
          >
            <Diversity1Outlined sx={{fontSize:"3rem"}}/>
          </Grid2>
          <Typography fontSize={22} fontWeight={"bold"}>
            Specialized doctor
          </Typography>
          <Typography
            fontWeight={400}
            pt={"1rem"}
            color={"primary.light"}
            fontSize={14}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          </Typography>
        </Grid2>
        <Grid2
          flex={1}
          bgcolor={"secondary.main"}
          borderRadius={6}
          p={"0rem 2rem 1rem 2rem"}
          color={"background.default"}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
          textAlign={"center"}
        >
            <Grid2
            border={"4px white solid"}
            bgcolor={"secondary.main"}
            borderRadius={3}
            width={"5rem"}
            height={"5rem"}
            position={"relative"}
            top={"-30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"34%"}
          >
            <AccessTimeOutlined sx={{fontSize:"3rem"}}/>
          </Grid2>
          <Typography fontSize={22} fontWeight={"bold"}>
            24/7 emergancy services
          </Typography>
          <Typography fontWeight={400} pt={"1rem"} fontSize={14}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          </Typography>
        </Grid2>
        <Grid2
          flex={1}
          bgcolor={"background.default"}
          borderRadius={6}
          p={"0rem 2rem 1rem 2rem"}
          color={"blue.main"}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
          textAlign={"center"}
        >
          <Grid2
            border={"4px white solid"}
            bgcolor={"blue.extraLight"}
            borderRadius={3}
            width={"5rem"}
            height={"5rem"}
            position={"relative"}
            top={"-30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"34%"}
          >
            <PaidOutlined sx={{fontSize:"3rem"}}/>
          </Grid2>
          <Typography fontSize={22} fontWeight={"bold"}>
            discount offer for poor
          </Typography>
          <Typography
            fontWeight={400}
            pt={"1rem"}
            fontSize={14}
            color={"primary.light"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          </Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WhyChooseUs;
