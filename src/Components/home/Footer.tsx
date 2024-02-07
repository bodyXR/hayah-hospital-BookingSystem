import { Link, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Footer = () => {
  return (
    <Grid2 width={"100vw"} p={"3rem 10vw 0 10vw"} mb={2}>
        <Grid2 borderBottom={"1px #1F2B6C solid"} pb={2}>
            <Typography fontWeight={600} fontSize={"2rem"} color={"blue.main"}>
                El Hayah
            </Typography>
            <Typography fontSize={{xs:"1rem",md:"1.2rem"}} color={"blue.main"} lineHeight={1.6} mt={1} width={{md:"35%"}}>
                We will give you a proper medical care services within a reasonable cost via specialist doctor.
            </Typography>
        </Grid2>
        <Grid2 display={"flex"} gap={{xs:1,md:3}} color={"background.dark"} >
            <Link href="#" sx={{textDecoration:"none" , color : "background.dark"}} mt={1.5}>Facebook</Link>
            <Typography fontSize={30}>|</Typography>
            <Link href="#" sx={{textDecoration:"none" , color : "background.dark"}} mt={1.5}>Twitter</Link>
            <Typography fontSize={30}>|</Typography>
            <Link href="#" sx={{textDecoration:"none" , color : "background.dark"}} mt={1.5}>Youtube</Link>
            <Typography fontSize={30}>|</Typography>
            <Link href="#" sx={{textDecoration:"none" , color : "background.dark"}} mt={1.5}>Instagram</Link>
        </Grid2>
    </Grid2>
  )
}

export default Footer
