import {
  Alert,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import doctor from "../assets/doctor.jpg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FORGOT_PASSWORD_ROUTE, SIGNUP_ROUTE } from "../routes/paths";
import CustomButton from "../Components/CustomButton.js";
import { selectAllUsers } from "../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthStatus, setUsername } from "../features/auth/authSlice.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const users: any = useSelector(selectAllUsers);
  //const auth = useSelector((state: any) => state.auth.isAuth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const nameChanged = (e: any) => setName(e.target.value);
  const passwordChanged = (e: any) => setPassword(e.target.value);

  function onSubmit() {
    if (name && password) {
      let found = false;

      for (let i = 0; i < users.length; i++) {
        if (users[i].uName == name && users[i].uPassword == password) {
          found = true;
        }
      }
      if (found) {
        dispatch(setAuthStatus(true));
        dispatch(setUsername(name));
        navigate("/home", { replace: true });
      } else {
        setErrMsg("Error! invalid username or password.");
        setTimeout(() => setErrMsg(""), 5000);
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
                variant="h2"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
                mb={4}
              >
                Welcome
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

                <Typography sx={{ mt: "10px", textAlign: "end" }}>
                  <Link
                    href={FORGOT_PASSWORD_ROUTE}
                    sx={{ color: "primary.dark" }}
                  >
                    forgot password?
                  </Link>
                </Typography>

                <CustomButton text="login" onSubmit={onSubmit} />

                <Typography sx={{ mt: "10px", textAlign: "center" }}>
                  <Link href={SIGNUP_ROUTE} sx={{ color: "primary.dark" }}>
                    Dont have an account?
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

export default Login;
