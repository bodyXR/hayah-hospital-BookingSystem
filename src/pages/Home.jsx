import AppTopBar from "../Components/home/AppTopBar.jsx";
import Hero from "../Components/home/Hero.tsx";
import HowWeWork from "../Components/home/HowWeWork.tsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import WhyChooseUs from "../Components/home/WhyChooseUs.tsx";
import Testimorials from "../Components/home/Testimorials.tsx";
import Team from "../Components/home/Team.jsx";
import Footer from "../Components/home/Footer.tsx";

const Home = () => {
  return (
    <Grid2>
      <Grid2 top={{xs:"15rem",md:"-15rem"}} right={{xs:"10rem", md:"-20rem"}} className="green-circle"></Grid2>
      <Grid2 display={{xs:"none" , md:"block"}} className="blue-circle"></Grid2>
      <AppTopBar/>
      <Hero/>
      <HowWeWork/>
      <WhyChooseUs/>
      <Testimorials/>
      <Team/>
      <Footer/>
      {/* <DoctorsPage/> */}
    </Grid2>
  )
}

export default Home