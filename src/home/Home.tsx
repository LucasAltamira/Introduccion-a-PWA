import { Container, Box } from "@mui/material";
import MainSection from "@/src/home/components/MainSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <MainSection />
        <Box display={"flex"} justifyContent={"center"}>
          <img
            width="200px"
            height="200px"
            src="https://png.pngtree.com/thumb_back/fw800/background/20210918/pngtree-cartoon-hand-painted-city-building-design-image_903476.png"
            alt=""
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
