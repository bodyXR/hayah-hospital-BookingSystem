import {
  Link,
  Stack,
  TextField,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import doctor from "../assets/doctor.jpg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomButton from "../Components/CustomButton";
import { LOGIN_ROUTE } from "../routes/paths";
import { addUser } from "../features/users/usersSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const users: any = useSelector(selectAllUsers);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  const nameChanged = (e: any) => setName(e.target.value);
  const passwordChanged = (e: any) => setPassword(e.target.value);
  const confirmPasswordChanged = (e: any) => setConfirmPassword(e.target.value);

  function onSubmit() {
    if (name && password) {
      if (password.length < 8) {
        setErrMsg("Error! password must be at least 8 characters.");
        setTimeout(() => setErrMsg("") , 5000);
      }else{
        if (password === confirmPassword) {
          let foundUser = false;
          for (let i = 0; i < users.length; i++) {
            if (users[i].uName == name) {
              foundUser = true;
            }
          }
          if (foundUser) {
            setErrMsg("Error! username already exists.");
            setTimeout(() => setErrMsg(""), 5000);
          } else {
            dispatch(addUser(name, password));
            setName("");
            setPassword("");
            setConfirmPassword("");
            setSuccess(true);
          }
        } else {
          setErrMsg("Error! password field not equal cofirm password field.");
          setTimeout(() => setErrMsg(""), 5000);
        }
      }
    } else {
      setErrMsg("Error! cant enter empty string as username or password.");
      setTimeout(() => setErrMsg(""), 5000);
    }
  }
  
  return (
    <Container>
      {errMsg && (
        <Alert severity="error" sx={{ mt: "10px" }}>
          {errMsg}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mt: "10px" }}>
          Account created successfuly go and <Link href={LOGIN_ROUTE}>Login</Link>
        </Alert>
      )}
      <Container
        fixed
        sx={{
          height: errMsg ? "88vh" : "100vh",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Grid2 container justifyContent="center" alignItems="center">
          {/* doctor image */}
          <Grid2 xs={0} sm={6}>
            <img src={doctor} style={{ objectFit: "contain", width: "100%" }} />
          </Grid2>

          {/* Right section */}
          <Grid2 xs>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
                mb={4}
              >
                Create Account
              </Typography>

              <Grid2 xs={12} sm={7}>
                <TextField
                  label="Username"
                  variant="standard"
                  fullWidth
                  value={name}
                  onChange={nameChanged}
                />

                <TextField
                  label="Password"
                  variant="standard"
                  fullWidth
                  sx={{ mt: "10px" }}
                  type="password"
                  value={password}
                  onChange={passwordChanged}
                />

                <TextField
                  label="Confirm Password"
                  variant="standard"
                  fullWidth
                  sx={{ mt: "10px", mb: "10px" }}
                  type="password"
                  value={confirmPassword}
                  onChange={confirmPasswordChanged}
                />

                <CustomButton text="Create account" onSubmit={onSubmit} />

                <Typography sx={{ mt: "10px", textAlign: "center" }}>
                  <Link href={LOGIN_ROUTE} sx={{ color: "primary.dark" }}>
                    already have an account?
                  </Link>
                </Typography>
              </Grid2>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Container>
  );
};

export default CreateAccount;
