import { IconButton, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import doctor1 from "../../assets/doctor1.jpeg";
import doctor2 from "../../assets/doctor2.jpeg";
import doctor3 from "../../assets/doctor3.jpeg";
import doctor4 from "../../assets/doctor4.jpeg";
import doctor5 from "../../assets/doctor5.jpeg";
import doctor6 from "../../assets/doctor6.jpeg";

import DoctorCard from "../DoctorCard";
import { East, West } from "@mui/icons-material";
import { useState } from "react";

const Team = () => {
  const [currentRoll, setCurrentRoll] = useState(window.innerWidth < 600 ? 0 : 1);
  const doctors = [
    {
      imgUrl: doctor1,
      name: "John Smith",
      carrer: "General Practitioner",
      workingSchedule: [
        { day: "Tuesday", time: "6am - 10am" },
        { day: "Friday", time: "8am - 12am" },
      ],
    },
    {
      imgUrl: doctor2,
      name: "Michael Brown",
      carrer: "Cardiologist",
      workingSchedule: [
        { day: "Sunday", time: "4am - 9am" },
        { day: "Wednesday", time: "5am - 10am" },
      ],
    },
    {
      imgUrl: doctor3,
      name: "David Miller",
      carrer: "Pediatrician",
      workingSchedule: [
        { day: "Saturday", time: "7am - 11am" },
        { day: "Monday", time: "10am - 12am" },
      ],
    },
    {
      imgUrl: doctor4,
      name: "Daniel Johnson",
      carrer: "Dermatologist",
      workingSchedule: [
        { day: "Friday", time: "6am - 11am" },
        { day: "Thursday", time: "4am - 9am" },
      ],
    },
    {
      imgUrl: doctor5,
      name: "Jane Doe",
      carrer: "Psychiatrist",
      workingSchedule: [
        { day: "Wednesday", time: "3am - 6am" },
        { day: "Friday", time: "10am - 12am" },
      ],
    },
    {
      imgUrl: doctor6,
      name: "Michael Williams",
      carrer: "Neurologist",
      workingSchedule: [
        { day: "Thursday", time: "8am - 11am" },
        { day: "Monday", time: "2am - 5am" },
      ],
    },
  ];
  const renderdComponent = doctors.map((doctor, i) => {
    if (((currentRoll === 1 && i <= 2) || (currentRoll === 2 && i > 2)) && window.innerWidth > 600) {
      return (
        <DoctorCard
          key={i}
          name={doctor.name}
          carrer={doctor.carrer}
          imgUrl={doctor.imgUrl}
          workingSchedule={doctor.workingSchedule}
        />
      );
    }else if(window.innerWidth < 600 && i === currentRoll){
      return (
        <DoctorCard
          key={i}
          name={doctor.name}
          carrer={doctor.carrer}
          imgUrl={doctor.imgUrl}
          workingSchedule={doctor.workingSchedule}
        />
      );
    }
  });
  return (
    <Grid2 bgcolor={"#f9fdfc"} p={"0 10vw 7rem 10vw"} id="doctors">
      <Typography
        color={"secondary.main"}
        fontWeight={"bold"}
        textAlign={"center"}
        pt={8}
      >
        Our Team
      </Typography>
      <Typography
        color={"blue.main"}
        fontWeight={"bold"}
        fontSize={50}
        lineHeight={1.2}
        textAlign={"center"}
      >
        Our specialized doctor
      </Typography>
      <Grid2 display={"flex"} justifyContent={"space-evenly"} mt={10}>
        {renderdComponent}
      </Grid2>
      <Grid2
        display={"flex"}
        justifyContent={"center"}
        mt={9}
        alignItems={"center"}
        gap={3}
      >
        <IconButton
          onClick={() =>
            setCurrentRoll(window.innerWidth > 600 ? (prev) => (prev == 1 ? prev : prev - 1): (prev) => (prev !== 0 ? prev - 1 : prev))
          }
        >
          <West
            sx={{
              fontSize: currentRoll == (window.innerWidth > 600 ? 1 : 0) ? 20 : 30,
              color: "secondary.main",
            }}
          />
        </IconButton>
        <IconButton
          onClick={() =>
            setCurrentRoll(window.innerWidth > 600 ? (prev) => (prev == 1 ? prev + 1 : prev) : (prev) => (prev !== 5 ? prev + 1 : prev))
          }
        >
          <East
            sx={{
              fontSize: window.innerWidth > 600 ? currentRoll == 1 ? 30 : 20 : currentRoll == 5 ? 20 : 30,
              color: "secondary.main",
            }}
          />
        </IconButton>
      </Grid2>
    </Grid2>
  );
};

export default Team;
