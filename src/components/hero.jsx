import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box component="section">
      <Box
        className="hero-fallback flex flex-col items-center justify-center bg-gray-50"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container
          maxWidth="lg"
          className="flex flex-col items-center"
          sx={{ pb: 0 }}
        >
          <Box
            className="w-full mb-8"
            sx={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              borderRadius: 3,
            }}
          >
            <img
              src="https://images.dhmedia.io/image/talabat/DineOut/WebLanding/hero.jpg"
              alt="banner"
              className="w-full h-auto rounded-lg"
            />
          </Box>

          <Box className="text-center flex flex-col items-center">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                color: "rgb(245,89,5)",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
                lineHeight: 1.2,
              }}
            >
              Meet DineOut Deals
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: "rgb(245,89,5)",
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                },
                mt: 3,
                lineHeight: 1.3,
              }}
            >
              Get up to 50% off when you dine out and pay through the talabat
              app
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: "#333",
                fontSize: { xs: "1rem", md: "1.25rem", lg: "1.5rem" },
                lineHeight: 1.5,
              }}
            >
              Find the best restaurants, cafés and bars in UAE
            </Typography>

            <Button
              component={Link}
              to="/restaurants"
              variant="contained"
              sx={{
                mt: 6,
                px: 6,
                py: 2,
                backgroundColor: "rgb(245,89,5)",
                color: "white",
                fontWeight: 700,
                fontSize: { xs: "0.875rem", md: "1rem" },
                borderRadius: "8px",
                "&:hover": { backgroundColor: "rgb(220,70,5)" },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
