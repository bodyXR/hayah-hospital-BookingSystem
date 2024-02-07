import { TextField, Typography } from "@mui/material";
import { selectDoctorDetails } from "../features/doctor/doctorSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomButton from "../Components/CustomButton.js";
import { nanoid } from "@reduxjs/toolkit";
import stars from "../assets/stars.png";
import { useState } from "react";
import { addBook } from "../features/doctor/doctorSlice.jsx";
import { selectAllUsers } from "../features/users/usersSlice.jsx";
import { selectUsername } from "../features/auth/authSlice.jsx";
const DoctorInfos = () => {
  const users: any = useSelector(selectAllUsers);
  const Currentusername: any = useSelector(selectUsername);
  let role: string = "";
  users.map((user: any) => {
    if (user.uName == Currentusername) {
      role = user.role;
    }
  });
  const details: any = useSelector(selectDoctorDetails);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const phoneChanged = (e: any) => setPhone(e.target.value);
  const nameChanged = (e: any) => setName(e.target.value);

  function Submit() {
    if (name && phone) {
      dispatch(addBook(name, phone));
      setName("");
      setPhone("");
    }
  }

  console.log(details[1]);

  return (
    <Grid2
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={
        role == "user"
          ? { xs: "center", md: "space-evenly" }
          : { xs: "center", md: "start" }
      }
      >
      <div className="green-circle"></div>
      <div className="blue-circle"></div>
      {/* Doctor Card */}
      <Grid2
        display={"flex"}
        p={"3rem 4rem"}
        bgcolor={"background.default"}
        boxShadow={"0px 0px 30px -14px rgba(0,0,0,0.51)"}
        m={4}
        alignItems={"center"}
        borderRadius={4}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <img
          src={details[1].imgUrl}
          style={{
            height: "10rem",
            width: "10rem",
            objectPosition: "top",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <Grid2 ml={{ xs: 0, md: 2 }} mt={{xs:2,md:0}}>
          <Typography
            color={"blue.main"}
            fontWeight={"bold"}
            fontSize={{ xs: 30, md: 39 }}
            textAlign={{ xs: "center", md: "start" }}
          >
            {details[1].name}
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "start" }}
            fontWeight={500}
            ml={1}
            fontSize={22}
            sx={{ textDecoration: "none" }}
            color={"blue.light"}
          >
            {details[1].carrer}
          </Typography>
          <img src={stars} style={{ width: "15rem" }} />
        </Grid2>
      </Grid2>
      {/* working schedule */}
      <Grid2
        display={"flex"}
        flexDirection={"column"}
        p={{ xs: "2rem 3rem", md: "3rem 5rem" }}
        bgcolor={"background.default"}
        boxShadow={"0px 0px 25px -10px rgba(0,0,0,0.51)"}
        m={4}
        mt={{ xs: 2, md: 4 }}
        borderRadius={4}
      >
        <Typography
          color={"blue.main"}
          fontWeight={"bold"}
          fontSize={{ xs: 26, md: 39 }}
          mb={{ xs: 2, md: 0 }}
        >
          Working Schedule :
        </Typography>
        {details[1].workSchedule.map((day: any) => (
          <Grid2 key={nanoid()}>
            <Typography
              display={"inline-block"}
              color={"primary.dark"}
              mr={2}
              fontWeight={"bold"}
              fontSize={{ xs: "1.3rem", sm: "2rem" }}
            >
              {day.day} :
            </Typography>
            <Typography
              fontSize={{ xs: "1.3rem", sm: "2rem" }}
              display={"inline-block"}
              color={"primary.dark"}
              fontWeight={"bold"}
            >
              {day.time}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
      {/* Booking form */}
      <Grid2
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        bgcolor={"background.default"}
        boxShadow={"0px 0px 30px -14px rgba(0,0,0,0.51)"}
        mb={{ xs: 4, md: 9 }}
        ml={{ xs: 0, md: 4 }}
        borderRadius={4}
        p={{ xs: "1rem 0rem", md: "0.5rem 2rem" }}
        width={{ xs: "85%" ,md : "auto"}}
      >
        <Typography
          alignSelf={"center"}
          fontSize={{ xs: "1.5rem" }}
          mt={{ xs: 2, md: 1 }}
        >
          Book for Dr.{details[1].name}
        </Typography>

        <Grid2 padding={"2rem"}>
          <TextField
            label="name"
            variant="standard"
            fullWidth
            value={name}
            onChange={nameChanged}
          />
          <TextField
            label="phone"
            variant="standard"
            fullWidth
            type="number"
            sx={{ mt: "1.5rem" }}
            value={phone}
            onChange={phoneChanged}
          />
          <CustomButton text="Book" onSubmit={() => Submit()} color="blue" />

          <Typography
            alignSelf={"center"}
            mt={"1rem"}
            fontWeight={"bold"}
            fontSize={{ xs: 15, md: 16 }}
          >
            Note : Your Booking number will be{" "}
            {details[0].map((doctor: any) => {
              return doctor.name == details[1].name
                ? doctor.booksDetails.length + 1
                : "";
            })}
          </Typography>
        </Grid2>
      </Grid2>
      {role == "admin" && (
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"background.default"}
          boxShadow={"0px 0px 30px -14px rgba(0,0,0,0.51)"}
          mb={9}
          ml={{ xs: 0, md: 6 }}
          p={{ xs: "3rem 2rem", md: "3rem 5rem" }}
          width={{ xs: "85%"  ,md : "auto"}}
          borderRadius={4}
        >
          <Typography color={"blue.main"} fontWeight={"bold"} fontSize={39}>
            Books Details:
          </Typography>
          {details[0].map((doctor: any) =>
            doctor.booksDetails.length === 0 &&
            doctor.name === details[1].name ? (
              <Typography
                textAlign={"center"}
                mt={{xs:4,md:10}}
                fontSize={25}
                fontWeight={"bold"}
              >
                There is no Books!
              </Typography>
            ) : (
              doctor.booksDetails.map((book: any, i: number) => {
                return doctor.name === details[1].name ? (
                  <Grid2 key={nanoid()}>
                    <Typography
                      display={"inline-block"}
                      color={"primary.dark"}
                      mr={2}
                      fontWeight={"bold"}
                      fontSize={{ xs: "1rem", sm: "1.2rem" }}
                    >
                      {i + 1} - name : {book.name} |
                    </Typography>
                    <Typography
                      fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      display={"inline-block"}
                      color={"primary.dark"}
                      fontWeight={"bold"}
                    >
                      phone : {book.number}
                    </Typography>
                  </Grid2>
                ) : null;
              })
            )
          )}
        </Grid2>
      )}
    </Grid2>
  );
};

export default DoctorInfos;
