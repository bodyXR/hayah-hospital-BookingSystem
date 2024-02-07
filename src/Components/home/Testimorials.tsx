import { IconButton, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import man from "../../assets/man.jpg";
import man2 from "../../assets/man2.jpeg";
import man3 from "../../assets/man3.jpeg";
import stars from "../../assets/stars.png";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const Testimorials = () => {
    const [currentIndex,setCurrentIndex] = useState(1);
    const clients = [
        {img : man , name: "James Hary" , shortDiscription : "High Quality Service", longDiscription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumadipisci minus ullam alias fugiat? Saepe dicta explicabo consectetur,magnam dolores modi expedita."},
        {img : man2 , name: "Rodriguez Millo" , shortDiscription : "Very Good Experience", longDiscription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere voluptatibus non id ex ratione rerum rem! Adipisci, similique?"},
        {img : man3 , name: "Mohamed Hussien" , shortDiscription : "Highly recommended", longDiscription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati temporibus molestias, saepe omnis, esse maxime pariatur labore rem expedita atque facilis consequatur est eveniet!"},
    ]
  return (
    <Grid2
      p={"0 10vw 7rem 10vw"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      id="Testimorials"
    >
      <Typography
        color={"secondary.main"}
        fontWeight={"bold"}
        textAlign={"center"}
        pt={8}
      >
        Testimorials
      </Typography>
      <Typography
        color={"blue.main"}
        fontWeight={"bold"}
        fontSize={50}
        lineHeight={1.2}
        textAlign={"center"}
      >
        What our clients said us
      </Typography>

      <Grid2
        bgcolor={"background.default"}
        borderRadius={6}
        p={"0rem 2rem 1rem 2rem"}
        color={"blue.main"}
        boxShadow="0px 15px 20px -5px rgba(0,0,0,0.51)"
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
        width={{xs: "20rem", md: "40rem"}}
      >
        <Grid2
          border={"4px white solid"}
          width={{xs: "8rem", md: "10rem"}}
          height={"5rem"}
          position={"relative"}
          top={"-30px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}

        >
          <img
            src={clients[currentIndex].img}
            style={{ width: "100%", borderRadius: "10px", marginTop: "3rem" }}
          />
        </Grid2>
        <Typography
          color={"blue.main"}
          fontWeight={"bold"}
          fontSize={{xs:28,md:30}}
          pt={6}
          textAlign={"center"}
        >
          {clients[currentIndex].name}
        </Typography>
        <Typography
          fontWeight={400}
          pt={"1rem"}
          color={"primary.light"}
          fontSize={14}
          p={"0"}
          mb={1}
        >
          {clients[currentIndex].shortDiscription}
        </Typography>
        <Grid2 width={{xs: "9rem", md: "20rem"}}>
          <img src={stars} style={{ width: "100%", borderRadius: "10px" }} />
        </Grid2>
        <Typography
          fontWeight={400}
          pt={"1rem"}
          color={"primary.light"}
          fontSize={14}
          width={{xs: "18rem", md: "30rem"}}
        >
          {clients[currentIndex].longDiscription}
        </Typography>
      </Grid2>
      <Grid2 display={"flex"} gap={10} mt={3}>
        <IconButton onClick={()=>setCurrentIndex((prev) => prev != clients.length -1 ? prev + 1 : 0 )}>
            <KeyboardArrowLeft sx={{color:"secondary.main"}}/>
        </IconButton>
        <IconButton onClick={()=>setCurrentIndex((prev) => prev != 0 ? prev - 1 : clients.length -1 )}>
            <KeyboardArrowRight sx={{color:"secondary.main"}}/>
        </IconButton>
      </Grid2>
    </Grid2>
  );
};

export default Testimorials;
