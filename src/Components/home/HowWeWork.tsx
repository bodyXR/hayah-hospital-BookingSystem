import { ArrowOutward, Email, WheelchairPickup } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Fab, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const HowWeWork = () => {
  return (
    <Grid2 bgcolor={"#f9fdfc"} p={"0 10vw 7rem 10vw"} id="HowWeWork">
      <Typography
        color={"secondary.main"}
        fontWeight={"bold"}
        textAlign={"center"}
        pt={8}
      >
        How we works
      </Typography>
      <Typography
        color={"blue.main"}
        fontWeight={"bold"}
        fontSize={{xs: 35, md: 50}}
        lineHeight={1.2}
        textAlign={"center"}
        mt={{xs: 3, md: 0}}
      >
        Quick Solutions <br /> for best treatment
      </Typography>
      <Grid2 display={"flex"} flexDirection={{xs: "column", md: "row"}} gap={6} mt={5}>
        <Grid2
          flex={1}
          bgcolor={"background.default"}
          height={"min-content"}
          borderRadius={6}
          p={"4rem"}
          pt={"2rem"}
          pb={{xs:"2rem",md:"2rem"}}
          color={"blue.main"}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
        >
          <WheelchairPickup sx={{ fontSize: 60 }} />
          <Typography fontSize={22} fontWeight={"bold"}>
            Find Best Doctor
          </Typography>
          <Typography fontWeight={"bold"} p={"1rem 2rem 0rem 0"} color={"primary.light"} fontSize={14}>
            We always provide the best doctor for you
          </Typography>
          <Fab
            sx={{
              backgroundColor: "blue.extraLight",
              color: "blue.main",
              left:"90%",
            }}
          >
            <ArrowOutward />
          </Fab>
        </Grid2>
        <Grid2
          flex={1}
          bgcolor={"secondary.main"}
          color={"background.default"}
          mt={{xs:0,md:5}}
          height={"min-content"}
          borderRadius={6}
          p={"4rem"}
          pt={"2.5rem"}
          pb={{xs:"2rem",md:"1.5rem"}}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
        >
          <DriveFileRenameOutlineIcon sx={{ fontSize: 60 }} />
          <Typography fontSize={"100%"} fontWeight={"bold"}>
            Make an appointment
          </Typography>
          <Typography fontWeight={"bold"} p={"1rem 2rem 0rem 0"} fontSize={17}>
            Schedul your time with your doctor
          </Typography>
          <Fab
            sx={{
              backgroundColor: "background.default",
              color: "secondary.main",
              left:"90%",
              mt: "1rem",
            }}
          >
            <ArrowOutward />
          </Fab>
        </Grid2>
        <Grid2
          flex={1}
          bgcolor={"background.default"}
          height={"min-content"}
          borderRadius={6}
          p={"4rem"}
          pt={"2.5rem"}
          pb={{xs:"2rem",md:"1.5rem"}}
          color={"blue.main"}
          mt={{xs:0,md:10}}
          boxShadow="0px 0px 20px -5px rgba(0,0,0,0.51)"
        >
          <Email sx={{ fontSize: 60 }} />
          <Typography fontSize={22} fontWeight={"bold"}>
            Take prescription
          </Typography>
          <Typography fontWeight={"bold"} p={"1rem 2rem 0rem 0"} fontSize={14} color={"primary.light"}>
            Take your prescription which your doctor gave
          </Typography>
          <Fab
            sx={{
              backgroundColor: "blue.extraLight",
              color: "blue.main",
              left:"90%",
            }}
            aria-label="go"
          >
            <ArrowOutward />
          </Fab>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default HowWeWork;
