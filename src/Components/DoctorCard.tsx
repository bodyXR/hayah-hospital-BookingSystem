import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDoctorDetails } from "../features/doctor/doctorSlice.jsx";
import { DOCTOR_INFOS_ROUTE } from "../routes/paths.ts";

interface DoctorCardProps {
  name: String;
  carrer: String;
  workingSchedule: Object;
  imgUrl: string;
}

const DoctorCard = ({
  name,
  carrer,
  workingSchedule,
  imgUrl,
}: DoctorCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function clicked() {
    dispatch(addDoctorDetails(name, carrer, workingSchedule, imgUrl));
    navigate(`${DOCTOR_INFOS_ROUTE}/${name.replace(" ", "")}`)
  }
  return (

      <Grid2
        borderRadius={"15px"}
        sx={{
          bgcolor: "background.default",
          p: "40px 40px 0 40px",
          boxShadow: "0px 0px 30px -14px rgba(0,0,0,0.51)",
          // transition: "0.5s all",
          // "&:hover": { bgcolor: "#d2d2d2", transform: "scale(1.03)" },
        }}
      >
        <img
          src={imgUrl}
          style={{
            height: "16rem",
            width: "16rem",
            objectPosition: "top",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <Typography
          mt={3}
          color={"blue.main"}
          fontWeight={"bold"}
          fontSize={27}
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Typography
          fontWeight={500}
          ml={1}
          fontSize={19}
          sx={{ textDecoration: "none" }}
          color={"blue.light"}
          textAlign={"center"}
        >
          {carrer}
        </Typography>
        <Button
          sx={{
            border: "2px #1F2B6C solid",
            bgcolor: "background.default",
            color: "blue.main",
            p: "1rem 3.4rem",
            position: "relative",
            top: 30,
            left: 21,
            boxShadow: "0px 0px 30px -14px rgba(0,0,0,0.51)",
            "&:hover": { bgcolor: "secondary.main" , borderColor:"secondary.main",color:"background.default"},
            fontWeight:"bold",
            fontSize:19
          }}
          onClick={()=>clicked()}
        >
          Book Now
        </Button>
      </Grid2>
  );
};

export default DoctorCard;
