import { Link, Stack } from "@mui/material"
import missing from "../assets/missing.jpg"

const Missing = () => {
  return (
    <Stack
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
    >
        <img src={missing} style={{ objectFit: "contain", width: "45%" }} />
        <Link href="/home">Back To Home Page</Link>
    </Stack>
  )
}

export default Missing